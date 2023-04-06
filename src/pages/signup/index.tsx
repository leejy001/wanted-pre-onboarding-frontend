import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import { signupApi } from "../../api/sign";
import Input from "../../components/Input";
import styled from "styled-components";
import DefaultButton from "../../components/DefaultButton";
import { isEmailValidate, isPasswordValidate } from "../../utils/validate";
import { useNavigate } from "react-router-dom";
import { getAccessTokenFromSessionStorage } from "../../utils/accessTokenHandler";

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = (email: string, password: string) => {
    setIsFormValid(isEmailValidate(email) && isPasswordValidate(password));
  };

  const signUpSubmitHandler = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const result = await signupApi(formData);
    if (result === "success") navigate("/auth/signin");
    else if (result === "fail") setError(true);
  };

  useEffect(() => {
    if (getAccessTokenFromSessionStorage()) {
      navigate("/todo", { replace: true });
    }
  }, [navigate]);

  useEffect(() => {
    validateForm(formData.email, formData.password);
  }, [formData]);

  return (
    <Container title={"회원가입"}>
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
          disabled={!isFormValid}
        />
        {error && (
          <SignUpError>
            회원가입이 처리되지 않았습니다. <br />
            이메일을 다시 확인해주세요.
          </SignUpError>
        )}
      </SignUpForm>
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

const SignUpError = styled.p`
  color: red;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
`;
