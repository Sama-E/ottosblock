import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Mr. Otter's [Block]</div>
      <div className={styles.text}>
        Mr. Otter's Block © All rights reserved.
      </div>
    </div>
  )
}

export default Footer