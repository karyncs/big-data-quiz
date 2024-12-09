import React, { useState } from "react";
import { quizData } from "./quizData";
import { SpeedInsights } from "@vercel/speed-insights";

const App = () => {
  // State variables
  const [showSetup, setShowSetup] = useState(true); // To show the setup screen
  const [selectedRange, setSelectedRange] = useState([0, quizData.length]); // User-defined range
  const [selectedCount, setSelectedCount] = useState(quizData.length); // Number of questions
  const [randomQuestions, setRandomQuestions] = useState([]); // Holds randomized questions
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Tracks current question
  const [score, setScore] = useState(0); // Tracks correct answers
  const [incorrectAnswers, setIncorrectAnswers] = useState(0); // Tracks incorrect answers
  const [showResults, setShowResults] = useState(false); // To show results
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Tracks selected answer

  const currentQuestion = randomQuestions[currentQuestionIndex];

  // Start Quiz with selected settings
  const handleStartQuiz = () => {
    const [start, end] = selectedRange;
    const questionsInRange = quizData.slice(start, end);
    const shuffledQuestions = questionsInRange.sort(() => 0.5 - Math.random());
    setRandomQuestions(shuffledQuestions.slice(0, selectedCount));
    setShowSetup(false);
  };

  // Handle answer selection
  const handleAnswerClick = (option) => {
    setSelectedAnswer(option);
    if (option === currentQuestion.correctAnswer) {
      setScore(score + 1);
    } else {
      setIncorrectAnswers(incorrectAnswers + 1);
    }
  };

  // Move to next question
  const handleNextQuestion = () => {
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < randomQuestions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
      setSelectedAnswer(null);
    } else {
      setShowResults(true);
    }
  };

  // Restart Quiz
  const handleRestartQuiz = () => {
    setShowSetup(true);
    setSelectedRange([0, quizData.length]);
    setSelectedCount(quizData.length);
    setRandomQuestions([]);
    setCurrentQuestionIndex(0);
    setScore(0);
    setIncorrectAnswers(0);
    setShowResults(false);
    setSelectedAnswer(null);
  };

  return (
    <div style={{ textAlign: "center", margin: "20px auto", maxWidth: "600px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "20px", color: "#333" }}>Big Data Quiz</h1>

      {showSetup ? (
        <div>
          <h2 style={{ color: "#555", marginBottom: "15px" }}>Setup Your Quiz</h2>
          <label style={{ display: "block", marginBottom: "10px" }}>
            Total Questions:{" "}
            <input
              type="number"
              value={selectedCount}
              onChange={(e) => setSelectedCount(Number(e.target.value))}
              max={quizData.length}
              min={1}
              style={{ padding: "5px", border: "1px solid #ccc", borderRadius: "4px" }}
            />
          </label>
          <label style={{ display: "block", marginBottom: "15px" }}>
            Select Range (Start-End):{" "}
            <input
              type="number"
              value={selectedRange[0]}
              onChange={(e) => setSelectedRange([Number(e.target.value), selectedRange[1]])}
              min={0}
              max={quizData.length - 1}
              style={{ padding: "5px", border: "1px solid #ccc", borderRadius: "4px", marginRight: "5px" }}
            />
            -
            <input
              type="number"
              value={selectedRange[1]}
              onChange={(e) => setSelectedRange([selectedRange[0], Number(e.target.value)])}
              min={1}
              max={quizData.length}
              style={{ padding: "5px", border: "1px solid #ccc", borderRadius: "4px", marginLeft: "5px" }}
            />
          </label>
          <button
            onClick={handleStartQuiz}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Start Quiz
          </button>

          <div style={{ marginTop: "30px" }}>
            <p>Enjoyed this quiz?</p>
            <a
              href="https://www.buymeacoffee.com/karyncs"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                backgroundColor: "#ffdd57",
                padding: "10px 20px",
                borderRadius: "5px",
                color: "#000",
              }}
            >
              Buy me a coffee
            </a>
          </div>
        </div>
      ) : showResults ? (
        <div>
          <h2>Quiz Completed!</h2>
          <p>Total Questions: {randomQuestions.length}</p>
          <p>Correct Answers: {score}</p>
          <p>Incorrect Answers: {incorrectAnswers}</p>
          <button
            onClick={handleRestartQuiz}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              marginTop: "20px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Restart Quiz
          </button>
          <div style={{ marginTop: "30px" }}>
            <p>Enjoyed this quiz? Support us!</p>
            <a
              href="https://www.buymeacoffee.com/karyncs"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                backgroundColor: "#ffdd57",
                padding: "10px 20px",
                borderRadius: "5px",
                color: "#000",
              }}
            >
              Buy me a coffee
            </a>
          </div>
        </div>
      ) : (
        <div>
          <div style={{ marginBottom: "10px", fontSize: "18px" }}>
            <strong>Question {currentQuestionIndex + 1} of {randomQuestions.length}</strong>
          </div>
          <h2>{currentQuestion.question}</h2>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", margin: "20px auto" }}>
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(option)}
                style={{
                  margin: "5px 0",
                  padding: "10px 20px",
                  fontSize: "16px",
                  cursor: "pointer",
                  textAlign: "left",
                  backgroundColor:
                    selectedAnswer === option
                      ? option === currentQuestion.correctAnswer
                        ? "lightgreen"
                        : "lightcoral"
                      : "",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  width: "100%",
                }}
                disabled={!!selectedAnswer}
              >
                {`${String.fromCharCode(97 + index)}) ${option}`}
              </button>
            ))}
          </div>

          {selectedAnswer && (
            <button
              onClick={handleNextQuestion}
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                fontSize: "16px",
                cursor: "pointer",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
              }}
            >
              Next Question
            </button>
          )}
        </div>
      )}

      <footer style={{ marginTop: "50px", color: "#555", fontSize: "14px" }}>
        Made with love ~and AI~ by Karyn Serratine.
        <SpeedInsights />
      </footer>

    </div>
  );
  
  
};

export default App;