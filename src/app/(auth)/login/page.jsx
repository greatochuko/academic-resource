"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const cannotSubmit = loading || !email.trim() || !password.trim();

  async function handleSubmit(e) {
    e.preventDefault();
    if (cannotSubmit) return;
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
    setLoading(false);
  }

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.headingText}>WELCOME BACK</h1>
        <p className={styles.paraText}>Please Sign in to access the website</p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formControl}>
            <input
              type="email"
              id="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
            />
          </div>
          <div className={styles.formControl}>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
            />
          </div>
          {error && <p className={styles.error}>{error}</p>}

          <button
            type="submit"
            disabled={cannotSubmit}
            className={styles.button}
          >
            {loading ? "Loggin in..." : "Log in"}
          </button>
          <p>
            Don't have an account? <Link href="/register">Register here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
