import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import client from "../../../lib/client";
import moment from "moment";

async function refreshAccessToken(refresh_token) {
  try {
    // Get a new set of tokens with a refreshToken
    const tokenResponse = await client.post("auth/refresh-token", {
      refresh_token: refresh_token,
    });

    return {
      accessToken: tokenResponse.data.token,
      accessTokenExpiry: tokenResponse.data.accessTokenExpiry,
      refreshToken: tokenResponse.data.refreshToken,
    };
  } catch (error) {
    return {
      error: "RefreshAccessTokenError",
    };
  }
}

const providers = [
  CredentialsProvider({
    name: "Credentials",
    authorize: async (credentials) => {
      try {
        // Authenticate user with credentials
        const user = await client.post("auth/login", {
          password: credentials.password,
          email: credentials.email,
        });

        if (user.data.token) {
          return user.data;
        }

        return null;
      } catch (e) {
        throw new Error(e.response.data.error);
      }
    },
  }),
];
const callbacks = {
  jwt: async ({ token, user }) => {
    if (user) {
      token.user = user.user;
      token.accessToken = user.token;
      const formattedDate = moment().add(1, "minutes").format("YYYY-MM-DD HH:mm:ss");
      token.accessTokenExpiry = formattedDate;
      token.refreshToken = user.refreshToken;
    }

    // get the value of the time remaining until the access token expires in milliseconds
    const shouldRefreshTime = moment(token.accessTokenExpiry).diff(moment(), "seconds");
    // console.log("shouldRefreshTime", shouldRefreshTime);

    // if the time remaining is less than 23 hours (82800 seconds) we will refresh the token
    if (shouldRefreshTime < 82800) {
      const newToken = await refreshAccessToken(token.refreshToken);
      token.accessToken = newToken.accessToken;
      token.accessTokenExpiry = newToken.accessTokenExpiry;
      token.refreshToken = newToken.refreshToken;
    }

    return Promise.resolve(token);
  },
  session: async ({ session, token }) => {
    session.user = token.user;
    session.token = token.accessToken;
    const shouldRefreshTime = moment(token.accessTokenExpiry).diff(moment(), "seconds");
    session.expires = shouldRefreshTime;
    return Promise.resolve(session);
  },
};

export const options = {
  providers,
  callbacks,
  pages: {},
  secret: "your_secret",
};

const Auth = (req, res) => NextAuth(req, res, options);
export default Auth;
