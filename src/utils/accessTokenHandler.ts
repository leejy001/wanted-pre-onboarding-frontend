const LOCALSTORAGE_TOKEN_KEY = "accesstoken";

export const saveAccessTokenToLocalStorage = (accessToken: string) => {
  localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, accessToken);
};

export const getAccessTokenFromLocalStorage = (): string | null => {
  return localStorage.getItem(LOCALSTORAGE_TOKEN_KEY) || null;
};

export const removeAccessTokenFromLocalStorage = () => {
  localStorage.removeItem(LOCALSTORAGE_TOKEN_KEY);
};
