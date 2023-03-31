import React, { type CSSProperties } from "react";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import type { MantineTheme, CSSObject } from "@mantine/core";
import { useHotkeys } from "@mantine/hooks";
import { useUIContext } from "../../providers/UIContextProvider";
import { rtlCache } from "./rtl-cache";
import App from "./App";
import type { NextPage } from "next";


type LayoutProps = {
  children: React.ReactNode;
};

const LayoutProvider: NextPage<LayoutProps> = ({
  children,
}) => {
  const { rtl, setRtl, colorScheme, toggleColorScheme } = useUIContext();

  useHotkeys([["mod+J", () => toggleColorScheme()]]);
  useHotkeys([["mod+shift+L", () => setRtl((c) => !c)]]);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        emotionCache={rtl ? rtlCache : undefined}
        theme={{
          globalStyles: (theme: MantineTheme) =>
            ({
              "*, *::before, *::after": {
                boxSizing: "border-box",
                margin: 0,
                padding: 0,
                outline: 0,
                textDecoration: "none",
                listStyle: "none",
                scrollPaddingTop: 100,
              },
              body: {
                ...(theme.fn.fontStyles() as CSSProperties),
                color:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[0]
                    : theme.black,
                lineHeight: theme.lineHeight,
                minHeight: "100vh",
                position: "relative",
              },
            } as CSSObject),
          dir: rtl ? "rtl" : "ltr",
          fontFamily: "Verdana, sans-serif",
          fontFamilyMonospace: "Monaco, Courier, monospace",
          headings: {
            fontFamily: "Roboto, sans-serif",
            sizes: {
              h1: { fontSize: "2rem" },
            },
          },
          fontSizes: {
            xs: ".7rem",
            sm: ".85rem",
            md: ".96rem",
            lg: "1.2rem",
            xl: "1.4rem",
          },
          breakpoints: {
            xs: "30em",
            sm: "48em",
            md: "64em",
            lg: "74em",
            xl: "90em",
          },
          spacing: {
            xs: "0.8rem",
            sm: "1.3rem",
            md: "1.7rem",
            lg: "2rem",
            xl: "3rem",
          },
          radius: {
            xs: "0.1rem",
            sm: "0.3rem",
            md: "0.5rem",
            lg: "0.7rem",
            xl: "1rem",
          },
          colorScheme,
          colors: {
            // override dark colors to change them for all components
            dark: [
              "#d5d7e0",
              "#acaebf",
              "#8c8fa3",
              "#666980",
              "#4d4f66",
              "#34354a",
              "#2b2c3d",
              "#1d1e30",
              "#0c0d21",
              "#01010a",
            ],
          },

          activeStyles: { transform: "scale(0.95)" },
          components: {
            Button: {
              defaultProps: (theme) => ({
                color: theme.colorScheme === "light" ? "orange" : "blue",
              }),
            },
          },
        }}
      >
        <App>{children}</App>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};



export default LayoutProvider;
