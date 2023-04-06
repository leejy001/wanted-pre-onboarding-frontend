import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PrivateRoute, { PrivateRouteProps } from "./utils/PrivateRoute";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import Auth from "./pages/auth";
import Todo from "./pages/todo";

function App() {
  const defaultProtectedRouteProps: Omit<PrivateRouteProps, "outlet"> = {
    authenticationPath: "/auth"
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/auth" />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route
          path="/todo"
          element={
            <PrivateRoute {...defaultProtectedRouteProps} outlet={<Todo />} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
