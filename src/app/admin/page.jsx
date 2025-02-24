import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import AddMaterialButton from "@/components/AddMaterialButton";
import { getAdminSession } from "@/services/authServices";
import AdminLoginForm from "@/components/AdminLoginForm";

const materials = [];

export default async function AdminDashboardPage() {
  const { user } = await getAdminSession();

  if (!user) {
    return <AdminLoginForm />;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>ADMIN DASHBOARD</h1>
      <AddMaterialButton />
      <div className={styles.listContainer}>
        <h1>List of materials</h1>
        <div className={styles.listItems}>
          {materials.map((item, index) => (
            <div key={index} className={styles.listItem}>
              <div className={styles.listItemName}>{item.nameof}</div>
              <div className={styles.level}>Level: {item.level}</div>
              <div className={styles.type}>type: {item.typeofFile}</div>
              <div className={styles.listItemAction}>
                <Link href="/admin/edit">
                  <button className={styles.editButton}>Edit</button>
                </Link>
                <button className={styles.deleteButton}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
