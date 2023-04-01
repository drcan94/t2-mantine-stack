import React from "react";
import { AppDispatchContext, AppStateContext } from "./helpers/context";
import { store } from ".";
import type {
  AppDispatch,
  AppProviderProps,
  AsyncAction,
} from "./helpers/types";
import type { NextPage } from "next";

export const AppProvider: NextPage<AppProviderProps> = ({ children }) => {
  const state = store.getState();

  const dispatch = async (
    action: ReturnType<AppDispatch> | AsyncAction
  ): Promise<void> => {
    if (typeof action === "function") {
      await action(store.dispatch);
    } else {
      store.dispatch(action);
    }
    return Promise.resolve();
  };

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};
