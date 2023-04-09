import { Box, Circle, Flex, Text } from "@chakra-ui/react";
import "./App.css";
import Logo from "./logo";

function TopNavigation() {
  return (
    <Box
      position={"relative"}
      bottom={"12px"}
      right={"12px"}
      alignItems={"center"}
    >
      <Logo />
      <Text textColor={"black"} fontWeight={"bold"}>
        hi
      </Text>
    </Box>
  );
}

export default TopNavigation;
