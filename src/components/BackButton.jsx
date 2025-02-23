"use client";

import React from "react";
import styles from "@/app/[id]/quiz/page.module.css";
import { useRouter } from "next/navigation";

export default function BackButton({ className }) {
  const router = useRouter();

  return (
    <button
      className={[styles.backButton, className].join(" ")}
      onClick={router.back}
    >
      Back
    </button>
  );
}
