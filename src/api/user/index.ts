import { AxiosResponse } from "axios";
import { API_REQUEST } from "@constant";
import {
  LoginRequest,
  LoginResponse,
  CheckResponse,
  ManageResponse,
} from "@vtypes/user";
import { request } from "../config";

export const login = async (
  req: LoginRequest
): Promise<AxiosResponse<LoginResponse>> => {
  return await request.post(API_REQUEST.LOGIN, req, {});
};

export const checkLogin = async (
  userToken = ""
): Promise<AxiosResponse<CheckResponse>> => {
  if (typeof userToken !== "string") {
    userToken = new String(userToken).toString();
  }
  return await request.get(API_REQUEST.CHECK_USER, {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
};

export const mangementUserList = async (
  userToken: string
): Promise<AxiosResponse<ManageResponse>> => {
  return await request.post(API_REQUEST.MANAGE_USER, { userToken });
};
