import Head from "next/head";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
const Login = () => {
  const handleGoogleSignIn = async () => {
    signIn("google", { callbackUrl: "/user" });
  };

  return (
    <>
      <Head>
        <title>SendCredit - Login</title>
      </Head>
      <div className="card p-4" style={{ maxWidth: "400px", margin: "auto" }}>
        <form className="needs-validation" novalidate>
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
              We'll never share your email with anyone else.
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
            className="btn btn-primary btn-block"
            style={{ width: "100%" }}
            onClick={handleGoogleSignIn}
          >
            Signin with Google
          </button>
          <br />
          <br />
          <button
            type="button"
            className="btn btn-secondary btn-block"
            style={{ width: "100%" }}
          >
            Signin with Github
          </button>
        </form>
        <br />
        <p className="text-muted">
          Don't have account yet?&nbsp;<Link href={"/"}>Signup</Link>
        </p>
      </div>
    </>
  );
};

export default Login;
