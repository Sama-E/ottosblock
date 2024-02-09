import styles from "./menuPosts.module.css";
import Image from "next/image";
import Link from "next/link";

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

// const MenuPosts = ({withImage}) => {
const MenuPosts = () => {

  return (
    <div className={styles.items}>
      {posts?.map((item) => (
      
        <Link key={item.id} href={`/blog/singlePost/${item.slug}`} className={styles.item} >
          {item && (
            <div className={styles.imageContainer}>
              <Image src={item.img} alt="" fill className={styles.image} />
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles[item.catSlug]}`}>{item.catSlug}</span>
            <h3 className={styles.postTitle}>
              {item.title}
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}> {" "} - {item.createdAt.substring(0, 10)} </span>
            </div>
          </div>
        </Link>

      ))}
    </div>
  )
}

export default MenuPosts;