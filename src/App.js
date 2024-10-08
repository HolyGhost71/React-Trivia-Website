import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { GameSpace } from "./components/GameSpace";
import Write from "./components/Write";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
          <Route exact path="/" element={<Write />} />
          <Route exact path="/game" element={<GameSpace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
