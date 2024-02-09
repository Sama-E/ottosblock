"use client";

import styles from "./login.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import Link from "next/link";

const Login = () => {
  // const { status } = useSession();
  // const [state, formAction] = useFormState(login, undefined);

  // const router = useRouter();

  // if (status === "loading") {
  //   return <div className={styles.loading}>Loading...</div>;
  // }

  // if (status === "authenticated") {
  //   router.push("/")
  // }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
      <h2>Login</h2>
        {/* <form className={styles.form} action={formAction}> */}
        <div>
          <form className={styles.form}>
            <input type="email" placeholder="email" name="email" />
            <input type="password" placeholder="password" name="password" />
            <div className={styles.formButton}>Login</div>
            {/* {state?.error} */}
            {/* <Link href="/register">
              {"Don't have an account?"} <b>Register</b>
            </Link> */}
          </form>
        </div>
        {/* <div className={styles.socialButton} onClick={() => signIn("google")}> */}
        <div className={styles.socialButton}>
          Sign in with Google
        </div>
      </div>
    </div>
  )
}

export default Login;