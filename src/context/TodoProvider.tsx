import { createContext, useCallback, useContext, useState } from "react";
import { TodoContextType, TodoProviderType } from "../types/context";
import { TodoInfo } from "../types/todo";

const TodoContext = createContext<TodoContextType | null>(null);

export function TodoProvider({
  children,
  todoApi
}: React.PropsWithChildren<TodoProviderType>) {
  const [todos, setTodos] = useState<TodoInfo[]>([]);

  const getTodo = useCallback(async () => {
    const result = await todoApi.get();
    if (result.status === "success") setTodos(result.todos);
  }, [todoApi]);

  const create = async (todo: string): Promise<string> => {
    const newTodo = await todoApi.create(todo);
    if (newTodo.todo) setTodos([...todos, newTodo.todo]);
    return newTodo.status;
  };

  const update = async (
    id: number,
    isCompleted: boolean,
    todo: string
  ): Promise<string> => {
    const result = await todoApi.update(id, isCompleted, todo);
    if (result === "success") getTodo();
    return result;
  };

  const remove = async (id: number) => {
    const result = await todoApi.delete(id);
    if (result === "success") getTodo();
  };

  return (
    <TodoContext.Provider value={{ todos, getTodo, create, update, remove }}>
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
