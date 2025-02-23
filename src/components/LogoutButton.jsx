"use client";
import { useState } from "react";
import styles from "@/styles/LogoutButton.module.css";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  async function handleLogout() {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/logout");
      if (res.ok) {
        router.push("/login");
      }
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
  }

  return (
    <>
      <button className={styles.logoutButton} onClick={() => setOpen(true)}>
        Logout
      </button>
      {open && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h2>Confirm Logout</h2>
            <p>Are you sure you want to log out?</p>
            <div className={styles.modalActions}>
              <button
                className={styles.cancelButton}
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
              <button
                disabled={loading}
                className={styles.logoutButton}
                onClick={handleLogout}
              >
                {loading ? "Logging out..." : "Logout"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
