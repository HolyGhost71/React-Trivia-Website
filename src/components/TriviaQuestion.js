import { Typography } from "@mui/material";
import React from "react";
import { AnswerButtonGrid } from "./AnswerButtonGrid";

export const TriviaQuestion = ({ title, answers }) => {
  return (
    <>
      <div className="questionTitle">
        <Typography variant="h4" align="center">
          {title}
        </Typography>
      </div>
      <div className>
        <AnswerButtonGrid></AnswerButtonGrid>
      </div>
    </>
  );
};
