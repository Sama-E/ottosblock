"use client"

import styles from "./login.module.css";
import Link from "next/link"
import { auth, signIn } from "@/utils/auth";
import { handleGithubLogin, handleGooglehubLogin, login } from "@/utils/fetchData";
import { useFormState } from "react-dom";

const Login = () => {
  
  // const [state, formAction] = useFormState(login, undefined);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
      <h2>Login</h2>
        <div>
          <form className={styles.form} action={login}>
          {/* <form className={styles.form}> */}
            <input type="email" placeholder="Email" name="email" />
            <input type="password" placeholder="Password" name="password" />
            <button className={styles.formButton}>Login</button>
            {/* {state?.error} */}
            <Link href="/register">
              {"Don't have an account?"} <b>Register</b>
            </Link>
          </form>
        </div>
        {/* <form action={handleGooglehubLogin}>
          <button className={styles.socialButton}>
            Sign in with Google
          </button>
        </form>
        <form action={handleGithubLogin}>
          <button className={styles.socialButton}>
            Sign in with Github
          </button>
        </form> */}
      </div>
    </div>
  )
}

export default Login;