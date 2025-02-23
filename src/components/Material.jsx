import React from "react";
import Image from "next/image";
import styles from "@/styles/Material.module.css";
import Link from "next/link";

const Material = ({ material }) => {
  return (
    <Link href={material.link} className={styles.material} target="_blank">
      <Image
        src={material.type === "pdf" ? "/doc.png" : "/video-player.png"}
        alt="image"
        width={50}
        height={50}
      />
      <p>{material.name}</p>
    </Link>
  );
};

export default Material;
