import { TodosResult } from "../types/todo";
import { fetchClient } from "./fetchClient";

export const getTodosApi = async (): Promise<TodosResult> => {
  const todosRes = await fetchClient("todos", {
    method: "GET"
  });

  if (todosRes.ok) {
    const todosResponseData = await todosRes.json();
    return { status: "success", todos: todosResponseData };
  }

  return { status: "success", todos: [] };
};
