import type { ColorScheme } from "@mantine/core";
import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import Cookies from "universal-cookie";
import type { AppState } from "~/redux/hooks";

const cookies = new Cookies();
// Type for our state
export interface UIState {
  rtl: boolean;
  colorScheme: ColorScheme;
}

// Initial state
const initialState: UIState = {
  rtl: cookies.get("currentRtl") === "true",
  colorScheme: (cookies.get("color-scheme") as ColorScheme) || "light",
};

// Actual Slice
export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleRtl(state) {
      state.rtl = !state.rtl;
      cookies.set("currentRtl", state.rtl?.toString());
    },
    setRtl(state, action: { payload: boolean }) {
      state.rtl = action.payload;
      cookies.set("currentRtl", state.rtl?.toString());
    },
    toggleColorScheme(state) {
      state.colorScheme = state.colorScheme === "light" ? "dark" : "light";
      cookies.set("color-scheme", state.colorScheme);
    },
    setColorScheme(state, action: { payload: ColorScheme }) {
      state.colorScheme = action.payload;
      cookies.set("color-scheme", state.colorScheme);
    },
  },
  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return {
        ...state,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line
        ...action.payload.ui,
      };
    });
  },
});

export const { toggleRtl, toggleColorScheme, setRtl, setColorScheme } =
  uiSlice.actions;

export const selectColorScheme = (state: AppState) => state.ui.colorScheme;
export const selectRtl = (state: AppState) => state.ui.rtl;

export default uiSlice.reducer;
