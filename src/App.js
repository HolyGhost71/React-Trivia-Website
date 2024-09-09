import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Button, Typography } from "@mui/material";
import { QuestionAnswer } from "@mui/icons-material";
import { TriviaQuestion } from "./components/TriviaQuestion";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <Typography variant="h2" align="center">
        Quiz Game
      </Typography>
      <TriviaQuestion title="What is 2+2?"></TriviaQuestion>
    </ThemeProvider>
  );
}
