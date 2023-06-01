import axios from "axios";
import JWTToken from "./token";
import { API_URL } from "./globals";

const client = axios.create({
  baseURL: API_URL,
});

const refreshTokenClient = axios.create({
  baseURL: API_URL,
});

refreshTokenClient.interceptors.request.use(
  function (config) {
    const refreshToken = JWTToken.getRefreshToken();

    if (refreshToken) {
      config.headers["Authorization"] = refreshToken;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

client.interceptors.request.use(
  async function (config) {
    const token = JWTToken.getToken();
    const refreshToken = JWTToken.getRefreshToken();

    if (token) {
      const isTokenExpired = JWTToken.isTokenExpired(token);

      if (isTokenExpired) {
        console.log("Token expired, refreshing...");
        try {
          const response = await refreshTokenClient.post("/auth/refresh-token", {
            refresh_token: refreshToken,
          });
          const newToken = response.data.token;
          JWTToken.setToken(newToken);
          JWTToken.setRefreshToken(response.data.refreshToken);
          config.headers["Authorization"] = newToken;
          console.log("Token refreshed");
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log("Token not expired, using existing token");
        config.headers["Authorization"] = token;
      }
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default client;
