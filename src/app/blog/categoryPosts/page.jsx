import styles from "./categoryPosts.module.css";
import Menu from "@/components/Menu/Menu/Menu";
import CardList from "@/components/Cards/CardList/CardList";

// const CategoryPosts = () => {
const CategoryPosts = ({ searchParams }) => {
  // const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;
  console.log(searchParams)

  return (
    <div className={styles.container}>
      {/* <h1 className={styles.title}>{cat}</h1> */}
      <h1 className={styles.title}>Category</h1>
      <div className={styles.content}>
        {/* <CardList page={page} cat={cat}/> */}
        <CardList />
        <Menu />
      </div>
    </div>
  )
}

export default CategoryPosts;