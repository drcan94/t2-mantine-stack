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

type WrappedStore = {
  store: AppStore;
  props: {
    pageProps: {
      session: Session | null;
      [key: string]: unknown;
    };
    [key: string]: unknown;
  };
};

const MyApp: AppType<{
  session: Session | null;
}> = ({ Component, ...rest }) => {
  const wrStore: WrappedStore = wrapper.useWrappedStore(rest);
  const store = wrStore.store;
  const props = wrStore.props;
  const pageProps = props.pageProps;
  const { session, ...restPageProps } = pageProps;

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
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
