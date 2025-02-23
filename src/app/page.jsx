import styles from "./page.module.css";
import { getSession } from "@/services/authService";
import HomepageMain from "@/components/HomepageMain";

export default async function Home() {
  const { user } = await getSession();

  return (
    <div className={styles.page}>
      <div className={styles.titleContainer}>
        <h1 className={styles.greetings}>Welcome {user?.firstName}</h1>
        <p className={styles.tagline}>Find Inspiration in these Materials.</p>
      </div>

      <HomepageMain />
    </div>
  );
}
