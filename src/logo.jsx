import { Box, Center, Flex, Img } from "@chakra-ui/react";
import myLogo from "./assets/MyProfile.svg";
import "./App.css";
import { useState } from "react";

function Logo() {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };
  return (
    <Box height={"800px"}>
      <Flex
        height={"800px"}
        position={"relative"}
        bottom={"12px"}
        right={"12px"}
      >
        <Img
          //   className="logo"
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
          style={{
            filter: `drop-shadow(0 0 ${hover ? 3 : 0}em #646cffaa)`,
            transform: `scale(${hover ? 3 : 1})`,
            transition: `transform 0.3s ease-out`,
          }}
          w={"200px"}
          src={myLogo}
          alt="My Logo"
        />
      </Flex>
    </Box>
  );
}

export default Logo;
