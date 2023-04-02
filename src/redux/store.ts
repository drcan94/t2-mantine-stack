import {
  configureStore,
  type ThunkAction,
  type Action,
} from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { batchedSubscribe } from "redux-batched-subscribe";
import _ from "lodash";

const reducer = combineReducers({});

// let userInfoFromLs: string | null = null;
// if (typeof window !== "undefined") {
//   userInfoFromLs = localStorage.getItem("currentUser") as string;
//   if (!userInfoFromLs) {
//     localStorage.setItem("currentUser", JSON.stringify([]));
//   }
// }

const preloadedState = {
  // userLogin: {
  //   userInfo: userInfoFromLs,
  // },
};

const debounceNotify = _.debounce((notify: any) => notify());

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
  preloadedState,
  enhancers: [batchedSubscribe(debounceNotify)],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
