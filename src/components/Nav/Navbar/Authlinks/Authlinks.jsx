"use client";

import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";
import { handleLogout } from "@/utils/fetchData";


const AuthLinks = ({session}) => {
  const [open, setOpen] = useState(false);


  return (
    <>
      {session?.user ? (
        <>
        {session.user?isAdmin &&
          <Link href="/write" className={styles.link}>
            Write
          </Link>
        : "" }
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
                {session.user?isAdmin &&
                <Link href="/admin/writePost">
                  Write
                </Link>
                : "" }
                <span className={styles.link}>Logout</span>
              </>
            ) : (
              <Link href="/login">Login</Link>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;