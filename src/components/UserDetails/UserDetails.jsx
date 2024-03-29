import { getUser } from "@/utils/fetchData";
import styles from "./userDetails.module.css";
import Image from 'next/image';

const UserDetails = async ({user, date}) => {
  const userDetails = await getUser(user);

  return (
    <div className={styles.user}>
      {userDetails?.img && (
        <div className={styles.userImageContainer}>
          <Image 
            src={userDetails?.img}
            alt="" 
            fill
            className={styles.avatar} />
        </div>
      )}
      <div className={styles.userTextContainer}>
        <span className={styles.username}>{userDetails?.firstName} {userDetails?.lastName}</span>
        <span className={styles.date}>{date}</span>
      </div>
    </div>
  )
}

export default UserDetails;