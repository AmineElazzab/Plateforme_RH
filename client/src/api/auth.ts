import { AxiosError } from "axios";
import client from "../lib/client";
import { LoginInputs } from "~lib/validation/auth";

interface ILoginResponse {
  token: string;
  refreshToken: string;
  userId?: number;
}
export const login = async (body: LoginInputs) => {
  console.log({body});
  try {
    const { data } = await client.post<ILoginResponse>("/auth/login", 
      body,
    );
    return { data, error: null };
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
