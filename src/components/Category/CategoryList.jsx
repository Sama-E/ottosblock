import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {

  const data = [
    {
      id:1,
      slug: "lifestyle",
      img: "/coding.png",
      title: "Lifestyle"
    },
    {
      id:2,
      slug: "security",
      img: "/food.png",
      title: "Security"
    },
    {
      id:3,
      slug: "blockchain",
      img: "/style.png",
      title: "Blockchain"
    },
    {
      id:4,
      slug: "webdev",
      img: "/fashion.png",
      title: "WebDev"
    },
    {
      id:5,
      slug: "systems",
      img: "/travel.png",
      title: "systems"
    },
    {
      id:6,
      slug: "tech",
      img: "/travel.png",
      title: "Tech"
    },
  ]

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map((item) => (
          <Link
            href="/blog?cat=style"
            className={`${styles.category} ${styles[item.slug]}`}
            key={item._id}
          >
            {item.img && (
              <Image
                src={item.img}
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoryList