"use client"

import styles from "./login.module.css";
import { auth, signIn } from "@/utils/auth";
import { handleGithubLogin, handleGooglehubLogin, login } from "@/utils/fetchData";
import LoginForm from "@/components/AuthForms/LoginForm/LoginForm";

const Login = () => {
  
  // const [state, formAction] = useFormState(login, undefined);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
      <h2>Login</h2>
        <div>
          <LoginForm />
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