import React from "react";
import "./Common.css";

type AnswersProps = {
  faq: {
    question: string;
    answer: string;
    open: boolean;
  };
  index: number;
  toggleFAQ: Function;
};

const Answers = ({ faq, index, toggleFAQ }: AnswersProps) => {
  return (
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question">{faq.question}</div>
      <div className="faq-answer">{faq.answer}</div>
    </div>
  );
};

export default Answers;
