import { getAccessTokenFromLocalStorage } from "../utils/accessTokenHandler";

const baseUrl = "https://www.pre-onboarding-selection-task.shop/";

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
