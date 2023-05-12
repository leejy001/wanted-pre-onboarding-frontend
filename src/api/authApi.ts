import { URL } from "../constants";
import { SignInRequest, SignUpRequest } from "../types/sign";
import { LocalTokenRepository } from "../utils/LocalTokenRepository";
import { HttpClient } from "./httpClient";

export class AuthApi {
  private httpClient: HttpClient;
  private tokenRepository: LocalTokenRepository;
  constructor(httpClient: HttpClient, tokenRepository: LocalTokenRepository) {
    this.httpClient = httpClient;
    this.tokenRepository = tokenRepository;
  }

  async signin(args: SignInRequest): Promise<string> {
    const signInRes = await this.httpClient.fetch(URL.SIGNIN_URL, {
      method: "POST",
      body: JSON.stringify(args)
    });
    if (signInRes.ok) {
      const signinResponseData = await signInRes.json();
      this.tokenRepository.save(signinResponseData.access_token);
      return "success";
    }
    return "fail";
  }

  async signup(args: SignUpRequest): Promise<string> {
    const signUpRes = await this.httpClient.fetch(URL.SIGNUP_URL, {
      method: "POST",
      body: JSON.stringify(args)
    });
    if (signUpRes.ok) {
      return "success";
    }
    return "fail";
  }

  logout() {
    this.tokenRepository.delete();
  }
}
