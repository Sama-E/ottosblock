import styles from "./singlePost.module.css";
import Menu from '@/components/Menu/Menu/Menu';
import UserDetails from "@/components/UserDetails/UserDetails";
import { getPost } from "@/utils/fetchData";
import Image from 'next/image';

//Metadata
export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.desc,
  };
};

// const SinglePost = () => {
const SinglePost = async ({ params }) => {
  const { slug } = params;
//   const data = await getData(slug);
const post = await getPost(slug)
const date = post.createdAt.toString().slice(4, 16)


  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
        {post?.img && (
          <div className={styles.imageContainer}>
            <Image src={post.img} alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{post?.title}</h1>
          <UserDetails user={post.userId} date={date} />
          {/* <div className={styles.user}>
            {post?.user?.image && (
              <div className={styles.userImageContainer}>
                <Image 
                  // src={post.user.image}
                  src="/fashion.png"
                  alt="" 
                  fill
                  className={styles.avatar} />
              </div>
            )}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{post?.user.firstName}{post?.user.lastName}</span>
              <span className={styles.username}>John Doe</span>
              </div>
            </div> */}
            {/* <span className={styles.date}>{post.createdAt}.toString().slice(4, 16)</span> */}
            {/* <span className={styles.date}>{post.createdAt}</span> */}
        </div>
          {/* <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: post?.desc }}
          /> */}
          <div className={styles.description}>
          {post?.desc}
          </div>
          <div className={styles.comment}>
            {/* <Comments postSlug={slug}/> */}
          </div>
        </div>
        {/* <Menu cat={post.catSlug}/> */}
        <Menu />
      </div>
    </div>
  )
}

export default SinglePost;