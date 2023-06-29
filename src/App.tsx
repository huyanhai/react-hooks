import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import StateTest from "./components/state/index.test";
import StoreTest from "./components/store/index.test";
import CallBackTest from "./components/callback/index.test";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import ThemeChild from "./ThemeChild";

import { useStore } from "./hooks/useStore";

import theme from "./theme";

function App() {
  const { count } = useStore();

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript />
      app count:{count}
      <br />
      <StoreTest />
      <StateTest />
      <CallBackTest />
      <ThemeChild />
    </ChakraProvider>
  );
}

export default App;
