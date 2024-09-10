import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Typography } from "@mui/material";
import { TriviaQuestion } from "./components/TriviaQuestion";
import { useEffect, useState } from "react";
import axios from "axios";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App() {
  const [question, setQuestion] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState([]);

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
        while (currentIndex != 0) {
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

      console.log(all_answers);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    setUpQuestion();
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <Typography variant="h2" align="center">
        Quiz Game
      </Typography>
      <TriviaQuestion
        question={question}
        answers={answers}
        correctAnswer={correctAnswer}
      ></TriviaQuestion>
    </ThemeProvider>
  );
}
