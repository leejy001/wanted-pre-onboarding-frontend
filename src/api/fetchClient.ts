import { URL } from "../constants";
import { LocalTokenRepository } from "../utils/LocalTokenRepository";

const localTokenRepository = new LocalTokenRepository();

export const fetchClient = async (
  url: string,
  options: RequestInit
): Promise<Response> => {
  const accessToken = localTokenRepository.get();
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
