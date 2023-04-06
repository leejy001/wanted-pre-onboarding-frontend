import styled from "styled-components";
import { TodoInfo } from "../../../types/todo";
import DefaultButton from "../../../components/DefaultButton";

interface ParentProps {
  todos: TodoInfo[];
}

function TodoList({ todos }: ParentProps) {
  return (
    <TodoListWrapper>
      {todos.map((item) => (
        <TodoItem key={item.id}>
          <label>
            <input type="checkbox" />
            <span>{item.todo}</span>
          </label>
          <ButtonWrapper>
            <DefaultButton
              name="수정"
              className="primary"
              width={60}
              height={30}
              fontSize={16}
              type="button"
              data-testid="modify-button"
            />
            <DefaultButton
              name="삭제"
              className="primary"
              width={60}
              height={30}
              fontSize={16}
              type="button"
              data-testid="delete-button"
            />
          </ButtonWrapper>
        </TodoItem>
      ))}
    </TodoListWrapper>
  );
}

export default TodoList;

export const TodoListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 10px;
`;

export const TodoItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #add8e6;
  border-radius: 5px;
  padding: 10px 5px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 5px;
`;
