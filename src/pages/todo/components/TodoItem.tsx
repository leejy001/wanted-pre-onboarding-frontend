import styled from "styled-components";
import { TodoInfo } from "../../../types/todo";
import DefaultButton from "../../../components/DefaultButton";
import { updateTodoApi } from "../../../api/todo";
import { useCallback, useEffect, useState } from "react";

interface ParentProps {
  todoInfo: TodoInfo;
}

function TodoItem({ todoInfo }: ParentProps) {
  const [todo, setTodo] = useState(todoInfo.todo);
  const [isCompleted, setIsCompleted] = useState(todoInfo.isCompleted);
  const [isEdit, setIsEdit] = useState(false);

  const handleToggleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateTodoApi(todoInfo.id, event.target.checked, todo);
    setIsCompleted(event.target.checked);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const editTodoClickHandler = useCallback(async () => {
    const result = await updateTodoApi(todoInfo.id, isCompleted, todo);
    if (result === "success") {
      setIsEdit(false);
    }
  }, [isCompleted, todo, todoInfo.id]);

  return (
    <TodoItemContainer>
      <label>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={handleCheckBoxChange}
        />
        {isEdit ? (
          <input
            value={todo}
            onChange={handleInputChange}
            data-testid="modify-input"
          />
        ) : (
          <span>{todo}</span>
        )}
      </label>
      {isEdit ? (
        <ButtonWrapper>
          <DefaultButton
            name="제출"
            className="primary"
            width={60}
            height={30}
            fontSize={16}
            type="button"
            onClick={editTodoClickHandler}
            data-testid="modify-button"
          />
          <DefaultButton
            name="취소"
            className="primary"
            width={60}
            height={30}
            fontSize={16}
            type="button"
            onClick={handleToggleEdit}
            data-testid="delete-button"
          />
        </ButtonWrapper>
      ) : (
        <ButtonWrapper>
          <DefaultButton
            name="수정"
            className="primary"
            width={60}
            height={30}
            fontSize={16}
            type="button"
            onClick={handleToggleEdit}
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
      )}
    </TodoItemContainer>
  );
}

export default TodoItem;

export const TodoItemContainer = styled.li`
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
