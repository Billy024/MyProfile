import { Flex, Text } from "@chakra-ui/react";
import "./App.css";
import Logo from "./logo";

function TopNavigation() {
  return (
    <Flex
      display={"flex"}
      position={"relative"}
      bottom={"12px"}
      right={"12px"}
      alignItems={"center"}
    >
      <Logo />
      {/* <Text textColor={"black"} fontWeight={"bold"}>
        hi
      </Text> */}
    </Flex>
  );
}

export default TopNavigation;
