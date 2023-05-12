import React, { useState } from "react";
import styled from "styled-components";
import { CreateTodoTypes } from "../../../types/todo";
import { TodoApi } from "../../../api/todoApi";
import { HttpClient } from "../../../api/httpClient";
import { LocalTokenRepository } from "../../../utils/LocalTokenRepository";
import DefaultButton from "../../../components/DefaultButton";

const localTokenRepository = new LocalTokenRepository();
const httpClient = new HttpClient(localTokenRepository);
const todoApi = new TodoApi(httpClient);

function CreateTodo({ isChange, setIsChange }: CreateTodoTypes) {
  const [todo, setTodo] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const todoSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await todoApi.create(todo);
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
