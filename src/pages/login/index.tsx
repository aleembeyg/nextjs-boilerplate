import Head from "next/head";
import Link from "next/link";
import { getSession, signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsApple } from "react-icons/bs";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import {
  Box,
  Button,
  Card,
  CircularProgress,
  TextField,
} from "@mui/material";
import FormControlUnstyled from "@mui/base/FormControlUnstyled";
import styles from "./index.module.scss";
import Waiting from "@/components/waiting";
import UserLayout from "@/layout/user";

const Login = ({}: any) => {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [validate, setValidate] = useState(false);
  const [startSocialLogin, setStartSocialLogin] = useState(false);
  const handleGoogleSignIn = async () => {
    setStartSocialLogin(true);
    signIn("google", {
      callbackUrl:
        (router.defaultLocale !== router.locale ? "/" + router.locale : "") +
        "/user",
    });
  };

  const handleSubmitUser = async () => {
    if (!validate) {
      return false;
    }
    setLoading(true);
    await new Promise<void>((resolve, request) =>
      setTimeout(() => {
        resolve();
        setLoading(false);
        setUserName("");
        setPassword("");
        toast.error("We'r sorry we couldn't found your email.");
      }, 2000)
    );
  };

  useEffect(() => {
    if (userName.trim() == "" || password.trim() == "") {
      setValidate(false);
    } else {
      setValidate(true);
    }
  }, [userName, password]);

  useEffect(() => {
    return () => {
      setStartSocialLogin(false);
    };
  }, []);

  return (
    <>
      {startSocialLogin && <Waiting />}
      <Head>
        <title>MobileCredit - Login</title>
      </Head>
      <section className={styles.loginSection}>
        <div className={`fixed-width-panel ${styles.cardPanel}`}>
          <div className={styles.left}>
            <h1>Welcome Back !</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
          </div>
          <FormControlUnstyled
            className={styles.right}
            defaultValue=""
            required
          >
            <form method="post">
              <TextField
                fullWidth
                variant="outlined"
                label="Email"
                value={userName}
                type="email"
                size="small"
                aria-describedby="emailHelp"
                onChange={(e) => setUserName(e.target.value)}
              />
              <p className={styles.helpText}>
                Well never share your email with anyone else.
              </p>
              <TextField
                fullWidth
                variant="outlined"
                value={password}
                label="Password"
                type="password"
                size="small"
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <br />
              <Button
                variant="contained"
                color="success"
                fullWidth
                onClick={handleSubmitUser}
              >
                {!loading && <>Login</>}
                {loading && (
                  <CircularProgress size={25} style={{ color: "white" }} />
                )}
              </Button>
              <br />
              <br />
              <h2>Use Social Login</h2>
              <br />
              <Button
                variant="outlined"
                color="inherit"
                disabled={startSocialLogin}
                fullWidth
                style={{ marginBottom: "10px" }}
                onClick={handleGoogleSignIn}
              >
                <FcGoogle />
                &nbsp;Signin with Google
              </Button>
              <br />
              <Button
                variant="contained"
                disabled={startSocialLogin}
                color="primary"
                fullWidth
                style={{
                  color: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <BsFacebook fill="#fff" />
                &nbsp;Signin with Facebook
              </Button>
              <Button
                variant="outlined"
                disabled={startSocialLogin}
                color="inherit"
                fullWidth
                style={{
                  backgroundColor: "#000",
                  color: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <BsApple size={16} fill="#fff" />
                &nbsp;Signin with Apple
              </Button>
            </form>
            <br />
            <p style={{ fontSize: "14px" }}>
              Dont have account yet?&nbsp;
              <Link className={styles.link} href={"/"}>
                Signup
              </Link>
            </p>
          </FormControlUnstyled>
        </div>
      </section>
    </>
  );
};

export default Login;

Login.getLayout = (page: any) => {
  return (
   <UserLayout page={page}/>
  );
};

export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  if (session) {
    return {
      props: { session },
      redirect: {
        destination: "/user",
        locale: context.locale,
        permanent: false,
      },
    };
  } else {
    return { props: {} };
  }
}
