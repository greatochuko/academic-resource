import LoadingIndicator from "./LoadingIndicator";
import styles from "@/styles/FullScreenLoader.module.css";

export default function FullScreenLoader() {
  return (
    <div className={styles.fullScreenLoader}>
      <LoadingIndicator size={28} />
    </div>
  );
}
