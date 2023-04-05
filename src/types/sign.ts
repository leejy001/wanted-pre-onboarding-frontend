export interface SignInRequest {
  email: string;
  password: string;
}

export interface SignInResult {
  status: string;
  body: {
    access_token: string;
  };
}

export interface SignInError {
  status: string;
}

export interface SignUpRequest {
  email: string;
  password: string;
}

export interface SignUpResult {
  status: string;
}

export interface SignUpError {
  status: string;
}
