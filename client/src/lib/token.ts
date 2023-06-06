import { destroyCookie, parseCookies, setCookie } from "nookies";
import { NextPageContext } from "next";

const COOKIE_AGE = 30 * 24 * 60 * 60; // 30 days;

export default class JWTToken {
  static store(token: string) {
    setCookie(null, "token", token, {
      maxAge: COOKIE_AGE,
      path: "/",
    });
  }

  static getToken(ctx: NextPageContext | null = null) {
    const cookies = parseCookies(ctx);
    const token = cookies["token"] ? "Bearer " + cookies["token"] : "";
    return token;
  }

  static removeToken() {
    destroyCookie(null, "token", { path: "/" });
  }
}
