export class AuthToken {
  static token = '';
  static authToken = '';
  static getToken = () => {
    return this.token;
  };

  static setToken = (token: string) => {
    this.token = token;
  };
  static getAuthToken = () => {
    return this.authToken;
  };

  static setAuthToken = (token: string) => {
    this.authToken = token;
  };
}
