import { Typography } from "@mui/material";
import React from "react";
import { AnswerButtonGrid } from "./AnswerButtonGrid";

export const TriviaQuestion = ({ question, answers, correctAnswer }) => {
  return (
    <>
      <div className="questionTitle">
        <Typography variant="h4" align="center">
          {question}
        </Typography>
      </div>
      <div className="answers">
        <AnswerButtonGrid
          answers={answers}
          correctAnswer={correctAnswer}
        ></AnswerButtonGrid>
      </div>
    </>
  );
};
