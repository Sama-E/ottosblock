import styles from "./cardList.module.css";
import Image from "next/image";
import Card from "../Card/Card";
import Pagination from "@/components/Pagination/Pagination";

const CardList = ({posts}) => {

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts?.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
      {/* <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} /> */}
      <Pagination />
    </div>
  )
}

export default CardList