import React from "react";
import styles from "./page.module.css";
import BackButton from "@/components/BackButton";
import { courses, quizes } from "@/utils/data";
import { notFound } from "next/navigation";
import QuizContainer from "@/components/QuizContainer";

export default async function QuizPage({ params }) {
  const { id } = await params;

  const course = courses.find((course) => course.id === id);
  if (!course) notFound();

  const courseQuestions = quizes.find(
    (quiz) => quiz.courseId === id
  )?.questions;

  return (
    <div className={styles.container}>
      <h1>{course.name} Quiz</h1>
      <QuizContainer questions={courseQuestions} />
      <BackButton />
    </div>
  );
}
