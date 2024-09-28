import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Typography } from "@mui/material";
import { AnswerButtonGrid } from "./components/AnswerButtonGrid";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import "./index.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App() {
  const [question, setQuestion] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [points, setPoints] = useState(0);

  useEffect(() => {
    setUpQuestion();
  }, []);

  const setUpQuestion = async () => {
    try {
      const response = await axios.get(
        "https://the-trivia-api.com/v2/questions"
      );
      var data = response.data[0];

      var api_question = data["question"]["text"];
      setQuestion(api_question);

      var api_correct_answer = data["correctAnswer"];
      setCorrectAnswer(api_correct_answer);

      var all_answers = data["incorrectAnswers"];
      all_answers.push(api_correct_answer);

      function shuffle(array) {
        let currentIndex = array.length;

        // While there remain elements to shuffle...
        while (currentIndex !== 0) {
          // Pick a remaining element...
          let randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;

          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
          ];
        }
      }

      shuffle(all_answers);
      setAnswers(all_answers);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const newQuestion = () => {
    setUpQuestion();
    setSelectedAnswer(null);
  };

  const updateScore = () => {
    setPoints(points + 1);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Typography variant="h2">Quiz Game</Typography>
      <Typography variant="h4" className="questionTitle">
        {question}
      </Typography>
      <Box>
        <AnswerButtonGrid
          answers={answers}
          correctAnswer={correctAnswer}
          setSelectedAnswer={setSelectedAnswer}
          selectedAnswer={selectedAnswer}
          updateScore={updateScore}
        ></AnswerButtonGrid>
      </Box>

      <Button className="newQuestionButton" onClick={() => newQuestion()}>
        New Question
      </Button>

      <Typography className="points">{"Points: " + points}</Typography>
    </ThemeProvider>
  );
}
