"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const cannotSubmit =
    loading ||
    !firstName.trim() ||
    !lastName.trim() ||
    !email.trim() ||
    !password.trim();

  async function handleSubmit(e) {
    e.preventDefault();
    if (cannotSubmit) return;
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, email, password }),
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
        <h1 className={styles.headingText}>REGISTER</h1>
        <p className={styles.paraText}>Please Sign up to access the website</p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div style={{ display: "flex", gap: 8 }}>
            <div className={styles.formControl}>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
              />
            </div>
            <div className={styles.formControl}>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last name"
              />
            </div>
          </div>
          <div className={styles.formControl}>
            <input
              type="email"
              id="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div className={styles.formControl}>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create password"
            />
          </div>
          {error && <p className={styles.error}>{error}</p>}
          <button
            disabled={cannotSubmit}
            type="submit"
            className={styles.button}
          >
            {loading ? "Registering..." : "Register"}
          </button>
          <p>
            Already have an account? <Link href="/login">Login here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
