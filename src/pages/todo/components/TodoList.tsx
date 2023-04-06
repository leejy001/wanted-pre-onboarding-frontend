import { useEffect, useState } from "react";
import styled from "styled-components";
import { getTodosApi } from "../../../api/todo";
import { TodoInfo } from "../../../types/todo";

function TodoList() {
  const [todos, setTodos] = useState<TodoInfo[]>([]);
  const getTodosInfoHandler = async () => {
    const result = await getTodosApi();
    if (result.status === "success") setTodos(result.todos);
  };

  useEffect(() => {
    getTodosInfoHandler();
  }, []);

  return (
    <TodoListWrapper>
      {todos.map((item) => (
        <li key={item.id}>{item.todo}</li>
      ))}
    </TodoListWrapper>
  );
}

export default TodoList;

export const TodoListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
`;
