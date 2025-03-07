"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const muiTheme = createTheme({
  palette: {
    claro: {
      main: "#1976d2",
    },
    escuro: {
      main: "#dc004e",
    },
  },
});

export function Providers({ children }) {
  <ChakraProvider>
    <ThemeProvider theme={muiTheme}>
      <CssBaseline /> {/* Normaliza os estilos no MUI */}
      {children}
    </ThemeProvider>
  </ChakraProvider> 
}