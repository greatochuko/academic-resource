"use client";
import React, { useState } from "react";
import Course from "./Course";
import styles from "@/styles/HomepageMain.module.css";
import { courses } from "@/utils/data";
import FullScreenLoader from "./FullScreenLoader";

const classLevels = [
  "100L first semester",
  "100L second semester",
  "200L first semester",
  "200L second semester",
  "300L first semester",
  "300L second semester",
  "400L first semester",
  "400L second semester",
];

export default function HomepageMain() {
  const [selectedClass, setSelectedClass] = useState("100L first semester");

  const filteredCourses = courses.filter(
    (course) => course.class.toLowerCase() === selectedClass.toLowerCase()
  );

  return (
    <div className={styles.mainContainer}>
      <section className={styles.leftContainer}>
        <div className={styles.sessionContainer}>
          <ul className={styles.listContainer}>
            {classLevels.map((classLevel) => (
              <li
                className={classLevel === selectedClass ? styles.active : ""}
                key={classLevel}
                onClick={() => setSelectedClass(classLevel)}
              >
                {classLevel}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.rightContainer}>
        {filteredCourses.map((course, index) => (
          <Course key={index} course={course} />
        ))}
      </section>
    </div>
  );
}
