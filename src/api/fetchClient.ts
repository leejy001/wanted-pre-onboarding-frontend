import { URL } from "../constants";
import { getAccessTokenFromLocalStorage } from "../utils/accessTokenHandler";

export const fetchClient = async (
  url: string,
  options: RequestInit
): Promise<Response> => {
  const accessToken = getAccessTokenFromLocalStorage();
  if (accessToken) {
    const newOptions = {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      }
    };
    return fetch(`${URL.BASE_URL}${url}`, newOptions);
  } else {
    const newOptions = {
      ...options,
      headers: {
        "Content-Type": "application/json"
      }
    };
    return fetch(`${URL.BASE_URL}${url}`, newOptions);
  }
};
