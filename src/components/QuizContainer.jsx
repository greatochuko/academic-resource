"use client";
import React, { useState } from "react";
import styles from "@/styles/QuizContainer.module.css";

export default function QuizContainer({ questions }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const currentQuestion = questions?.at(currentIndex);

  function handleNext() {
    if (questions.length - 1 > currentIndex) {
      setCurrentIndex((curr) => curr + 1);
    }
    setShowAnswer(false);
  }

  function handlePrev() {
    if (currentIndex > 0) {
      setCurrentIndex((curr) => curr - 1);
    }
    setShowAnswer(false);
  }

  return (
    <div className={styles.quizContainer}>
      {questions && questions.length > 0 ? (
        <>
          <h2>{currentQuestion.question}</h2>

          {showAnswer && (
            <p className={styles.answer}>{currentQuestion.answer}</p>
          )}
          <div className={styles.btnContainer}>
            {currentIndex > 0 && (
              <button onClick={handlePrev} className={styles.btn}>
                Previous Question
              </button>
            )}
            <button
              className={[styles.btn, styles.answerBtn].join(" ")}
              onClick={() => setShowAnswer((curr) => !curr)}
            >
              {showAnswer ? "Hide" : "Reveal"} Answer
            </button>
            {questions.length - 1 > currentIndex && (
              <button onClick={handleNext} className={styles.btn}>
                Next Question
              </button>
            )}
          </div>
        </>
      ) : (
        <p style={{ color: "#666" }}>There are no quizes for this Course</p>
      )}
    </div>
  );
}
