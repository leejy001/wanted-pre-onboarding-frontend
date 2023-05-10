export interface CreateTodoTypes {
  isChange: boolean;
  setIsChange: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface TodoItemTypes {
  todoInfo: TodoInfo;
  isChange: boolean;
  setIsChange: React.Dispatch<React.SetStateAction<boolean>>;
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
