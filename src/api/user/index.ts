import { AxiosResponse } from "axios";
import { API_REQUEST } from "@constant";
import {
  LoginRequest,
  LoginResponse,
  CheckResponse,
  ManageResponse,
} from "@vtypes/user";
import { request } from "../config";

export const login = (
  req: LoginRequest
): Promise<AxiosResponse<LoginResponse>> => {
  return request.post(API_REQUEST.LOGIN, req, {});
};

export const checkLogin = (
  userToken = ""
): Promise<AxiosResponse<CheckResponse>> => {
  if (typeof userToken !== "string") {
    userToken = new String(userToken).toString();
  }
  return request.get(API_REQUEST.CHECK_USER, {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
};

export const mangementUserList = (
  userToken: string
): Promise<AxiosResponse<ManageResponse>> => {
  return request.post(API_REQUEST.MANAGE_USER, { userToken });
};
