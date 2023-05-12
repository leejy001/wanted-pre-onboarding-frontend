import { useNavigate } from "react-router-dom";
import { LocalTokenRepository } from "../../utils/LocalTokenRepository";
import Container from "../../components/Container";
import DefaultButton from "../../components/DefaultButton";
import { useEffect } from "react";
import styled from "styled-components";

const localTokenRepository = new LocalTokenRepository();

function Index() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localTokenRepository.get()) {
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
