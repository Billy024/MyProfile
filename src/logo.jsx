import { Box, Center, Flex, Img } from "@chakra-ui/react";
import profilePic from "./assets/ProfilePic.svg";
import LeftXSymbol from "./assets/LeftXSymbol.svg";
import RightXSymbol from "./assets/RightXSymbol.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { XSymbol } from "./svgHandler/XSymbolHandler.jsx";

const Logo = () => {
  const [hover, setHover] = useState(false);
  const [marginLeft, setMarginLeft] = useState(133);
  const [marginRight, setMarginRight] = useState(133);

  const handleHover = () => {
    setHover(true);
    setMarginLeft(400);
    setMarginRight(400);
  };

  const handleNoHover = () => {
    setHover(false);
    setMarginLeft(133);
    setMarginRight(133);
  };

  useEffect(() => {}, [hover]);
  return (
    <Box
      height={"100%"}
      width={"100%"}
      onMouseEnter={handleHover}
      onMouseLeave={handleNoHover}
    >
      <div>
        <Flex
          height={"910px"}
          position={"relative"}
          bottom={"100"}
          right={"12px"}
          align={"center"}
          alignItems={"center"}
          alignContent={"center"}
          alignSelf={"center"}
          justifyContent={"center"}
          justifyItems={"center"}
          justifySelf={"center"}
          onMouseEnter={handleHover}
          onMouseLeave={handleNoHover}
        >
          <XSymbol />

          {/* <Img
            // ml={`${marginLeft}px`}
            // alignSelf={"center"}
            // justifySelf={"center"}
            // alignContent={"center"}
            // alignItems={"center"}
            // justifyContent={"center"}
            // justifyItems={"center"}
            position={"fixed"}
            //   className="logo"
            // onMouseEnter={handleHover}
            // onMouseLeave={handleNoHover}
            style={{
              filter: `drop-shadow(0 0 ${hover ? 3 : 0}em #646cffaa)`,
              transform: `scale(${hover ? 3 : 1})`,
              // transition: "transform 0.1s",
              // `transform 0.3s ease-out`,
            }}
            w={"200px"}
            h={"200px"}
            src={XSymbol}
            alt="My Logo"
          /> */}
          {/* <Img
            mr={`${marginRight}px`}
            // alignSelf={"center"}
            // justifySelf={"center"}
            // alignContent={"center"}
            // alignItems={"center"}
            // justifyContent={"center"}
            // justifyItems={"center"}
            position={"fixed"}
            //   className="logo"
            // onMouseEnter={handleHover}
            // onMouseLeave={handleNoHover}
            style={{
              filter: `drop-shadow(0 0 ${hover ? 3 : 0}em #646cffaa)`,
              transform: `scale(${hover ? 3 : 1})`,
              // transition: "transform 0.1s",
              // `transform 0.3s ease-out`,
            }}
            w={"200px"}
            h={"200px"}
            src={LeftXSymbol}
            alt="My Logo"
          /> */}
        </Flex>
      </div>
    </Box>
  );
};

export default Logo;
