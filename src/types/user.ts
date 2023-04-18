export type UserInfo = {
  user_name: string;
  account: string;
  level: number;
};

export interface ProfileResponse {
  user_info: UserInfo | undefined;
  error_message: string;
}

export interface LoginRequest {
  email: string;
  password: string;
  safety_verify_code: string;
}

export interface LoginResponse extends ProfileResponse {
  access_token: string;
}

export interface RegisterRequest {
  user_name: string;
  email: string;
  phone_number: string;
  password: string;
  safety_verify_code: string;
}
export interface RegisterResponse {
  data: any;
}
