import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";

import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
} from "../constants/userConstants";
// import { store } from '../store';

export const login =
  (email: string, password: string) => async (dispatch: Dispatch) => {
    // export const login = (email: string, password: string) => async (dispatch: Dispatch, getState: typeof store.getState) => {
    try {
      dispatch({
        type: USER_LOGIN_REQUEST,
      });

      // const {userLogin: {userInfo}} = getState()
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/user/login/",
        {
          username: email,
          password: password,
        },
        config
      );

      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      });

      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error: any) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };
