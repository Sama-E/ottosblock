

import { signIn } from "@/utils/auth";
import styles from "./login.module.css";
import { handleGithubLogin, handleGooglehubLogin } from "@/utils/fetchData";
// import { useRouter } from "next/navigation";
// import { useFormState } from "react-dom";

const Login = () => {
  // const { data, status } = useSession();
  // // console.log(data, status)
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
        <div>
          {/* <form className={styles.form} action={formAction}> */}
          <form className={styles.form}>
            <input type="email" placeholder="Email" name="email" />
            <input type="password" placeholder="Password" name="password" />
            <div className={styles.formButton}>Login</div>
            {/* {state?.error} */}
            {/* <Link href="/register">
              {"Don't have an account?"} <b>Register</b>
            </Link> */}
          </form>
        </div>
        <form action={handleGooglehubLogin}>
          <button className={styles.socialButton}>
            Sign in with Google
          </button>
        </form>
        <form action={handleGithubLogin}>
          <button className={styles.socialButton}>
            Sign in with Github
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login;