import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";


const Card = ({ key, item }) => {

  return (
    <div className={styles.container} key={key}>
      {item.img && (
        <div className={styles.imageContainer}>
          <Image src={item.img} alt="" fill className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>
        <Link href={`/blog/singlePost/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>
        <div className={styles.detail}>
          <span className={styles.date}>
            {/* {item.createdAt.substring(0, 10)} -{" "} */}
            {item.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        
        <p className={styles.desc} dangerouslySetInnerHTML={{ __html: item?.desc.substring(0,400) }}/>

        <Link href={`/blog/singlePost/${item.slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  )
}

export default Card