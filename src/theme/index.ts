import { extendTheme, ThemeConfig } from "@chakra-ui/react";

import customSet from "./customSet";

import semanticTokens from "./semanticTokens";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  ...customSet,
  semanticTokens,
});

export default theme;
