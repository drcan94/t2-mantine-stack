import type { AppStore } from "./hooks";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { uiSlice } from "./modules/ui/uiSlice";
const rootReducer = combineReducers({
  [uiSlice.name]: uiSlice.reducer,
});

export const makeStore = () => {
  const isServer = typeof window === "undefined";
  if (isServer) {
    return configureStore({
      reducer: rootReducer,
      devTools: true,
    });
  } else {
    // we need it only on client side
    const persistConfig = {
      key: "nextjs",
      whitelist: ["ui"], // make sure it does not clash with server keys
      storage,
    };
    const persistedReducer = persistReducer(persistConfig, rootReducer);
    const store = configureStore({
      reducer: persistedReducer,
      devTools: process.env.NODE_ENV !== "production",
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [
              REHYDRATE,
              FLUSH,
              PAUSE,
              PERSIST,
              PURGE,
              REGISTER,
            ],
          },
        }),
    });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    store.__persistor = persistStore(store); // Nasty hack
    return store;
  }
};

export const wrapper = createWrapper<AppStore>(makeStore);
