import React, { useState } from "react";
import styled from "styled-components";
import { useTodoState } from "../../../context/TodoProvider";
import DefaultButton from "../../../components/DefaultButton";

function CreateTodo() {
  const [todo, setTodo] = useState("");
  const { create } = useTodoState();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const todoSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await create(todo);
    if (result === "success") setTodo("");
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
