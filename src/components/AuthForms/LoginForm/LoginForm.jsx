"use client"

import styles from "./loginForm.module.css";
import Link from "next/link";
import { login } from '@/utils/fetchData';
import { useFormState } from 'react-dom';
import { useRouter } from "next/navigation";

const LoginForm = () => {

  const [state, formAction] = useFormState(login, undefined);

  const router = useRouter();

  return (
    <form className={styles.form} action={formAction}>
      <input type="email" placeholder="Email" name="email" />
      <input type="password" placeholder="Password" name="password" />
      <button className={styles.formButton}>Login</button>
      <div className={styles.error}>{state?.error}</div>
      <Link href="/register">
        {"Don't have an account?"} <b>Register</b>
      </Link>
    </form>
  )
}

export default LoginForm;