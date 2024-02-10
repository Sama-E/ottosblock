import styles from "./menuTags.module.css";
import Link from "next/link";
import Image from "next/image";

const data = [
  {
    id: 1,
    slug: "algorithms",
    title: "#Algorithms"
  },
  {
    id: 2,
    slug: "systems",
    title: "#Systems"
  },
  {
    id: 3,
    slug: "food",
    title: "#Food"
  },
  {
    id: 4,
    slug: "travel",
    title: "#Travel"
  },
  {
    id: 5,
    slug: "networks",
    title: "#Networks"
  },
  {
    id: 6,
    slug: "books",
    title: "#Books"
  },
  {
    id: 7,
    slug: "shows",
    title: "#Shows"
  },
  {
    id: 8,
    slug: "javascript",
    title: "#JavaScript"
  },
  {
    id: 9,
    slug: "python",
    title: "#Python"
  },
]

const MenuTags = () => {
  return (
    <div className={styles.tagList}>
      {data?.map((item) => (
        <Link
          href={`/blog/tagPosts?cat=${item.slug}`}
          className={styles.tagItem}
          key={item._id}
        >
          {/* {item.img && (
            <Image
              src={item.img}
              alt=""
              width={32}
              height={32}
              className={styles.image}
            />
          )} */}
          {item.title}
        </Link>
      ))}
    </div>
  )
}

export default MenuTags;