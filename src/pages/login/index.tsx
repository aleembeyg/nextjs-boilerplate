import Head from "next/head";
import Link from "next/link";
import { getSession, signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsApple } from "react-icons/bs";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Box, Button, Card, CircularProgress, TextField } from "@mui/material";
import styles from "./index.module.scss";
import Waiting from "@/components/waiting";
import UserLayout from "@/layout/dashboard";

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
    </>
  );
};

export default Login;

Login.getLayout = (page: any) => {
  return <UserLayout page={page} />;
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
