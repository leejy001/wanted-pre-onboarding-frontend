import { Navigate } from "react-router-dom";
import { LocalTokenRepository } from "./LocalTokenRepository";

export interface PrivateRouteProps {
  authenticationPath: string;
  outlet: JSX.Element;
}

const localTokenRepository = new LocalTokenRepository();

export default function PrivateRoute({
  authenticationPath,
  outlet
}: PrivateRouteProps) {
  if (localTokenRepository.get()) {
    return outlet;
  }
  return <Navigate to={{ pathname: authenticationPath }} />;
}
