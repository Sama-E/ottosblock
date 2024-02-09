import styles from "./cardList.module.css";
import Image from "next/image";
import Card from "../Card/Card";
// import Pagination from "../pagination/Pagination";

const posts = [
  {
    id: 1,
    img: "/culture.png",
    createdAt: "11/26/2023",
    catSlug: "Lifestyle",
    slug: "new-life",
    title: "New Life",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae consequatur sequi iure quas dolores! Iste maiores voluptates architecto, reprehenderit tempora labore eveniet modi eligendi quidem suscipit quo doloribus eum nobis."
  },
  {
    id: 2,
    img: "/culture.png",
    createdAt: "11/26/2023",
    catSlug: "Blockchain",
    slug: "new-blocks",
    title: "New Blocks",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae consequatur sequi iure quas dolores! Iste maiores voluptates architecto, reprehenderit tempora labore eveniet modi eligendi quidem suscipit quo doloribus eum nobis."
  },
  {
    id: 3,
    img: "/culture.png",
    createdAt: "11/26/2023",
    catSlug: "Security",
    slug: "lots-of-security",
    title: "Lots of Security",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae consequatur sequi iure quas dolores! Iste maiores voluptates architecto, reprehenderit tempora labore eveniet modi eligendi quidem suscipit quo doloribus eum nobis."
  },
  {
    id: 4,
    img: "/culture.png",
    createdAt: "11/26/2023",
    catSlug: "Tech",
    slug: "new-tech-ai",
    title: "New Tech: AI",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae consequatur sequi iure quas dolores! Iste maiores voluptates architecto, reprehenderit tempora labore eveniet modi eligendi quidem suscipit quo doloribus eum nobis."
  },

]

const CardList = () => {

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts?.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
      {/* <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} /> */}
    </div>
  )
}

export default CardList