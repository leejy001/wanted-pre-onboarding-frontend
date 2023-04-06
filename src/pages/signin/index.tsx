import styled from "styled-components";
import { signinApi } from "../../api/sign";
import Container from "../../components/Container";
import { useEffect, useState } from "react";
import Input from "../../components/Input";
import { useNavigate } from "react-router-dom";
import DefaultButton from "../../components/DefaultButton";
import { isEmailValidate, isPasswordValidate } from "../../utils/validate";
import { getAccessTokenFromSessionStorage } from "../../utils/accessTokenHandler";

function SignIn() {
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

  const signInSubmitHandler = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const result = await signinApi(formData);
    if (result === "success") navigate("/todo");
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
    <Container title={"로그인"}>
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
          disabled={!isFormValid}
        />
        {error && (
          <SignInError>
            로그인 실패!!
            <br />
            이메일과 패스워드를 다시 확인해주세요.
          </SignInError>
        )}
      </SignInForm>
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

const SignInError = styled.p`
  color: red;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
`;