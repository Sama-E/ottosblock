import Featured from "@/components/Featured/Featured"
import styles from "./homepage.module.css"
import CategoryList from "@/components/Category/CategoryList"
import CardList from "@/components/Cards/CardList/CardList"
import Menu from "@/components/Menu/Menu/Menu"

export default function Home() {
  return (
    <div className={styles.container}>
        <Featured />
        <CategoryList />
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  )
}