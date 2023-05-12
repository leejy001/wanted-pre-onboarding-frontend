import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./theme/globalStyle";
import { AuthApi } from "./api/authApi";
import { HttpClient } from "./api/httpClient";
import { LocalTokenRepository } from "./utils/LocalTokenRepository";
import { AuthProvider } from "./context/AuthProvider";
import { TodoProvider } from "./context/TodoProvider";
import { TodoApi } from "./api/todoApi";

const localTokenRepository = new LocalTokenRepository();
const httpClient = new HttpClient(localTokenRepository);
const authApi = new AuthApi(httpClient, localTokenRepository);
const todoApi = new TodoApi(httpClient);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <AuthProvider authApi={authApi} tokenRepository={localTokenRepository}>
    <TodoProvider todoApi={todoApi}>
      <GlobalStyle />
      <App />
    </TodoProvider>
  </AuthProvider>
);
