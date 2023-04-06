import { SignInRequest, SignUpRequest } from "../types/sign";
import { saveAccessTokenToSessionStorage } from "../utils/accessTokenHandler";
import { fetchClient } from "./fetchClient";

export const signinApi = async (args: SignInRequest): Promise<string> => {
  const signInRes = await fetchClient("auth/signin", {
    method: "POST",
    body: JSON.stringify(args)
  });

  const signinResponseData = await signInRes.json();

  if (signInRes.ok) {
    saveAccessTokenToSessionStorage(signinResponseData.access_token);
    return "success";
  }

  return "fail";
};

export const signupApi = async (args: SignUpRequest): Promise<string> => {
  const signUpRes = await fetchClient("auth/signup", {
    method: "POST",
    body: JSON.stringify(args)
  });

  if (signUpRes.ok) {
    return "success";
  }

  return "fail";
};
