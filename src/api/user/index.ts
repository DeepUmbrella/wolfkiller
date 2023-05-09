import { API_REQUEST } from "@constant";
import {
  LoginRequest,
  LoginResponse,
  ProfileResponse,
  RegisterRequest,
  RegisterResponse,
  CaptchaResponse,
  CaptchaRequest,
} from "@vtypes";
import { request } from "../config";

export const login = async (req: LoginRequest) =>
  await request.post<LoginResponse>(API_REQUEST.LOGIN, req, {});

export const profile = async () =>
  await request.get<ProfileResponse>(API_REQUEST.PROFILE);

export const register = async (req: RegisterRequest) =>
  await request.post<RegisterResponse>(API_REQUEST.REGISTER, req, {});

export const captcha = async (req: CaptchaRequest) =>
  await request.post<CaptchaResponse>(API_REQUEST.CAPTCHA_EMAIL, req);
