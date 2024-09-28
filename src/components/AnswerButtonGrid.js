import React from "react";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";

export const AnswerButtonGrid = ({
  answers,
  correctAnswer,
  setSelectedAnswer,
  selectedAnswer,
  updateScore,
}) => {
  const handleClick = (answer) => {
    setSelectedAnswer(answer);
    if (answer === correctAnswer) {
      updateScore();
    }
  };

  return (
    <div align="center">
      {answers.map((answer) => (
        <div key={answer}>
          <Box padding={0.5}>
            <Button
              variant="outlined"
              size=""
              className={`answerButton ${
                selectedAnswer && answer === correctAnswer
                  ? "correct"
                  : selectedAnswer === answer
                  ? "incorrect"
                  : ""
              }`}
              onClick={() => handleClick(answer)}
            >
              {answer}
            </Button>
          </Box>
        </div>
      ))}
    </div>
  );
};
