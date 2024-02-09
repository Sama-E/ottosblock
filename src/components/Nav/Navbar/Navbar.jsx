import Link from "next/link"
import styles from "./navbar.module.css"
import ThemeToggle from "@/components/Theme/ThemeToggle";
import AuthLinks from "./Authlinks/Authlinks";


const Navbar = async () => {

  return (
    <div className={styles.container}>
        <Link href="/" className={styles.logo}>Mr. Otter's [Block]</Link>

      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>Contact</Link>
        <Link href="/" className={styles.link}>About</Link>
        <AuthLinks />
      </div>
    </div>
  )
}

export default Navbar;