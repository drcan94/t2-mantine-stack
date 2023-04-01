import { type ActionWithPayload } from "~/appStore/helpers/combineReducers";
import type { UserConstants } from "./constants";

export type UserType = {
  _id: string | null;
  name: string | null;
  email: string | null;
  role: string | null;
  username: string | null;
};

export type UserInfo = {
  user: UserType;
  token: string;
};

export interface UserLoginType {
  userInfo: UserInfo;
  loading: boolean;
  error: string | null;
}

export type ErrorInfo = {
  message: string;
};

export type UserAction =
  | { type: UserConstants["USER_LOGIN_REQUEST"] }
  | (ActionWithPayload<{ user: UserType; token: string }> & {
      type: UserConstants["USER_LOGIN_SUCCESS"];
    })
  | (ActionWithPayload<{ message: string }> & {
      type: UserConstants["USER_LOGIN_FAIL"];
    })
  | { type: UserConstants["USER_LOGOUT"] };
