"use client"

import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link';

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        // Add your form submission logic here
    };
  return (
    <div className={styles.container}>
        <h1 className={styles.headingText}>WELCOME BACK</h1>
        <p className={styles.paraText}>Please Sign in to access the website</p>
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formControl}>
                    <input type='Email' id='Email' placeholder='Enter Email' />
                </div>
                <div className={styles.formControl}>
                    <input type='password' id='password' placeholder='Enter Password' />
                </div>
                <button type='button' className={styles.button}>Log in</button>
                <p>Don't have an account? <Link href="/register" >Register here</Link></p>
            </form>
        </div>
    </div>
  )
}

export default Login