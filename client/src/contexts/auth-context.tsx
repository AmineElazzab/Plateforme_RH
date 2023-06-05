import { createContext, useContext, useEffect, useReducer, useRef } from "react";
import PropTypes from "prop-types";
import { login } from "../api/auth";
import { fetchUser } from "../api/user";
import JWTToken from "../lib/token";

type ActionType = "INITIALIZE" | "SIGN_IN" | "SIGN_OUT";

// const initialState = {
//   isAuthenticated: false,
//   isLoading: true,
//   user: null,
// };

interface State {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: object;
}

interface Action {
  type: ActionType;
  payload?: any;
}

const HANDLERS: Record<ActionType, (state: State, action: Action) => State> = {
  INITIALIZE: (state, action) => {
    const user = action.payload;

    return {
      ...state,
      ...(user
        ? {
            isAuthenticated: true,
            isLoading: false,
            user,
          }
        : {
            isLoading: false,
          }),
    };
  },
  SIGN_IN: (state, action) => {
    const user = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
  SIGN_OUT: (state) => {
    return {
      ...state,
      isAuthenticated: false,
      user: null,
    };
  },
};

const initialState: State = {
  isAuthenticated: false,
  isLoading: true,
  user: null,
};

// const reducer = (state, action) =>
//   handlers[action.type] ? handlers[action.type](state, action) : state;
const reducer = (state: State, action: Action): State =>
  HANDLERS[action.type] ? HANDLERS[action.type](state, action) : state;
// The role of this context is to propagate authentication state through the App tree.

export const AuthContext = createContext<State | undefined>(undefined);

export const AuthProvider = (props: any) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const initialized = useRef(false);

  const initialize = async () => {
    // Prevent from calling twice in development mode with React.StrictMode enabled
    if (initialized.current) {
      return;
    }

    initialized.current = true;

    let isAuthenticated = false;

    try {
      isAuthenticated = localStorage.getItem("authenticated") === "true";
    } catch (err) {
      console.error(err);
    }

    if (isAuthenticated) {
      const userId = localStorage.getItem("user_id");
      const user = await fetchUser(userId);

      if (user.error) {
        console.error(user.error);
        isAuthenticated = false;
      } else {
        dispatch({
          type: "INITIALIZE",
          payload: user.user,
        });
      }
    } else {
      dispatch({
        type: "INITIALIZE",
      });
    }
  };

  useEffect(
    () => {
      initialize();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const signIn = async (email: string, password: string) => {
    const response = await login(email, password);

    if (response.error) {
      throw new Error(response.error);
    }

    const token = response.data.token;
    const user_id = response.data.user_id;

    JWTToken.store(token);

    try {
      localStorage.setItem("authenticated", "true");
      localStorage.setItem("user_id", user_id);
    } catch (err) {
      console.error(err);
    }

    dispatch({
      type: "SIGN_IN",
      payload: response.data,
    });
  };

  const signUp = async (email: string, name: string, password: string) => {
    throw new Error("Sign up is not implemented");
  };

  const signOut = () => {
    localStorage.removeItem("authenticated");
    localStorage.removeItem("user_id");
    JWTToken.removeToken();
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export const AuthConsumer = AuthContext.Consumer;

export const useAuthContext = () => useContext(AuthContext);
