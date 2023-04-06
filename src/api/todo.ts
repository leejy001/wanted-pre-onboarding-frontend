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

  return { status: "fail", todos: [] };
};

export const createTodoApi = async (todo: string): Promise<string> => {
  const todosRes = await fetchClient("todos", {
    method: "POST",
    body: JSON.stringify({ todo })
  });

  if (todosRes.ok) {
    return "success";
  }

  return "fail";
};

export const updateTodoApi = async (
  id: number,
  isCompleted: boolean,
  todo: string
): Promise<string> => {
  const todosRes = await fetchClient(`todos/${id}`, {
    method: "PUT",
    body: JSON.stringify({ todo, isCompleted })
  });

  if (todosRes.ok) {
    return "success";
  }

  return "fail";
};
