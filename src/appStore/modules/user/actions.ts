import axios, { type AxiosError } from "axios";
import type React from "react";
import type { UserAction, UserInfo } from "./types";
import type { RootState } from "../../helpers/types";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from "./constants";

export const loginUser =
  (formData: FormData) =>
  async (dispatch: React.Dispatch<UserAction>, getState: () => RootState) => {
    try {
      dispatch({ type: USER_LOGIN_REQUEST });
      console.log(getState()); // returns the current state of the store
      const { data }: { data: UserInfo } = await axios.post(
        `http://127.0.0.1:8000/api/auth/login`,
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      });

      typeof window !== "undefined" &&
        localStorage.setItem("currentUser", JSON.stringify(data));
    } catch (unknownError: unknown) {
      const isAxiosError = (
        error: unknown
      ): error is AxiosError<{ detail: string }> =>
        (error as AxiosError).isAxiosError;

      const error = isAxiosError(unknownError)
        ? unknownError
        : { message: "An unknown error occurred" };

      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          isAxiosError(error) && error.response && error.response.data.detail
            ? { message: error.response.data.detail }
            : { message: error.message },
      });
    }
  };

export const logout = (dispatch: (action: UserAction) => void) => {
  dispatch({ type: USER_LOGOUT });
  typeof window !== "undefined" && localStorage.removeItem("currentUser");
};
