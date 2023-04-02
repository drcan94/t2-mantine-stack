import App from "next/app";
import Cookies from "universal-cookie"; // for parsing and serializing cookies
import { api } from "~/utils/api";
import type { Session } from "next-auth";
import type { ColorScheme } from "@mantine/core";
import LayoutProvider from "~/providers/LayoutProvider";
import { SessionProvider, getSession } from "next-auth/react";
import type { AppContext, AppType } from "next/app";
import UIContextProvider from "../providers/UIContextProvider/index";
import { Provider } from "react-redux";
import { store } from "../redux/store";

type MainAppProps = {
  session: Session | null;
  initialRtl: boolean;
  initialColorScheme: ColorScheme;
};

const MainApp: AppType<MainAppProps> = ({
  Component,
  pageProps: { session, initialRtl, initialColorScheme, ...pageProps },
}) => {
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <UIContextProvider
          initialRtl={initialRtl}
          initialColorScheme={initialColorScheme}
        >
          <LayoutProvider>
            <Component {...pageProps} />
          </LayoutProvider>
        </UIContextProvider>
      </SessionProvider>
    </Provider>
  );
};

App.getInitialProps = async ({ ctx, ...props }: AppContext) => {
  const req = ctx.req;
  const cookies = new Cookies(req?.headers.cookie);

  const initialRtl = cookies.get("currentRtl") === "true";
  const initialColorScheme =
    (cookies.get("color-scheme") as ColorScheme) || "light";

  const appContext = await App.getInitialProps({ ctx, ...props });
  const session = await getSession(ctx);

  return {
    ...appContext,
    session,
    initialColorScheme,
    initialRtl,
    pageProps: {
      session,
      initialColorScheme,
      initialRtl,
    },
  };
};

export default api.withTRPC(MainApp);

// cookie package usage
// const cookieStr: string = (ctx.req?.headers.cookie as string) || "";
// const cookies = cookie.parse(cookieStr) as Record<string, string>;
// const initialRtl = cookies["currentRtl"] === "true";
// const initialColorScheme =
//   (cookies["color-scheme"] as ColorScheme) || "light";

// const appContext = await App.getInitialProps({ ctx, ...props });
// const session = await getSession(ctx);
