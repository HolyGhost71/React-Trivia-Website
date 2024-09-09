import React from "react";
import { Button } from "@mui/material";

export const AnswerButtonGrid = ({ answers, correctAnswer }) => {
  return (
    <div>
      {answers.map((answer) => (
        <Button
          variant="outlined"
          size="large"
          style={{
            backgroundColor: answer === correctAnswer ? "green" : "white",
            color: answer === correctAnswer ? "white" : "black",
            borderColor: answer === correctAnswer ? "green" : "black",
          }}
        >
          {answer}
        </Button>
      ))}
    </div>
  );
};
