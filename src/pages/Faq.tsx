import { Flex } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
// import Divider from "../components/Divider";
// import Footer from "../components/Footer";
// import Header from "../components/Header";
// import Messages from "../components/Message";
// import axios, { AxiosHeaders } from "axios";
// import ChatBubble from "../components/common/ChatBubble";
import { Spin } from "antd";
import "./Faq.css";
import CommonHeader from "../components/CommonHeader";
import CommonFooter from "../components/CommonFooter";
import FaqBox from "../FaqBox";

const Faq = () => {
  const [messages, setMessages] = useState<any>([
    // { from: "bot", text: "Hello, I am the Customer Onboarding and Car Diagnosis bot for Car Advising company. How may I assist you today?" },
    // { from: "me", text: "Hi" },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [pageLoad, setPageLoad] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const api = axios.create({
  //     baseURL: process.env.REACT_APP_API_URL,
  // });

  useEffect(() => {
    // (async () => {
    //   setPageLoad(true);
    //   const url = "http://localhost:5000/chat";
    //   const response = await axios.get(url);
    //   if (response.data != 400) {
    //     setMessages((old: any) => [
    //       ...old,
    //       { from: "bot", text: response.data },
    //     ]);
    //   }
    //   setPageLoad(false);
    // })();
  }, []);

  const handleSendMessage = async () => {
    setIsLoading(true);
    if (!inputMessage.trim().length) {
      return;
    }
    const data = inputMessage.toString();

    setMessages((old: any) => [...old, { from: "me", text: data }]);
    setInputMessage("");

    const url = "http://localhost:5000/chat";
    // const response = await axios.post(url, { prompt: `${data}` });

    //console.log("response at end user", response);
    setIsLoading(false);
    // let responseData = response.data?.length ? response.data.toString() : null;

    // if (!responseData) {
    //   return null;
    // } else {
    //   setTimeout(() => {
    //     setMessages((old) => [...old, { from: "bot", text: responseData }]);
    //   }, 1000);
    // }
    // return response;
    // return "ok"
  };

  return (
    <>
      <CommonHeader />

      <Spin spinning={pageLoad} size="default">
        <div
          className="appBg"
          style={{
            width: window.innerWidth,
            // paddingLeft: 0.05 * window.innerWidth,
            backgroundColor: "#3E8EDE",
          }}
        >
          <Flex
            width={0.85 * window.innerWidth}
            justify="center"
            align="center"
            className="chatBox"
            flexDirection="column"
            style={{
              backgroundColor: "#F0F0F0",
              // paddingLeft: 0.05 * window.innerWidth,
              // paddingRight: 0.05 * window.innerWidth,
            }}
          >
            <Flex flexDirection="column">
              <FaqBox setIsLoading={setPageLoad} />
              {/* <Header />
            <Divider />
            <Messages messages={messages} isLoading={isLoading} />
            <ChatBubble isLoading={isLoading} />
            <Divider />
            <Footer
              inputMessage={inputMessage}
              setInputMessage={setInputMessage}
              handleSendMessage={handleSendMessage}
            /> */}
            </Flex>
          </Flex>
        </div>
      </Spin>
      {/* <CommonFooter /> */}
    </>
  );
};

export default Faq;
