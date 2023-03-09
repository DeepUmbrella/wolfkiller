import { type } from "os";

export type UserInfo = {
  user_name: string;
  account: string;
  level: number;
};

export type LoginRequest = {
  email: string;
  password: string;
  safety_verify_code: string;
};

export type LoginResponse =
  | {
      user_info: UserInfo;
      successful: boolean;
      is_login: boolean;
    }
  | {
      successful: boolean;
      error: {
        error_code: number;
        error_message: string;
      };
    };

export type RegisterRequest = {
  user_name: string;
  email: string;
  phone_number: string;
  password: string;
  safety_verify_code: string;
};

export type RegisterResponse = LoginResponse;

export type GetUserResponse = LoginResponse;

export type CheckResponse = {
  state: boolean;
  error_message: string;
};
export type ManagementUser = {
  manager: boolean;
  info: {
    level: number;
    list: any[];
  } | null;
};
export type ManageResponse = ManagementUser;
