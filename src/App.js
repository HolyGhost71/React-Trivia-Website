import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Typography } from "@mui/material";
import { TriviaQuestion } from "./components/TriviaQuestion";
import { useState } from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App() {
  const [data, setData] = useState([]);

  const triviaAnswers = ["London", "Tokyo", "Paris", "Washington DC"];

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <Typography variant="h2" align="center">
        Quiz Game
      </Typography>
      <TriviaQuestion
        question="What is the capital of France?"
        answers={triviaAnswers}
        correctAnswer="Paris"
      ></TriviaQuestion>
    </ThemeProvider>
  );
}
