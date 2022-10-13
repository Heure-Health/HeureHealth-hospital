import React from "react";
import { Box } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";

const Home = () => {
  const theme = useTheme();
  return (
    <>
      <h2>Home</h2>
      <Box>This is a box</Box>
    </>
  );
};

export default Home;
