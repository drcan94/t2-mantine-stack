import type { store } from "..";
import type { ReactNode } from "react";

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AsyncAction = (dispatch: AppDispatch) => Promise<void>;

export type AppProviderProps = {
  children: ReactNode;
};
