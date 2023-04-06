import styled from "styled-components";
import { useEffect, useState } from "react";
import { TodoInfo } from "../../types/todo";
import { getTodosApi } from "../../api/todo";
import LogoutButton from "./components/LogoutButton";
import Today from "./components/Today";
import CreateTodo from "./components/CreateTodo";
import TodoItem from "./components/TodoItem";

function Todo() {
  const [todos, setTodos] = useState<TodoInfo[]>([]);
  const [isChange, setIsChange] = useState<boolean>(false);

  const getTodosInfoHandler = async () => {
    const result = await getTodosApi();
    if (result.status === "success") setTodos(result.todos);
  };

  useEffect(() => {
    getTodosInfoHandler();
  }, [isChange]);

  return (
    <TodoContainer>
      <LogoutButton />
      <TodoWrapper>
        <TodoContainerHeader>
          <Today />
        </TodoContainerHeader>
        <CreateTodo isChange={isChange} setIsChange={setIsChange} />
        <TodoListWrapper>
          {todos.map((item) => (
            <TodoItem key={item.id} todoInfo={item} />
          ))}
        </TodoListWrapper>
      </TodoWrapper>
    </TodoContainer>
  );
}

export default Todo;

export const TodoContainer = styled.div`
  width: 750px;
  margin: 0 auto;
  position: relative;
`;

export const TodoWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 500px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 10px 5px 5px rgba(0, 116, 228, 0.5);
  padding: 40px;
  z-index: 100;
`;

export const TodoContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    margin-top: 10px;
    font-size: 16px;
    font-weight: 700;
  }
`;

export const TodoListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 10px;
`;
