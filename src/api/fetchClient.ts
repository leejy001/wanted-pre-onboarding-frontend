import { getAccessTokenFromSessionStorage } from "../utils/accessTokenHandler";

const baseUrl = `${process.env.REACT_APP_BASE_URL}`;

export const fetchClient = async (
  url: string,
  options: RequestInit
): Promise<Response> => {
  const accessToken = getAccessTokenFromSessionStorage();
  if (accessToken) {
    const newOptions = {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      }
    };
    return fetch(`${baseUrl}${url}`, newOptions);
  } else {
    const newOptions = {
      ...options,
      headers: {
        "Content-Type": "application/json"
      }
    };
    return fetch(`${baseUrl}${url}`, newOptions);
  }
};
