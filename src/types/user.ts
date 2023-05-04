export type UserInfo = {
  user_name: string;
  accountId?: string;
  level?: number;
  avatar_url: string;
};

export interface BaseResponse {
  message: string;
  error_code: number;
}
export interface ProfileResponse extends BaseResponse {
  user_info: UserInfo | undefined;
}

export interface LoginForm extends LoginRequest {}
export interface LoginRequest {
  user_name: string;
  password: string;
  remember: boolean;
  agree_us: boolean;
  safety_verify_code: string;
}

export interface LoginResponse extends ProfileResponse {}

export interface RegisterForm extends RegisterRequest {}
export interface RegisterRequest {
  email: string;
  password: string;
  secend_password: string;
  nick_name: string;
  prefix: string;
  phone_number: string;
  agree_us: boolean;
  safety_verify_code: string;
}
export interface RegisterResponse {
  data: any;
}
