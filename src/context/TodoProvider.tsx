import { createContext, useContext, useEffect, useState } from "react";
import { TodoContextType, TodoProviderType } from "../types/context";
import { TodoInfo } from "../types/todo";

const TodoContext = createContext<TodoContextType | null>(null);

export const useTodo = () => useContext(TodoContext);

export function TodoProvider({
  children,
  todoApi
}: React.PropsWithChildren<TodoProviderType>) {
  const [todos, setTodos] = useState<TodoInfo[]>([]);

  useEffect(() => {
    const getTodos = async () => {
      const result = await todoApi.get();
      if (result.status === "success") setTodos(result.todos);
    };
    getTodos();
  }, [todoApi, setTodos]);

  const create = async (todo: string): Promise<string> => {
    const newTodo = await todoApi.create(todo);
    if (newTodo.todo) setTodos([...todos, newTodo.todo]);
    return newTodo.status;
  };

  return (
    <TodoContext.Provider value={{ todos, create }}>
      {children}
    </TodoContext.Provider>
  );
}

export const useTodoState = () => {
  const state = useContext(TodoContext);
  if (!state) {
    throw new Error("TodoContextProvider not found");
  }
  return state;
};
