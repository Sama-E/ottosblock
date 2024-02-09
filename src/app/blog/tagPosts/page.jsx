import styles from "./tagPosts.module.css";
import Menu from "@/components/Menu/Menu/Menu";
import CardList from "@/components/Cards/CardList/CardList";


const TagPosts = () => {
  // const TagPosts = ({ searchParams }) => {
  //   const page = parseInt(searchParams.page) || 1;
  //   const { tag } = searchParams;

  return (
    <div className={styles.container}>
      {/* <h1 className={styles.title}>#{tag}</h1> */}
      <h1 className={styles.title}>#tag</h1>
      <div className={styles.content}>
        {/* <CardList page={page} tag={tag}/> */}
        <CardList />
        <Menu />
      </div>
    </div>
  )
}

export default TagPosts;