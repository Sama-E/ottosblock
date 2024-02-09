import styles from "./singlePost.module.css";
import Menu from '@/components/Menu/Menu/Menu';
import Image from 'next/image';

const SinglePost = () => {
// const SinglePost = async ({ params }) => {

//   const { slug } = params;
//   const data = await getData(slug);

const data = 
{
  id: 1,
  userId: 1,
  img: "/culture.png",
  createdAt: "11/26/2023",
  catSlug: "Lifestyle",
  slug: "new-life",
  title: "New Life",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae consequatur sequi iure quas dolores! Iste maiores voluptates architecto, reprehenderit tempora labore eveniet modi eligendi quidem suscipit quo doloribus eum nobis."
}

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
        {data?.img && (
          <div className={styles.imageContainer}>
            <Image src={data.img} alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data?.title}</h1>
          <div className={styles.user}>
            {/* {data?.user?.image && ( */}
              <div className={styles.userImageContainer}>
                <Image 
                  // src={data.user.image}
                  src="/fashion.png"
                  alt="" 
                  fill
                  className={styles.avatar} />
              </div>
            {/* )} */}
            <div className={styles.userTextContainer}>
              {/* <span className={styles.username}>{data?.user.name}</span>
              <span className={styles.date}>{data.createdAt.substring(0, 10)}</span> */}
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>{data.createdAt}</span>
            </div>
          </div>
        </div>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: data?.desc }}
          />
          <div className={styles.comment}>
            {/* <Comments postSlug={slug}/> */}
          </div>
        </div>
        {/* <Menu cat={data.catSlug}/> */}
        <Menu />
      </div>
    </div>
  )
}

export default SinglePost;