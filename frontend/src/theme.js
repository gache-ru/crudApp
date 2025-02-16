import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light", // Default color mode
    useSystemColorMode: false, // Disable system color mode
  },
});

export default theme;