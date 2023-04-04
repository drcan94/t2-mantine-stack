/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { wrapper } from "../redux/store";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { api } from "~/utils/api";
import { PersistGate } from "redux-persist/integration/react";
import LayoutProvider from "../providers/LayoutProvider/index";
import type { AppStore } from "~/redux/hooks";
import type { ColorScheme } from "@mantine/core";
import type { GetServerSideProps, GetServerSidePropsContext } from "next";
import Cookies from "universal-cookie";

type WrappedStore = {
  store: AppStore;
  props: {
    pageProps: {
      session: Session | null;
      initialColorScheme: ColorScheme;
      initialRtl: boolean;
      [key: string]: unknown;
    };
    [key: string]: unknown;
  };
};

const MyApp: AppType<{
  session: Session | null;
  initialColorScheme: ColorScheme;
  initialRtl: boolean;
}> = ({ Component, ...rest }) => {
  const wrStore: WrappedStore = wrapper.useWrappedStore(rest);
  const store = wrStore.store;
  const props = wrStore.props;
  const pageProps = props.pageProps;
  const { session, initialColorScheme, initialRtl, ...restPageProps } =
    pageProps;

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <PersistGate persistor={store.__persistor} loading={null}>
          <LayoutProvider>
            <Component {...restPageProps} />
          </LayoutProvider>
        </PersistGate>
      </Provider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
