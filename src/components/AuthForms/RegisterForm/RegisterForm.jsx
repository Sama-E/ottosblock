"use client"

import styles from "./registerForm.module.css";
import { register } from "@/utils/fetchData";
import { useFormState } from 'react-dom';
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="First Name" name="firstName" />
      <input type="text" placeholder="Last Name" name="lastName" />
      <input type="email" placeholder="Email" name="email" />
      <input type="password" placeholder="Password" name="password" />
      <input type="password" placeholder="Confirm Password" name="passwordConfirm" />
      <button className={styles.formButton}>Register</button>
        <div className={styles.error}>{state?.error}</div>
      <Link href="/login">
        {"Already have an account?"} <b>Login</b>
      </Link>
    </form>
  )
}

export default RegisterForm