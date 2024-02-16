import Link from "next/link"
import styles from "./navbar.module.css"
import ThemeToggle from "@/components/Theme/ThemeToggle";
import AuthLinks from "./Authlinks/Authlinks";
import { auth } from "@/utils/auth";


const Navbar = async () => {

  const session = await auth();
  // console.log(session)

  return (
    <div className={styles.container}>
        <Link href="/" className={styles.logo}>Mr. Otter's [Block]</Link>

      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>Contact</Link>
        <Link href="/" className={styles.link}>About</Link>
        <AuthLinks session = {session} />
      </div>
    </div>
  )
}

export default Navbar;