"use client";
import React, { useState } from "react";
import AddMaterialModal from "./AddMaterialModal";
import styles from "@/styles/AddMaterialButton.module.css";

export default function AddMaterialButton() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className={styles.addContainer}
      >
        <span className={styles.addIcon}>+</span>
        Add Material
      </button>
      {modalOpen && <AddMaterialModal closeModal={() => setModalOpen(false)} />}
    </>
  );
}
