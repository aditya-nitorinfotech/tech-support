// import './App.css';
import { ChakraProvider } from "@chakra-ui/react";
import Faq from "./pages/Faq";
import CommonHeader from "./components/CommonHeader";
import CommonFooter from "./components/CommonFooter";
import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.onload = function () {
      window.scrollTo(0, 0);
    };
  }, []);
  return (
    <BrowserRouter>
      <ChakraProvider>
        {/* <CommonHeader /> */}
        <Faq />
        {/* <CommonFooter /> */}
      </ChakraProvider>
    </BrowserRouter>
    // </div>
  );
}

export default App;
