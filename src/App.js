import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.style";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import * as React from "react";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
