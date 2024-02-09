import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey there, Otto here!</b> Discover my stories.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/techbulb.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}> 
            I'm a ...
          </h1>
          <h2 className={styles.postSubTitle}>
            Tech enthusiast. Full Stack developer. Nature Lover. Cultured Traveler. Spirited Historian. Peace maker. Foodie. Tinker.
          </h2>
          <p className={styles.postDesc}>
          I created this blog to further explore new concepts and technologies, to test my knowledge and skills, to document my triumphs and shortcomings and to learn from it all. Some posts are technical, others are experiential, and some are just memories. I hope you enjoy whatever I put out there - into the ether.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured;