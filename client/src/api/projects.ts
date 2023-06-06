import axios from "axios";
import { AxiosError } from "axios";
import JWTToken from "~lib/token";
import client from "~lib/client";

export const getProjects =
  (ctx: any = null) =>
  async () => {
    const token = JWTToken.getToken(ctx);

    try {
      const { data } = await client.get("/projects", {
        headers: {
          Authorization: token,
        },
      });
      return data;
    } catch (err) {
      let errorMessage: string;
      if (err instanceof AxiosError) {
        // axios error
        errorMessage = err.response?.data?.error || "Something Went Wrong";
      } else {
        errorMessage = "Something Went Wrong";
      }
      return { data: null, error: errorMessage };
    }
  };
