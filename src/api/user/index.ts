import { AxiosResponse } from "axios";
import { API_REQUEST } from "@constant";
import { LoginRequest, LoginResponse, ProfileResponse } from "@vtypes/user";
import { request } from "../config";

export const login = async (req: LoginRequest) =>
  await request.post(API_REQUEST.LOGIN, req, {});

export const profile = async () =>
  await request.get<ProfileResponse>(API_REQUEST.PROFILE);
