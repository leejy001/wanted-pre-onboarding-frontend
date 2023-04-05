const LOCALSTORAGE_TOKEN_KEY = "accesstoken";

export const saveAccessTokenToSessionStorage = (accessToken: string) => {
  sessionStorage.setItem(LOCALSTORAGE_TOKEN_KEY, accessToken);
};

export const getAccessTokenFromSessionStorage = (): string | null => {
  return sessionStorage.getItem(LOCALSTORAGE_TOKEN_KEY) || null;
};

export const removeAccessTokenFromSessionStorage = () => {
  sessionStorage.removeItem(LOCALSTORAGE_TOKEN_KEY);
};
