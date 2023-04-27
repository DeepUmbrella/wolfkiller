export * from "./home";

export enum API_REQUEST {
  LOGIN = "/api/account/login",
  PROFILE = "/api/account/profile",
  MANAGE_USER = "/api/management",
  REGISTER = "/api/account/register",
}

export const ACCESS_TOKEN = "access_token";
