"use client";

import React from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function AddMaterialPage({ closeModal }) {
  const [err, setErr] = React.useState(false);

  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    const file = e.target[0].value;
    const name = e.target[1].value;
    const fileType = e.target[2].value;
    const level = e.target[3].value;

    try {
      const res = await fetch("/api/material", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ file, name, fileType, level }),
      });

      res.status === 201 &&
        router.push("/dashboard?success=material has been created");
    } catch (error) {
      setErr(true);
      console.log(error);
    }
    // console.log('Form data submitted:', formData);
    // Add your form submission logic here
  }

  return (
    <div className={styles.container} onClick={closeModal}>
      <div
        className={styles.formContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className={styles.headingText}>ADD MATERIAL</h1>
        <p className={styles.paraText}>Please fill all the fields</p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formControl}>
            <input type="file" id="fileUpload" />
          </div>
          <div className={styles.formControl}>
            <input type="text" id="Name" placeholder="Name of material" />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="options">Choose file type:</label>
            <select id="options">
              <option value="" disabled>
                Select type of file
              </option>
              <option value="option1">Video </option>
              <option value="option2">Docs</option>
            </select>
          </div>
          <div className={styles.formControl}>
            <label htmlFor="options">Choose a Level:</label>
            <select id="options">
              <option value="" disabled>
                Select an option
              </option>
              <option value="option1">100 </option>
              <option value="option2">200</option>
              <option value="option3">300</option>
              <option value="option3">400</option>
            </select>
          </div>
          {err && <p>something went wrong</p>}
          <button className={styles.button}>Add</button>
        </form>
      </div>
    </div>
  );
}
