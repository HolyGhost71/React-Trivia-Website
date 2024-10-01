import React from "react";
import { Typography } from "@mui/material";
import { AnswerButtonGrid } from "./AnswerButtonGrid";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import app from "../firebaseConfig";
import { getDatabase, ref, get, set, push } from "firebase/database";
import { useLocation } from "react-router-dom";

export const GameSpace = () => {
  const [question, setQuestion] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [points, setPoints] = useState(0);

  const location = useLocation();
  const { name } = location.state || { name: "Guest" };

  useEffect(() => {
    getUserScore();
    setUpQuestion();
  }, []);

  const getUserScore = async () => {
    const db = getDatabase();
    const scoreRef = ref(db, "users/" + name + "/userScore");
    const snapshot = await get(scoreRef);
    if (snapshot.exists()) {
      setPoints(snapshot.val());
    } else {
      console.log("No score data found for user");
      return 0;
    }
  };

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
    console.log(name);
  };

  const updateScore = async () => {
    setPoints(points + 1);
  };

  return (
    <>
      <Typography variant="h2" className="title">
        Quickfire Trivia
      </Typography>
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
    </>
  );
};
