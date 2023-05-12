import { URL } from "../constants";
import { TodosEditResult, TodosResult } from "../types/todo";
import { HttpClient } from "./httpClient";

export class TodoApi {
  private httpClient: HttpClient;
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  async get(): Promise<TodosResult> {
    const todosRes = await this.httpClient.fetch(URL.TODO_URL, {
      method: "GET"
    });
    if (todosRes.ok) {
      const todosResponseData = await todosRes.json();
      return { status: "success", todos: todosResponseData };
    }
    return { status: "fail", todos: [] };
  }

  async create(todo: string): Promise<TodosEditResult> {
    const createRes = await this.httpClient.fetch(URL.TODO_URL, {
      method: "POST",
      body: JSON.stringify({ todo })
    });
    if (createRes.ok) {
      const createResponseData = await createRes.json();
      return { status: "success", todo: createResponseData };
    }
    return { status: "fail" };
  }

  async update(
    id: number,
    isCompleted: boolean,
    todo: string
  ): Promise<string> {
    const updateRes = await this.httpClient.fetch(`${URL.TODO_URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify({ todo, isCompleted })
    });
    if (updateRes.ok) {
      return "success";
    }
    return "fail";
  }

  async delete(id: number): Promise<string> {
    const deleteRes = await this.httpClient.fetch(`${URL.TODO_URL}/${id}`, {
      method: "DELETE"
    });
    if (deleteRes.ok) {
      return "success";
    }
    return "fail";
  }
}
