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
  const getButtonStyle = (answer) => {
    if (selectedAnswer) {
      if (answer === correctAnswer) {
        return {
          backgroundColor: "green",
          color: "white",
          borderColor: "green",
        };
      } else if (answer === selectedAnswer) {
        return {
          backgroundColor: "red",
          color: "white",
          borderColor: "red",
        };
      }
    }
    return {
      backgroundColor: "white",
      color: "black",
      borderColor: "black",
    };
  };

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
              style={getButtonStyle(answer)}
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
