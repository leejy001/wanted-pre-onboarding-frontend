import React from "react";
import styled from "styled-components";

interface PropsType {
  title: string;
}

function Container({ title, children }: React.PropsWithChildren<PropsType>) {
  return (
    <MainContainer>
      <ContainerTitle>{title}</ContainerTitle>
      {children}
    </MainContainer>
  );
}

export default Container;

export const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 400px;
  height: 350px;
  border: 2px solid #1e90ff;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 10px 5px 5px #0074e4;
`;

export const ContainerTitle = styled.p`
  color: #1e90ff;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 20px;
`;
