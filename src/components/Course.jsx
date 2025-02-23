import React from "react";
import styles from "@/styles/Course.module.css";
import Link from "next/link";

const Course = ({ course }) => {
  return (
    <Link href={course.id}>
      <div className={styles.course}>{course.name}</div>
    </Link>
  );
};

export default Course;
