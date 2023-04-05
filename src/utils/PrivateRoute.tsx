import { Navigate } from "react-router-dom";
import { getAccessTokenFromSessionStorage } from "./accessTokenHandler";

export interface PrivateRouteProps {
  authenticationPath: string;
  outlet: JSX.Element;
}

export default function PrivateRoute({
  authenticationPath,
  outlet
}: PrivateRouteProps) {
  if (getAccessTokenFromSessionStorage()) {
    return outlet;
  }
  return <Navigate to={{ pathname: authenticationPath }} />;
}
