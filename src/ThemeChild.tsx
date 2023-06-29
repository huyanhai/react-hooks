import { Box, Text, useColorMode, useColorModeValue, chakra } from "@chakra-ui/react";

const ThemeChild = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const backGround = useColorModeValue("gray.100", "yellow.100");
  return (
    <Box
      w={100}
      color="red.400"
      backdropBlur={1}
      bg={backGround}
      onClick={() => {
        toggleColorMode();
      }}
    >
      {colorMode}
      <Text fontSize={20}>123</Text>
      <Box color="error">error</Box>
      <chakra.a>chakra</chakra.a>
    </Box>
  );
};

export default ThemeChild;
