import Link from "next/link"
import Links from "./links/Links"
import styles from "./navbar.module.css"
import ThemeToggle from "@/components/Theme/ThemeToggle";

const Navbar = async () => {

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Mr. Otter's [Block]</Link>
      <div>
      
        <Links/>
      </div>
    </div>
  )
}

export default Navbar