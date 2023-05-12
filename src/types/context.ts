import { AuthApi } from "../api/authApi";
import { LocalTokenRepository } from "../utils/LocalTokenRepository";
import { SignInRequest, SignUpRequest } from "./sign";

export interface AuthProviderType {
  authApi: AuthApi;
  tokenRepository: LocalTokenRepository;
}

export interface AuthContextType {
  signin: (args: SignInRequest) => Promise<string>;
  signup: (args: SignUpRequest) => Promise<string>;
  logout: () => void;
  isAuth: boolean;
}
