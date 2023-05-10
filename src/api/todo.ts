import { URL } from "../constants";
import { TodosResult } from "../types/todo";
import { fetchClient } from "./fetchClient";

export const getTodosApi = async (): Promise<TodosResult> => {
  const todosRes = await fetchClient(URL.TODO_URL, {
    method: "GET"
  });

  if (todosRes.ok) {
    const todosResponseData = await todosRes.json();
    return { status: "success", todos: todosResponseData };
  }

  return { status: "fail", todos: [] };
};

export const createTodoApi = async (todo: string): Promise<string> => {
  const createRes = await fetchClient(URL.TODO_URL, {
    method: "POST",
    body: JSON.stringify({ todo })
  });

  if (createRes.ok) {
    return "success";
  }

  return "fail";
};

export const updateTodoApi = async (
  id: number,
  isCompleted: boolean,
  todo: string
): Promise<string> => {
  const updateRes = await fetchClient(`${URL.TODO_URL}/${id}`, {
    method: "PUT",
    body: JSON.stringify({ todo, isCompleted })
  });

  if (updateRes.ok) {
    return "success";
  }

  return "fail";
};

export const deleteTodoApi = async (id: number): Promise<string> => {
  const deleteRes = await fetchClient(`${URL.TODO_URL}/${id}`, {
    method: "DELETE"
  });

  if (deleteRes.ok) {
    return "success";
  }

  return "fail";
};
