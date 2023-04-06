import { useNavigate } from "react-router-dom";
import { getAccessTokenFromLocalStorage } from "../../utils/accessTokenHandler";
import Container from "../../components/Container";
import DefaultButton from "../../components/DefaultButton";
import { useEffect } from "react";
import styled from "styled-components";

function Index() {
  const navigate = useNavigate();

  useEffect(() => {
    if (getAccessTokenFromLocalStorage()) {
      navigate("/todo", { replace: true });
    }
  }, [navigate]);

  return (
    <Container title={"ToDo"}>
      <ButtonWrapper>
        <DefaultButton
          name="Sign In"
          className="primary"
          width={200}
          height={40}
          onClick={() => navigate("/signin")}
        />
        <DefaultButton
          name="Sign Up"
          className="primary"
          width={200}
          height={40}
          onClick={() => navigate("/signup")}
        />
      </ButtonWrapper>
    </Container>
  );
}

export default Index;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
