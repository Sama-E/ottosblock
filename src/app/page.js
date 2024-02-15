import Featured from "@/components/Featured/Featured"
import styles from "./homepage.module.css"
import CategoryList from "@/components/Category/CategoryList"
import Menu from "@/components/Menu/Menu/Menu"
import Blog from "./blog/page"

export default function Home() {
  return (
    <div className={styles.container}>
        <Featured />
        <CategoryList />
      <div className={styles.content}>
        <Blog />
        <Menu />
      </div>
    </div>
  )
}