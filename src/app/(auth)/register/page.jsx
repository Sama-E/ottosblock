"use client"

import styles from "./register.module.css";
import RegisterForm from "@/components/AuthForms/RegisterForm/RegisterForm";

const Register = () => {
  
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
      <h2>Register</h2>
        <div>
          <RegisterForm />
        </div>
      </div>
    </div>
  )
}

export default Register