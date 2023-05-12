import { AuthApi } from "../api/authApi";
import { TodoApi } from "../api/todoApi";
import { LocalTokenRepository } from "../utils/LocalTokenRepository";
import { SignInRequest, SignUpRequest } from "./sign";
import { TodoInfo } from "./todo";

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

export interface TodoProviderType {
  todoApi: TodoApi;
}

export interface TodoContextType {
  todos: TodoInfo[];
  create: (todo: string) => Promise<string>;
  update: (id: number, isCompleted: boolean, todo: string) => Promise<string>;
  remove: (id: number) => Promise<void>;
}
