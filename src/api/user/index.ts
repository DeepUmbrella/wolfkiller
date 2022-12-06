import { AxiosResponse } from "axios";
import { API_REQUEST } from "@constant";
import { LoginRequest, LoginResponse } from "@vtypes/user";
import { request } from "../config";

export const login = async (
  req: LoginRequest
): Promise<AxiosResponse<LoginResponse>> => {
  return await request.post(API_REQUEST.LOGIN, req, {});
};
