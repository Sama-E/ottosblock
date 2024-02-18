"use client";


import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";
import { handleLogout } from "@/utils/fetchData";
import NavLink from "./navLink/navLinks";
import Image from "next/image";

const links = [

  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },

];

const AuthLinks = ({session}) => {
  const [open, setOpen] = useState(false);
  // console.log(session.user?.isAdmin)


  return (
    <>
      {session?.user ? (
        <>
        {/* {session.user?.isAdmin && */}
          <Link href="/write" className={styles.link}>
            Write
          </Link>
        {/* : "" } */}
          <span className={styles.link} onClick={handleLogout}>
            Logout
          </span>
        </>
      ) : (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {session?.user ? (         
              <>
                {/* {session.user?.isAdmin && */}
                <Link href="/admin/writePost">
                  Write
                </Link>
                {/* : "" } */}
          <form className={styles.link} action={handleLogout}>
<button className={styles.logout}>Logout</button>
</form>
              </>
            ) : (
              <Link href="/login">Login</Link>
          )}
        </div>
      )}
    </>
  //   <div className={styles.container}>
  //   <div className={styles.links}>
  //     {links.map((link) => (
  //       <NavLink item={link} key={link.title} />
  //     ))}
  //     {session?.user ? (
  //       <>
  //         {session.user?.isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
  //         <form className={styles.link} action={handleLogout}>
  //           <button className={styles.logout}>Logout</button>
  //         </form>
  //       </>
  //     ) : (
  //       <NavLink item={{ title: "Login", path: "/login" }} />
  //     )}
  //   </div>
  //   <Image
  //     className={styles.menuButton}
  //     src="/menu.png"
  //     alt=""
  //     width={30}
  //     height={30}
  //     onClick={() => setOpen((prev) => !prev)}
  //   />
  //   {open && (
  //     <div className={styles.mobileLinks}>
  //       {links.map((link) => (
  //         <NavLink item={link} key={link.title} />
  //       ))}
  //     </div>
  //   )}
  // </div>
  );
};

export default AuthLinks;