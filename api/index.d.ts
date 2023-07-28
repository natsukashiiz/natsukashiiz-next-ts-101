type ServerResponse<T> = Promise<AxiosResponse<ApiResponse<T>>>;

interface ApiResponse {
  code: number;
  text: string;
  result: any;
  records: number;
}

interface TokenResponse {
  access: string;
  refresh: string;
  accessExpired: number;
  refreshExpired: number;
}

interface TokenPayload {
  iss: string;
  jti: string;
  uid: number;
  name: string;
  email: string;
  exp: number;
  iat: number;
}

interface SignInBody {
  username: string;
  password: string;
}

interface User {
  id: number;
  username: string;
  email: string;
}
