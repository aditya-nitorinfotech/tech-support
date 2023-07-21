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
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import Divider from "../Divider";
import { WindowOutlined } from "@mui/icons-material";
import "./Common.css";
import {
  MDBCollapse,
  MDBContainer,
  MDBListGroup,
  MDBListGroupItem,
  MDBTypography,
  MDBAccordion,
  MDBAccordionItem,
} from "mdb-react-ui-kit";
import Answers from "./Answers";

type answerDataProps = {
  answerHeadline: string;
  answerContent: string;
  answerPage: string;
  answerSubpage: string;
  type: string;
};

const AnswerBox = ({
  type,
  answerHeadline,
  answerContent,
  answerPage,
  answerSubpage,
}: answerDataProps) => {
  const [faqs, setFaqs] = useState([
    {
      question:
        "Steps to take for rectifying licensing issues with 77 machines?",
      answer:
        "The steps to rectify the licensing issues with 77 machines are as follows: 1. Check the license key and make sure it is valid and up-to-date. 2. Ensure that all 77 machines have the same version of CommVault software installed. 3. Make sure that all 77 machines are connected to the same CommServe server and have access to it. 4. Check if there is any firewall blocking communication between the client computers and CommServe server, if so, configure it properly for communication between them. 5. If possible, try reinstalling or upgrading the software on all 77 machines to ensure they are running on a compatible version of CommVault software with each other as well as with the CommServe server itself.",
      open: false,
    },
    {
      question:
        "Purpose of accessing the logs/database dump and the location it can be accessed from?",
      answer:
        "The purpose of accessing the logs/database dump is to analyze the requests being sent from Commvault to Azure, and to check how many backups are running at the same time. The logs/database dump can be accessed from the link provided in the context: https://drive.metallic.io/webconsole/gtl.do?gid=WdbqBNS",
      open: false,
    },
    {
      question:
        "What measures can be taken to optimize disk performance based on backup analysis?",
      answer:
        "One measure that can be taken to optimize disk performance based on the conclusions of the backup analysis is to adjust the number of readers used for each backup job. This will help reduce the amount of requests sent to Azure and prevent it from being overwhelmed. Additionally, enabling bPendingOnAllFailures on Access Nodes may also help improve performance by allowing failed jobs to be retried automatically.",
      open: false,
    },
  ]);

  const toggleFAQ = (index: number) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  //   const relatedFaq = faqs.filter((f) => {
  //     f.question != answerSubpage;
  //   });

  return (
    <>
      <Flex
        width={0.85 * window.innerWidth}
        className="answerBox"
        flexDirection="column"
        style={{
          backgroundColor: "white",
          marginTop: "2%",
          marginBottom: "-1%",
        }}
        justify="center"
        align="center"
      >
        <Row style={{ width: "100%" }}>
          <Text
            style={{
              fontSize: 12,
            }}
          >
            Nitor Infotech
          </Text>
          <Text
            style={{
              fontSize: 12,
              marginLeft: "1%",
            }}
            color="gray.400"
          >
            {">"}
          </Text>
          <Text
            style={{
              fontSize: 12,
              marginLeft: "1%",
            }}
          >
            {answerPage}
          </Text>
          <Text
            style={{
              fontSize: 12,
              marginLeft: "1%",
            }}
            color="gray.400"
          >
            {">"}
          </Text>
          <Text
            style={{
              fontSize: 12,
              marginLeft: "1%",
            }}
          >
            Issues
          </Text>
        </Row>

        {type == "1" ? (
          <Col
            span={24}
            style={{
              paddingLeft: "5%",
              paddingRight: "5%",
              //   paddingTop: "5%",
              //   paddingBottom: "2%",
            }}
          >
            <Divider />
            <Row>
              <h1
                style={{
                  textAlign: "center",
                  fontSize: 25,
                  fontWeight: "bold",
                  wordSpacing: "3%",
                }}
              >
                {/* Change my account password?{" "} */}
                {answerSubpage}
              </h1>
            </Row>
            <Row>
              <Text
                style={{
                  fontSize: 12,
                }}
                color="gray.400"
              >
                2 months ago{" "}
              </Text>
            </Row>
            <Row style={{ marginTop: "5%" }}>
              <div className="textWrapper">
                <Text
                  style={{
                    fontSize: 15,
                    textAlign: "justify",
                  }}
                >
                  {/* To create your own password click on this{" "} */}
                  {answerContent}
                  {/* <mark className="mark">
              <Link href="http://localhost:3000" isExternal>
                <a href="https://localhost:3000" role="button">
                link{" "}
              </Link>
            </mark> */}
                </Text>
              </div>
            </Row>
            {/* <Row style={{ marginTop: "1%" }}>
          <Text
            style={{
              fontSize: 15,
            }}
          >
            {answerContent.split(".")[1]}
          </Text>
        </Row> */}
            <Divider />
            <Row style={{ marginTop: "3%" }}>
              <Text
                style={{
                  fontSize: 15,
                }}
              >
                Was this article helpful?
              </Text>
              <ThumbUpIcon
                fontSize="medium"
                sx={{ color: "#3E8EDE" }}
                style={{ marginLeft: "2%" }}
              />
              <ThumbDownIcon
                fontSize="medium"
                sx={{ color: "red" }}
                style={{ marginLeft: "2%" }}
              />
            </Row>
            <Row style={{ marginTop: "3%" }}>
              <Text
                style={{
                  fontSize: 15,
                }}
                color="gray.400"
              >
                Related Articles{" "}
              </Text>
            </Row>
            <Row style={{ marginTop: "1%" }}>
              {/* {relatedFaq.map((r) => {
                <Text
                  style={{
                    fontSize: 15,
                  }}
                >
                  {r.question}
                </Text>;
              })} */}
              <Text
                style={{
                  fontSize: 15,
                }}
              >
                How to change password?
              </Text>
            </Row>

            <Row style={{ marginTop: "1%" }}>
              <Text
                style={{
                  fontSize: 15,
                }}
              >
                How do I create an account?
              </Text>
            </Row>
            <Row style={{ marginTop: "1%" }}>
              <Text
                style={{
                  fontSize: 15,
                }}
              >
                How do I track my package?
              </Text>
            </Row>
          </Col>
        ) : (
          <div className="App">
            {/* <Header /> */}
            <div className="faqs">
              {faqs.map((faq, index) => (
                <Answers
                  faq={faq}
                  index={index}
                  key={index}
                  toggleFAQ={toggleFAQ}
                />
              ))}
            </div>
          </div>
        )}
      </Flex>
    </>
  );
};

export default AnswerBox;
