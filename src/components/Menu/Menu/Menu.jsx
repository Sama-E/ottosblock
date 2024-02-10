import Image from "next/image";
import styles from "./menu.module.css";
import Link from "next/link";
import MenuTags from "../MenuTags/MenuTags";
import MenuPosts from "../MenuPosts/MenuPosts";

const Menu = () => {
  return (
    <div className={styles.container}>
      {/* <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={false}  cat={cat} /> */}
      {/* <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Similar Posts</h1>
      <MenuPosts withImage={false}  cat={cat} searchParams={searchParams} /> */}
      <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      <MenuPosts />
      <h2 className={styles.subtitle}>Discover by tag</h2>
      <h1 className={styles.title}>Tags</h1>
      <MenuTags />

    </div>
  )
}

export default Menu