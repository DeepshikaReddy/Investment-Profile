import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens export
export const token_mode = (mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
          100: "#e0e0e0",
          500: "#666666",
          700: "#3d3d3d"
        },
        primary: {
          100: "#d0d1d5",
          500: "#141b2d",
        },
        greenAccent: {
          500: "#4cceac",
        },
      }
    : {
        grey: {
          100: "#141414",
          500: "#666666",
          700: "#a3a3a3",
        },
        primary: {
          100: "#040509",
          500: "#141b2d",
        },
        greenAccent: {
          500: "#4cceac",
          50:"#fcfcfc"
        }
      }),
});

//Background theme settings
export const settings = (mode) => {
  //fetch the color based on mode.  
  const colors = token_mode(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.greenAccent[50], //light grey
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: "'Source Sans Pro', sans-serif",
        fontSize: 40,
      },
      h2: {
        fontFamily: "'Source Sans Pro', sans-serif",
        fontSize: 32,
      },
      h3: {
        fontFamily: "'Source Sans Pro', sans-serif",
        fontSize: 24,
      },
      h4: {
        fontFamily: "'Source Sans Pro', sans-serif",
        fontSize: 20,
      },
      h5: {
        fontFamily: "'Source Sans Pro', sans-serif",
        fontSize: 16,
      },
      h6: {
        fontFamily: "'Source Sans Pro', sans-serif",
        fontSize: 14,
      },
    },
  };
};

//createContext creates a componenet . reurns json.
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
   //set state of mode. 
  const [mode, setMode] = useState("dark");

  //mounted only once as dependencies are empty.
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  //cache the result for faster computation.
  //when mode changes then recompute the styleing properties.
  const theme = useMemo(() => createTheme(settings(mode)), [mode]);
  return [theme, colorMode];
};

