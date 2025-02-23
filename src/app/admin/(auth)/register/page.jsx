"use client";

import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const [err, setErr] = React.useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      const res = await fetch("/api/admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      res.status === 201 &&
        router.push("/admin/login?success=Account has been created");
    } catch (error) {
      setErr(true);
      console.log(error);
    }
    // console.log('Form data submitted:', formData);
    // Add your form submission logic here
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.headingText}>REGISTER</h1>
      <p className={styles.paraText}>Please Sign in to access the website</p>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formControl}>
            <input type="text" id="name" placeholder="Enter your Name" />
          </div>
          <div className={styles.formControl}>
            <input type="password" id="password" placeholder="Enter Password" />
          </div>
          {err && <p>something went wrong</p>}
          <button className={styles.button}>Sign up</button>
          <p>
            Already have an account?{" "}
            <Link href="/admin/login">Log in here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
