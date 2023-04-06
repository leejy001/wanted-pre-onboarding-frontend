import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PrivateRoute, { PrivateRouteProps } from "./utils/PrivateRoute";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import Auth from "./pages/auth";
import Todo from "./pages/todo";

function App() {
  const defaultProtectedRouteProps: Omit<PrivateRouteProps, "outlet"> = {
    authenticationPath: "/signin"
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/todo"
          element={
            <PrivateRoute {...defaultProtectedRouteProps} outlet={<Todo />} />
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
