import { URL } from "../constants";
import { SignInRequest, SignUpRequest } from "../types/sign";
import { LocalTokenRepository } from "../utils/LocalTokenRepository";
import { fetchClient } from "./fetchClient";

const localTokenRepository = new LocalTokenRepository();

export const signinApi = async (args: SignInRequest): Promise<string> => {
  const signInRes = await fetchClient(URL.SIGNIN_URL, {
    method: "POST",
    body: JSON.stringify(args)
  });

  if (signInRes.ok) {
    const signinResponseData = await signInRes.json();
    localTokenRepository.save(signinResponseData.access_token);
    return "success";
  }

  return "fail";
};

export const signupApi = async (args: SignUpRequest): Promise<string> => {
  const signUpRes = await fetchClient(URL.SIGNUP_URL, {
    method: "POST",
    body: JSON.stringify(args)
  });

  if (signUpRes.ok) {
    return "success";
  }

  return "fail";
};
