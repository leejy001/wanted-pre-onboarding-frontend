import { useNavigate } from "react-router-dom";
import { getAccessTokenFromSessionStorage } from "../../utils/accessTokenHandler";
import Container from "../../components/Container";
import DefaultButton from "../../components/DefaultButton";

function Index() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    if (getAccessTokenFromSessionStorage()) {
      navigate("/todo");
    } else {
      navigate("/auth/signin");
    }
  };

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
