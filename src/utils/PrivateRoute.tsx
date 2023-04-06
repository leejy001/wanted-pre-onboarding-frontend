import { Navigate } from "react-router-dom";
import { getAccessTokenFromLocalStorage } from "./accessTokenHandler";

export interface PrivateRouteProps {
  authenticationPath: string;
  outlet: JSX.Element;
}

export default function PrivateRoute({
  authenticationPath,
  outlet
}: PrivateRouteProps) {
  if (getAccessTokenFromLocalStorage()) {
    return outlet;
  }
  return <Navigate to={{ pathname: authenticationPath }} />;
}
