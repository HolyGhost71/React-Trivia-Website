import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { GamePage } from "./components/GamePage";
import LoginPage from "./components/LoginPage";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LeaderboardPage from "./components/LeaderboardPage";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/game" element={<GamePage />} />
          <Route exact path="/leaderboard" element={<LeaderboardPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
