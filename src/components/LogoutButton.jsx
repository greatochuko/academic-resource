"use client";
import { useState } from "react";
import styles from "@/styles/LogoutButton.module.css";
import { useRouter } from "next/navigation";
import { refreshData } from "@/actions/authActions";

export default function LogoutButton() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  async function handleLogout() {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/logout");
      await refreshData();
      router.push("/login");
      setOpen(false);
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
        <div className={styles.modalOverlay} onClick={() => setOpen(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
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
