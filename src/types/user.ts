export type UserInfo = {
  user_name: string;
  accountId?: string;
  level?: number;
  avatar_url: string;
};

export interface ProfileResponse {
  user_info: UserInfo | undefined;
  error_message: string;
}

export interface LoginRequest {
  user_name: string;
  password: string;
  remember: boolean;
  agreeUs: boolean;
  safety_verify_code?: string;
}

export interface LoginResponse extends ProfileResponse {}

export interface RegisterForm extends RegisterRequest {}
export interface RegisterRequest {
  email: string;
  password: string;
  nick_name: string;
  phone_number: string;
  agreeUs: boolean;
  safety_verify_code: string;
}
export interface RegisterResponse {
  data: any;
}
