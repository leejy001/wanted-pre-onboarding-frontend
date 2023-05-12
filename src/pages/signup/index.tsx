import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { isEmailValidate, isPasswordValidate } from "../../utils/validate";
import { useAuthState } from "../../context/AuthProvider";
import Container from "../../components/Container";
import Input from "../../components/Input";
import DefaultButton from "../../components/DefaultButton";

function SignUp() {
  const navigate = useNavigate();
  const { signup, isAuth } = useAuthState();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = (email: string, password: string) => {
    return isEmailValidate(email) && isPasswordValidate(password);
  };

  const isValid = validateForm(formData.email, formData.password);

  const signUpSubmitHandler = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const result = await signup(formData);
    return result === "success"
      ? navigate("/signin", { replace: true })
      : setError(true);
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/todo", { replace: true });
    }
  }, [isAuth, navigate]);

  return (
    <Container title={"회원가입"}>
      <SignInMove onClick={() => navigate("/signin", { replace: true })}>
        이미 회원가입 하셨나요?
      </SignInMove>
      <SignUpForm onSubmit={signUpSubmitHandler}>
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
          name="회원가입"
          className="primary"
          width={200}
          height={40}
          type="submit"
          data-testid="signup-button"
          disabled={!isValid}
        />
        {error && (
          <SignUpError>
            회원가입이 처리되지 않았습니다. <br />
            이메일을 다시 확인해주세요.
          </SignUpError>
        )}
      </SignUpForm>
      <MoveBackButton onClick={() => navigate(-1)}>뒤로</MoveBackButton>
    </Container>
  );
}

export default SignUp;

const SignUpForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`;

const SignInMove = styled.p`
  margin-bottom: 20px;
  font-size: 12px;
  font-weight: 600;
  color: #1e90ff;
  cursor: pointer;
`;

const SignUpError = styled.p`
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
