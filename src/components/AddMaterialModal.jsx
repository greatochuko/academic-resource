import React, { useState } from "react";
import styles from "@/styles/AddMaterialModal.module.css";
import { useRouter } from "next/navigation";

export default function AddMaterialModal({ closeModal }) {
  const [err, setErr] = useState(false);
  const [fileType, setFileType] = useState("");
  const [fileName, setFileName] = useState("");
  const [fileLink, setFileLink] = useState("");
  const [level, setLevel] = useState("");
  const [semester, setSemester] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const cannotSubmit =
    loading || !fileType || !fileName || !fileLink || !level || !semester;

  async function handleSubmit(e) {
    e.preventDefault();
    if (cannotSubmit) return;

    const classLevel = level + " " + semester;
    console.log({ file: fileLink, fileName, fileType, classLevel });

    return;

    try {
      const res = await fetch("/api/material", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          file: fileLink,
          fileName,
          fileType,
          class: classLevel,
        }),
      });

      res.status === 201 &&
        router.push("/admin?success=material has been created");
    } catch (error) {
      setErr(true);
      console.log(error);
    }
    // console.log('Form data submitted:', formData);
    // Add your form submission logic here
  }

  function handleFileUpload(e) {
    const file = e.target.files[0];
    console.log(file);
  }

  return (
    <div className={styles.container} onClick={closeModal}>
      <div
        className={styles.formContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className={styles.headingText}>ADD MATERIAL</h2>
        <p className={styles.paraText}>Please fill all the fields</p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formControl}>
            <label htmlFor="fileName">Name:</label>
            <input
              type="text"
              id="fileName"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              placeholder="Name of material"
            />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="level">Level:</label>
            <select
              id="level"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
            >
              <option value="" hidden>
                Select a Level
              </option>
              <option value="100L">100 </option>
              <option value="200L">200</option>
              <option value="300L">300</option>
              <option value="400L">400</option>
            </select>
          </div>
          <div className={styles.formControl}>
            <label htmlFor="semester">Semester:</label>
            <select
              id="semester"
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
            >
              <option value="" hidden>
                Select a Semester
              </option>
              <option value="First Semester">1st Semester</option>
              <option value="Second Semester">2nd Semester</option>
            </select>
          </div>
          <div className={styles.formControl}>
            <label htmlFor="fileType">File Type:</label>
            <select
              id="fileType"
              value={fileType}
              onChange={(e) => setFileType(e.target.value)}
            >
              <option value="" hidden>
                Select a file type
              </option>
              <option value="video">Video </option>
              <option value="document">Document</option>
            </select>
          </div>
          {fileType ? (
            fileType === "document" ? (
              <div className={styles.formControl}>
                <label htmlFor="video">Video URL:</label>
                <input
                  type="text"
                  id="video"
                  value={fileLink}
                  onChange={(e) => setFileLink(e.target.value)}
                  placeholder="Enter the video link"
                />
              </div>
            ) : (
              <div className={styles.formControl}>
                <label htmlFor="fileUpload">Upload File:</label>
                <input
                  type="file"
                  id="fileUpload"
                  onChange={handleFileUpload}
                />
              </div>
            )
          ) : null}
          {err && <p>something went wrong</p>}
          <button disabled={cannotSubmit} className={styles.button}>
            {loading ? "Adding..." : "Add"}
          </button>
        </form>
      </div>
    </div>
  );
}
