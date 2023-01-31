import Head from "next/head";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
const Login = ({}: any) => {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [validate, setValidate] = useState(false);
  const handleGoogleSignIn = async () => {
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

  return (
    <>
      <Head>
        <title>SendCredit - Login</title>
      </Head>
      <div style={{ background: "#6A359C", height: "300px" }}></div>
      <div className="p-4" style={{ marginTop: "-250px" }}>
        <div className="p-4">
          <div
            className="card p-5 shadow-sm"
            style={{ maxWidth: "400px", margin: "auto" }}
          >
            <form method="post" className="needs-validation">
              <div className="form-group">
                <p>{loading}</p>
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  value={userName}
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={(e) => setUserName(e.target.value)}
                  required
                />
                <small id="emailHelp" className="form-text text-muted">
                  Well never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  value={password}
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <br />
              <button
                type="button"
                className={`btn btn-block text-white ${
                  validate ? "bg-success" : "bg-secondary"
                }`}
                style={{ width: "100%" }}
                onClick={handleSubmitUser}
              >
                {!loading && <div>Login</div>}
                {loading && (
                  <div
                    className="spinner-grow text-light"
                    style={{ width: "18px", height: "18px" }}
                    role="status"
                  ></div>
                )}
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
        </div>
      </div>
    </>
  );
};

export default Login;
