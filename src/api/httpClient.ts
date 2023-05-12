import { URL } from "../constants";
import { LocalTokenRepository } from "../utils/LocalTokenRepository";

export class HttpClient {
  private baseURL: string;
  private tokenRepository: LocalTokenRepository;
  constructor(tokenRepository: LocalTokenRepository) {
    this.baseURL = URL.BASE_URL;
    this.tokenRepository = tokenRepository;
  }

  fetch(url: string, options = {}) {
    return window.fetch(`${this.baseURL}${url}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.tokenRepository.get()
      }
    });
  }
}
