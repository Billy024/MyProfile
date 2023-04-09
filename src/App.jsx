import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import TopNavigation from "./topNavigation";
import Logo from "./logo";

function App() {
  return (
    <ChakraProvider>
      <TopNavigation />
    </ChakraProvider>

    // <div className="App">
    //   <img src={myLogo} class="logo" alt="My Logo" />
    // </div>
  );
}

export default App;
