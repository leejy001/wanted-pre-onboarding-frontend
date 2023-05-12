import { URL } from "../constants";
import { TodosResult } from "../types/todo";
import { LocalTokenRepository } from "../utils/LocalTokenRepository";
import { HttpClient } from "./httpClient";

const localTokenRepository = new LocalTokenRepository();
const httpClient = new HttpClient(localTokenRepository);

export const getTodosApi = async (): Promise<TodosResult> => {
  const todosRes = await httpClient.fetch(URL.TODO_URL, {
    method: "GET"
  });

  if (todosRes.ok) {
    const todosResponseData = await todosRes.json();
    return { status: "success", todos: todosResponseData };
  }

  return { status: "fail", todos: [] };
};

export const createTodoApi = async (todo: string): Promise<string> => {
  const createRes = await httpClient.fetch(URL.TODO_URL, {
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
  const updateRes = await httpClient.fetch(`${URL.TODO_URL}/${id}`, {
    method: "PUT",
    body: JSON.stringify({ todo, isCompleted })
  });

  if (updateRes.ok) {
    return "success";
  }

  return "fail";
};

export const deleteTodoApi = async (id: number): Promise<string> => {
  const deleteRes = await httpClient.fetch(`${URL.TODO_URL}/${id}`, {
    method: "DELETE"
  });

  if (deleteRes.ok) {
    return "success";
  }

  return "fail";
};
