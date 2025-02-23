import React from "react";
import styles from "./page.module.css";
import Material from "@/components/Material";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import { courses } from "@/utils/data";
import { notFound } from "next/navigation";

export default async function CourseMaterialsPage({ params }) {
  const { id } = await params;

  const course = courses.find((course) => course.id === id);
  if (!course) notFound();

  return (
    <div className={styles.container}>
      <h1 className={styles.courseName}>{course.name}</h1>
      {course.materials.length > 0 ? (
        <div className={styles.mainContainer}>
          {course.materials.map((item, index) => (
            <Material key={index} material={item} />
          ))}
        </div>
      ) : (
        <p style={{ color: "#808080", flex: 1 }}>
          There are no materials for this course
        </p>
      )}
      <div className={styles.buttonContainer}>
        <BackButton className={styles.backButton} />
        <Link href={`/${course.id}/quiz`} className={styles.link}>
          Take Quiz
        </Link>
      </div>
    </div>
  );
}
