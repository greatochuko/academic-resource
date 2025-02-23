"use client";

import React from "react";
import LogoutButton from "./LogoutButton";
import styles from "@/styles/Header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header({ user }) {
  const pathname = usePathname();

  return (
    <header className={styles.navBar}>
      <h1 className={styles.logo}>
        <Link href={"/"}>Academic Resource</Link>
      </h1>
      <div className={styles.authLinks}>
        {user ? (
          <>
            <Link
              href="/dashboard"
              className={[pathname === "/dashboard" ? styles.active : ""].join(
                " "
              )}
            >
              Dashboard
            </Link>
            <LogoutButton />
          </>
        ) : (
          <>
            <Link
              href="/register"
              className={[pathname === "/register" ? styles.active : ""].join(
                " "
              )}
            >
              Register
            </Link>
            <Link
              href="/login"
              className={[
                styles.login,
                pathname === "/login" ? styles.active : "",
              ].join(" ")}
            >
              Login
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
