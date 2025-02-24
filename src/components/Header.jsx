"use client";

import React from "react";
import LogoutButton from "./LogoutButton";
import styles from "@/styles/Header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header({ user, adminUser }) {
  const pathname = usePathname();

  return (
    <header className={styles.navBar}>
      <h1 className={styles.logo}>
        <Link href={"/"}>Academic Resource</Link>
      </h1>
      <div className={styles.authLinks}>
        {(user && !pathname.startsWith("/admin")) ||
        (adminUser && pathname.startsWith("/admin")) ? (
          <LogoutButton
            type={pathname.startsWith("/admin") ? "admin" : undefined}
          />
        ) : pathname.startsWith("/admin") ? null : (
          <>
            <Link
              href="/register"
              className={pathname === "/register" ? styles.active : ""}
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
