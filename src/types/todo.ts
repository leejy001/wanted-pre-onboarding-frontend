export interface TodoItemTypes {
  todoInfo: TodoInfo;
}

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

export interface TodosEditResult {
  status: string;
  todo?: TodoInfo;
}
