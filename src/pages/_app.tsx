import App from "next/app";
import Cookies from "universal-cookie"; // for parsing and serializing cookies
import { api } from "~/utils/api";
import type { Session } from "next-auth";
import type { ColorScheme } from "@mantine/core";
import LayoutProvider from "~/components/Layout";
import { SessionProvider, getSession } from "next-auth/react";
import type { AppProps, AppContext, AppType } from "next/app";
import UIContextProvider from "../providers/UIContextProvider/index";

type MyAppProps = AppProps & {
  session: Session | null;
  initialRtl: boolean;
  initialColorScheme: ColorScheme;
};

const MyApp: AppType<MyAppProps> = ({
  Component,
  pageProps: { session, initialRtl, initialColorScheme, ...pageProps },
}) => {
  return (
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
  );
};

MyApp.getInitialProps = async ({
  ctx,
  ...props
}: AppContext): Promise<MyAppProps> => {
  const req = ctx.req;
  const cookies = new Cookies(req?.headers.cookie);

  const initialRtl = cookies.get("currentRtl") === "true";
  const initialColorScheme =
    (cookies.get("color-scheme") as ColorScheme) || "light";

  const appContext = await App.getInitialProps({ ctx, ...props });
  const session = await getSession(ctx);

  return {
    ...appContext,
    pageProps: {
      session,
      initialColorScheme,
      initialRtl,
    },
  };
};

export default api.withTRPC(MyApp);

// cookie package usage
// const cookieStr: string = (ctx.req?.headers.cookie as string) || "";
// const cookies = cookie.parse(cookieStr) as Record<string, string>;
// const initialRtl = cookies["currentRtl"] === "true";
// const initialColorScheme =
//   (cookies["color-scheme"] as ColorScheme) || "light";

// const appContext = await App.getInitialProps({ ctx, ...props });
// const session = await getSession(ctx);
