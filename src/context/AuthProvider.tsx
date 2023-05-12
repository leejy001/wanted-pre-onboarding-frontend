import { createContext, useContext, useState } from "react";
import { SignInRequest } from "../types/sign";
import { AuthContextType, AuthProviderType } from "../types/context";

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({
  children,
  authApi,
  tokenRepository
}: React.PropsWithChildren<AuthProviderType>) {
  const [isAuth, setIsAuth] = useState(!!tokenRepository.get());
  const signin = async (args: SignInRequest): Promise<string> => {
    const result = await authApi.signin.call(authApi, args);
    setIsAuth(true);
    return result;
  };
  const signup = authApi.signup.bind(authApi);
  const logout = () => {
    authApi.logout.call(authApi);
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider
      value={{
        signin,
        signup,
        logout,
        isAuth
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthState = () => {
  const state = useContext(AuthContext);
  if (!state) {
    throw new Error("AuthContextProvider not found");
  }
  return state;
};
