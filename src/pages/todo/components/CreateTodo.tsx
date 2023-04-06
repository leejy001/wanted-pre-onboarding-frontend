import React, { useState } from "react";
import styled from "styled-components";
import DefaultButton from "../../../components/DefaultButton";
import { createTodoApi } from "../../../api/todo";

interface ParentProp {
  isChange: boolean;
  setIsChange: React.Dispatch<React.SetStateAction<boolean>>;
}

function CreateTodo({ isChange, setIsChange }: ParentProp) {
  const [todo, setTodo] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const todoSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await createTodoApi(todo);
    if (result === "success") {
      setIsChange(!isChange);
      setTodo("");
    }
  };

  return (
    <CreateTodoForm onSubmit={todoSubmitHandler}>
      <input
        type="text"
        value={todo}
        onChange={handleInputChange}
        placeholder="할일을 적어주세요."
        data-testid="new-todo-input"
      />
      <DefaultButton
        name="추가"
        className="primary"
        width={60}
        height={32}
        fontSize={16}
        type="submit"
        data-testid="new-todo-add-button"
      />
    </CreateTodoForm>
  );
}

export default CreateTodo;

const CreateTodoForm = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  align-items: center;
  gap: 10px;
  input {
    width: 100%;
    padding: 5px;
    border-radius: 5px;
    border: 2px solid #1e90ff;
    font-size: 16px;
  }
`;
