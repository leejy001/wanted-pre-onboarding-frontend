import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { isEmailValidate, isPasswordValidate } from "../../utils/validate";
import { useAuthState } from "../../context/AuthProvider";
import Input from "../../components/Input";
import Container from "../../components/Container";
import DefaultButton from "../../components/DefaultButton";

function SignIn() {
  const navigate = useNavigate();
  const { signin, isAuth } = useAuthState();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = (email: string, password: string) => {
    return isEmailValidate(email) && isPasswordValidate(password);
  };

  const isValid = validateForm(formData.email, formData.password);

  const signInSubmitHandler = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const result = await signin(formData);
    return result === "success" ? navigate("/todo") : setError(true);
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/todo", { replace: true });
      return;
    }
  }, [isAuth, navigate]);

  return (
    <Container title={"로그인"}>
      <SignUpMove onClick={() => navigate("/signup", { replace: true })}>
        새로 회원가입 하실건가요?
      </SignUpMove>
      <SignInForm onSubmit={signInSubmitHandler}>
        <Input
          title="이메일"
          type="email"
          name="email"
          handleChange={handleInputChange}
          placeholder={"@ 포함 이메일을 입력해주세요"}
          testid="email-input"
        />
        <Input
          title="패스워드"
          type="password"
          name="password"
          handleChange={handleInputChange}
          placeholder={"8자 이상 패스워드를 입력해주세요"}
          testid="password-input"
        />
        <DefaultButton
          name="로그인"
          className="primary"
          width={200}
          height={40}
          type="submit"
          data-testid="signin-button"
          disabled={!isValid}
        />
        {error && (
          <SignInError>
            로그인 실패!!
            <br />
            이메일과 패스워드를 다시 확인해주세요.
          </SignInError>
        )}
      </SignInForm>
      <MoveBackButton onClick={() => navigate(-1)}>뒤로</MoveBackButton>
    </Container>
  );
}

export default SignIn;

const SignInForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`;

const SignUpMove = styled.p`
  margin-bottom: 20px;
  font-size: 12px;
  font-weight: 600;
  color: #1e90ff;
  cursor: pointer;
`;

const SignInError = styled.p`
  color: red;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
`;

const MoveBackButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 16px;
  font-weight: 600;
  color: #1e90ff;
  cursor: pointer;
`;
