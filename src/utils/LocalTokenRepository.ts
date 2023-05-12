export class LocalTokenRepository {
  TOKEN_KEY = "ACCESS_TOKEN";

  save(token: string) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  get() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  delete() {
    localStorage.removeItem(this.TOKEN_KEY);
  }
}
