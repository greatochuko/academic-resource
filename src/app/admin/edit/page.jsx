"use client"

import React from 'react'
import styles from "./page.module.css"

const Add = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        // Add your form submission logic here
    };
  return (
    <div className={styles.container}>
       
        <div className={styles.formContainer}>
        <h1 className={styles.headingText}>EDIT MATERIAL</h1>
        <p className={styles.paraText}>Please fill all the fields</p>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formControl}>
                <input type="file" id="fileUpload"  />
                </div>
                <div className={styles.formControl}>
                    <input type='text' id='Name' placeholder='Name of material' />
                </div>
                <div className={styles.formControl}>
                <label htmlFor="options">Choose file type:</label>
                  <select id="options"  >
                    <option value="" disabled>Select type of file</option>
                    <option value="option1">Video </option>
                    <option value="option2">Docs</option>
                  </select>
                </div>
                <div className={styles.formControl}>
                <label htmlFor="options">Choose a Level:</label>
                  <select id="options"  >
                    <option value="" disabled>Select an option</option>
                    <option value="option1">100 </option>
                    <option value="option2">200</option>
                    <option value="option3">300</option>
                    <option value="option3">400</option>
                  </select>
                </div>
                <button type='button' className={styles.button}>Edit</button>
            </form>
        </div>
    </div>
  )
}

export default Add