import { useNavigate } from "react-router-dom";
import { getAccessTokenFromSessionStorage } from "../../utils/accessTokenHandler";
import Container from "../../components/Container";
import DefaultButton from "../../components/DefaultButton";
import { useEffect } from "react";

function Index() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    if (getAccessTokenFromSessionStorage()) {
      navigate("/todo");
    } else {
      navigate("/auth/signin");
    }
  };

  useEffect(() => {
    if (getAccessTokenFromSessionStorage()) {
      navigate("/todo", { replace: true });
    }
  }, [navigate]);

  return (
    <Container title={"ToDo"}>
      <DefaultButton
        name="Sign In"
        className="primary"
        width={200}
        height={40}
        onClick={handleSignIn}
      />
      <DefaultButton
        name="Sign Up"
        className="primary"
        width={200}
        height={40}
        onClick={() => navigate("/auth/signup")}
      />
    </Container>
  );
}

export default Index;
