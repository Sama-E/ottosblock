"use client"

import styles from "./register.module.css";
import { register } from "@/utils/fetchData";
import Link from "next/link"
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Register = () => {
  // const [state, formAction] = useFormState(register, undefined);
  
  // const router = useRouter();

  // useEffect(() => {
  //   state?.success && router.push("/login");
  // }, [state?.success, router]);
  
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
      <h2>Register</h2>
        <div>
          <form className={styles.form} action={register}>
          {/* <form className={styles.form}> */}
            <input type="text" placeholder="First Name" name="firstName" />
            <input type="text" placeholder="Last Name" name="lastName" />
            <input type="email" placeholder="Email" name="email" />
            <input type="password" placeholder="Password" name="password" />
            <input type="password" placeholder="Confirm Password" name="passwordConfirm" />
            <button className={styles.formButton}>Register</button>
            {/* {state?.error} */}
            <Link href="/login">
              {"Already have an account?"} <b>Login</b>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register