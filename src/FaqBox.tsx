import React, { useState } from "react";
import {
  Avatar,
  Flex,
  Text,
  Link,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import { Col, Input, Row, Select, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import "./FaqBox.css";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import SyncOutlinedIcon from "@mui/icons-material/SyncOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import Divider from "./Divider";
import { WindowOutlined } from "@mui/icons-material";
import axios, { AxiosHeaders } from "axios";
import AnswerBox from "./components/AnswerBox";

type answerDataType = {
  answerPage: string;
  answerSubpage: string;
  answerHeadline: string;
  answerContent: string;
  type: string;
};

type expectedResponse = {
  answer: string;
  similar_documents: string;
};

type FaqBoxProps = {
  setIsLoading: (value: boolean | ((prevVar: boolean) => boolean)) => void;
};

const FaqBox = ({ setIsLoading }: FaqBoxProps) => {
  const { Search } = Input;
  const [showAnswerSection, setShowAnswerAction] = useState<boolean>(false);
  const [selectedQ, setSelectedQ] = useState<string | null>(null);
  const axiosHeaders = {
    "Access-Control-Allow-Origin": "*",
  };
  const [answerData, setAnswerData] = useState<answerDataType>({
    answerHeadline: "Tech Support Issue?",
    answerContent: "",
    answerPage: "Tech Support",
    answerSubpage: "",
    type: "",
  });

  const handleSearch = async (index: any, text: any) => {
    setIsLoading(true);
    const question = "question";
    console.log("selected", index, "content", text.key);
    //setSelectedQ(text);

    const url = "http://127.0.0.1:5000/technical_solution";
    const response = await axios.post(
      url,
      { question: `${text.key}` },
      {
        headers: axiosHeaders,
      }
    );
    setAnswerData({
      ...answerData,
      answerContent: response.data.answer,
      answerSubpage: text.label,
      type: "1",
    });
    setTimeout(() => {}, 1000);
    setShowAnswerAction(true);
    if (response !== null) setIsLoading(false);
    console.log(response);
  };

  const questionMap = [
    {
      value: "1",
      label: "Steps to take for rectifying licensing issues with 77 machines?",
      key: "What steps can be taken to rectify the licensing issues with 77 machines?can you answer in points?can you answer in points?",
    },
    {
      value: "2",
      label:
        "Purpose of accessing the logs/database dump and the location it can be accessed from?",
      key: "What is the purpose of accessing the logs/database dump and what location can it be accessed from?",
    },
    {
      value: "3",
      label:
        "What measures can be taken to optimize disk performance based on backup analysis?",
      key: "What measures can be taken to optimize disk performance based on the conclusions of the backup analysis?",
    },
    // {
    //   value: "4",
    //   label:
    //     "What does the warning on the DDB health status suggest and how can it be resolved?",
    //   key: "What does the warning on the DDB health status suggest and how can it be resolved?",
    // },
  ];

  const handleClick = () => {
    setAnswerData({
      ...answerData,
      answerSubpage: "Issues",
      type: "2",
    });
    setShowAnswerAction(true);
  };

  return (
    <>
      {!showAnswerSection && (
        <Flex
          w="100%"
          height={0.1 * window.innerHeight}
          flexDirection="column"
          p="3"
        >
          <Flex w="100%" justify="center" align="center">
            <h1
              style={{
                textAlign: "center",
                fontSize: 38,
                fontWeight: "bolder",
                wordSpacing: "4%",
              }}
            >
              Hi! How can we help you today?{" "}
            </h1>
          </Flex>
        </Flex>
      )}

      <Space
        direction="vertical"
        style={{
          marginTop: !showAnswerSection ? "10%" : "1%",
          alignItems: "center",
        }}
      >
        {/* <Search
          placeholder="Ask a question..."
          onSearch={(text) => {
            //setShowAnswerAction(true);
            handleSearch(text);
          }}
          enterButton
          style={{
            width: "100%",
            borderRadius: 5,
          }}
          onChange={(text) => {
            //handleChange(text);
          }}
        /> */}
        <Select
          showSearch
          style={{
            width: 0.6 * window.innerWidth,
          }}
          placeholder="Ask a question..."
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input)
          }
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? "")
              .toLowerCase()
              .localeCompare((optionB?.label ?? "").toLowerCase())
          }
          //   value={selectedQ}
          onChange={(index, value) => {
            handleSearch(index, value);
          }}
          options={questionMap}
        />
      </Space>

      {!showAnswerSection ? (
        <Space
          direction="vertical"
          style={{
            marginTop: "18%",
            marginLeft: 0.01 * window.innerWidth,
          }}
        >
          <Row style={{ width: "100%", marginBottom: "10%" }}>
            <Flex
              width="17%"
              height={120}
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              style={{
                backgroundColor: "white",
                // backgroundColor: "#F0F0F0",
              }}
              className="optionsBox"
            >
              <Button>
                <ManageAccountsIcon
                  fontSize="large"
                  sx={{ color: "#3E8EDE" }}
                />
              </Button>

              <Text
                textAlign={"center"}
                fontSize={12}
                style={{
                  padding: "4%",
                  marginTop: "7%",
                }}
              >
                Manage Your Account
              </Text>
            </Flex>

            <Flex
              width="17%"
              marginLeft="3.5%"
              height={120}
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              style={{
                backgroundColor: "white",
                // backgroundColor: "#F0F0F0",
              }}
              className="optionsBox"
            >
              <Button
                onClick={() => {
                  handleClick();
                }}
              >
                <PaymentsOutlinedIcon
                  fontSize="large"
                  sx={{ color: "#3E8EDE" }}
                />
              </Button>
              <Text
                textAlign={"center"}
                fontSize={"sm"}
                style={{ padding: "1%", marginTop: "10%" }}
              >
                Tech Support
              </Text>
            </Flex>
            <Flex
              width="17%"
              marginLeft="3.5%"
              height={120}
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              style={{
                backgroundColor: "white",
                // backgroundColor: "#F0F0F0",
              }}
              className="optionsBox"
            >
              <Button>
                <LocalShippingOutlinedIcon
                  fontSize="large"
                  sx={{ color: "#3E8EDE" }}
                />
              </Button>
              <Text
                textAlign={"center"}
                fontSize={"sm"}
                style={{ padding: "1%", marginTop: "10%" }}
              >
                Hardware
              </Text>
            </Flex>
            <Flex
              width="17%"
              marginLeft="3.5%"
              height={120}
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              style={{
                backgroundColor: "white",
                // backgroundColor: "#F0F0F0",
              }}
              className="optionsBox"
            >
              <Button>
                <SyncOutlinedIcon fontSize="large" sx={{ color: "#3E8EDE" }} />
              </Button>
              <Text
                textAlign={"center"}
                fontSize={"sm"}
                style={{ padding: "1%", marginTop: "7%" }}
              >
                General
              </Text>
            </Flex>
            <Flex
              width="17%"
              marginLeft="3.5%"
              height={120}
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              style={{
                backgroundColor: "white",
                // backgroundColor: "#F0F0F0",
              }}
              className="optionsBox"
            >
              <Button>
                <AssignmentOutlinedIcon
                  fontSize="large"
                  sx={{ color: "#3E8EDE" }}
                />
              </Button>
              <Text
                textAlign={"center"}
                fontSize={"sm"}
                style={{ padding: "1%", marginTop: "10%" }}
              >
                System
              </Text>
            </Flex>
          </Row>
        </Space>
      ) : (
        <AnswerBox {...answerData} />
        // <div
        //   className="answerBg"
        //   style={{
        //     width: "100%"}}
        // >
      )}
    </>
  );
};

export default FaqBox;
