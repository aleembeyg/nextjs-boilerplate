import Head from "next/head";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { useRouter } from "next/router";
const Login = ({ locale, defaultLocale }: any) => {
  const router = useRouter();
  const handleGoogleSignIn = async () => {
    signIn("google", {
      callbackUrl:
        (router.defaultLocale !== router.locale ? "/" + locale : "") + "/user",
    });
  };

  return (
    <>
      <Head>
        <title>SendCredit - Login</title>
      </Head>
      <div className="card p-4" style={{ maxWidth: "400px", margin: "auto" }}>
        <form method="post" className="needs-validation" noValidate>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              required
            />
            <small id="emailHelp" className="form-text text-muted">
              Well never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              required
            />
          </div>
          <br />
          <button
            type="submit"
            className="btn btn-success btn-block"
            style={{ width: "100%" }}
          >
            Login
          </button>
          <br />
          <br />
          <button
            type="button"
            className="btn btn-block shadow-sm"
            style={{ width: "100%", border: "1px solid #ccc" }}
            onClick={handleGoogleSignIn}
          >
            Signin with Google&nbsp;
            <FcGoogle />
          </button>
          <br />
          <br />
          <button
            type="button"
            className="btn btn-block shadow-sm"
            style={{ width: "100%", border: "1px solid #ccc" }}
          >
            Signin with Github&nbsp;
            <BsGithub />
          </button>
        </form>
        <br />
        <p className="text-muted">
          Dont have account yet?&nbsp;<Link href={"/"}>Signup</Link>
        </p>
      </div>
    </>
  );
};

export default Login;
