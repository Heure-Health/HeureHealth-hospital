import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useTheme, useColorModeValue } from "@chakra-ui/react";
const Footer = () => {
  const theme = useTheme();
  const bg = useColorModeValue(theme.colors.gray[100], theme.colors.gray[800])
  const color = useColorModeValue("gray.800","gray.100")

  return (
    <div className="max-w-screen-2xl px-4 mx-auto flex flex-wrap items-center justify-center">
      <Flex minHeight={32} color={color} background={bg}></Flex>
      <Box textAlign="center" color={color} background={bg}>
        <Text>© Copyright 2023 Heure Health</Text>
      </Box>
    </div>
  );
};

export default Footer;
