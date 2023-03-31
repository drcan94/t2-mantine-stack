import React, { createContext, useContext, useEffect, useState } from "react";
import { type ColorScheme } from "@mantine/core";
import Cookies from "universal-cookie";
import { type NextPage } from "next";
import { useLocalStorage } from "@mantine/hooks";
export type UIContextType = {
  rtl: boolean;
  setRtl: React.Dispatch<React.SetStateAction<boolean>>;
  colorScheme: ColorScheme;
  toggleColorScheme: (value?: ColorScheme) => void;
};

const cookies = new Cookies();
const UIContext = createContext<UIContextType | undefined>(undefined);

interface ProviderProps {
  children: React.ReactNode;
  initialRtl: boolean;
  initialColorScheme: ColorScheme;
}

const UIContextProvider: NextPage<ProviderProps> = ({
  children,
  initialRtl,
  initialColorScheme,
}) => {
  const [rtl, setRtl] = useLocalStorage<boolean>({
    key: "currentRtl",
    defaultValue: initialRtl,
  });

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "color-scheme",
    defaultValue: initialColorScheme,
  });

  const toggleColorScheme = (value?: ColorScheme): void => {
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    cookies.set("currentRtl", rtl.toString());
  }, [rtl]);

  useEffect(() => {
    cookies.set("color-scheme", colorScheme);
  }, [colorScheme]);

  return (
    <UIContext.Provider value={{ rtl, setRtl, colorScheme, toggleColorScheme }}>
      {children}
    </UIContext.Provider>
  );
};

export const useUIContext = () => {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error("useUIContext must be used within a UIContextProvider");
  }
  return context;
};

export default UIContextProvider;

// import React, { createContext, useContext } from "react";
// import { useLocalStorage } from "@mantine/hooks";
// import { type ColorScheme } from "@mantine/core";

// export type UIContextType = {
//   rtl: boolean;
//   setRtl: (val: boolean | ((prevState: boolean) => boolean)) => void;
//   colorScheme: ColorScheme;
//   toggleColorScheme: (value?: ColorScheme) => void;
// };

// const UIContext = createContext<UIContextType | undefined>(undefined);

// interface ProviderProps {
//   children: React.ReactNode;
// }

// const UIContextProvider: React.FC<ProviderProps> = ({ children }) => {
//   const [rtl, setRtl] = useLocalStorage<boolean>({
//     key: "currentRtl",
//     defaultValue: false,
//     getInitialValueInEffect: false,
//   });

//   const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
//     key: "color-scheme",
//     defaultValue: "light",
//     getInitialValueInEffect: false,
//   });

//   const toggleColorScheme = (value?: ColorScheme): void => {
//     setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
//   };

//   console.log("colorScheme", colorScheme);

//   console.log("rtl", rtl);

//   return (
//     <UIContext.Provider value={{ rtl, setRtl, colorScheme, toggleColorScheme }}>
//       {children}
//     </UIContext.Provider>
//   );
// };

// export const useUIContext = () => {
//   const context = useContext(UIContext);
//   if (context === undefined) {
//     throw new Error("useRtlContext must be used within a UIContextProvider");
//   }
//   return context;
// };

// export default UIContextProvider;
