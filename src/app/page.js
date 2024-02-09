import Featured from "@/components/Featured/Featured"
import styles from "./homepage.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Featured />
      </div>
    </div>
  )
}