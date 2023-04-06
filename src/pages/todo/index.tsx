import styled from "styled-components";
import LogoutButton from "./components/LogoutButton";
import Today from "./components/Today";
import TodoList from "./components/TodoList";

function Todo() {
  return (
    <TodoContainer>
      <LogoutButton />
      <TodoWrapper>
        <TodoContainerHeader>
          <Today />
        </TodoContainerHeader>
        <TodoList />
        <TodoContainerFooter></TodoContainerFooter>
        <CreateButtonWrapper></CreateButtonWrapper>
      </TodoWrapper>
    </TodoContainer>
  );
}

export default Todo;

export const TodoContainer = styled.div`
  width: 700px;
  margin: 0 auto;
  position: relative;
`;

export const TodoWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 450px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 10px 5px 5px rgba(0, 116, 228, 0.5);
  padding: 40px 40px 0 40px;
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

export const TodoContainerFooter = styled.div`
  padding: 30px 0px 50px;
  p {
    font-weight: 700;
    span {
      color: #1e90ff;
      font-size: 18px;
    }
  }
`;

export const CreateButtonWrapper = styled.div`
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
`;
