export interface CreateTodosRequest {}

export interface TodoInfo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export interface TodosResult {
  status: string;
  todos: TodoInfo[];
}
