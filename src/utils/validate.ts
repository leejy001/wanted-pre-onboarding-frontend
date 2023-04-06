export const isEmailValidate = (email: string) => {
  const regEmail = /^[^@]*@[^@]*$/;
  return regEmail.test(email);
};

export const isPasswordValidate = (password: string) => {
  const regPassword = /^.{8,}$/;
  return regPassword.test(password);
};
