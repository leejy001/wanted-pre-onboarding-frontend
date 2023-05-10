import styled from "styled-components";
import { useState } from "react";
import { TodoItemTypes } from "../../../types/todo";
import DefaultButton from "../../../components/DefaultButton";
import { deleteTodoApi, updateTodoApi } from "../../../api/todo";

function TodoItem({ todoInfo, isChange, setIsChange }: TodoItemTypes) {
  const [todo, setTodo] = useState(todoInfo.todo);
  const [isCompleted, setIsCompleted] = useState(todoInfo.isCompleted);
  const [isEdit, setIsEdit] = useState(false);

  const handleToggleEdit = () => {
    setIsEdit(!isEdit);
    setTodo(todoInfo.todo);
  };

  const handleCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateTodoApi(todoInfo.id, event.target.checked, todo);
    setIsCompleted(event.target.checked);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const editTodoClickHandler = async () => {
    const result = await updateTodoApi(todoInfo.id, isCompleted, todo);
    if (result === "success") {
      setIsEdit(false);
      setIsChange(!isChange);
    }
  };

  const deleteTodoClickHandler = async () => {
    const result = await deleteTodoApi(todoInfo.id);
    if (result === "success") setIsChange(!isChange);
  };

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
            data-testid="submit-button"
          />
          <DefaultButton
            name="취소"
            className="primary"
            width={60}
            height={30}
            fontSize={16}
            type="button"
            onClick={handleToggleEdit}
            data-testid="cancel-button"
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
            onClick={deleteTodoClickHandler}
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
  label input[type="checkbox"] {
    margin-right: 10px;
  }
  label span {
    font-size: 16px;
    font-weight: 600;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 5px;
`;
