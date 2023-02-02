import Link from "next/link";
import { ReactNode, useState } from "react";
import { FormattedMessage } from "react-intl";
import styles from "@/styles/Layout.module.css";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { HiUserCircle } from "react-icons/hi";
import Image from "next/image";

type IMainProps = {
  children: ReactNode;
};

const Layout = (props: IMainProps) => {
  const router = useRouter();
  const [toggle, setToggle] = useState(false);

  const handleChangeLanguage = (lang: any) => {
    router.push(router.basePath, router.asPath, { locale: lang });
  };

  const handleToggler = () => {
    setToggle(!toggle);
  };

  const handleLogout = () => {
    signOut({
      callbackUrl:
        (router.defaultLocale !== router.locale ? "/" + router.locale : "") +
        "/login",
    });
  };
  const { data: session } = useSession();
  return (
    <div className={`container-fluid ${styles.header_FC}`}>
      <div className="bg-light fixed-top">
        <nav
          style={{ maxWidth: "1100px", margin: "auto" }}
          className="navbar navbar-expand-lg navbar-light bg-light"
        >
          <div className="container-fluid">
            <h1
              className="navbar-brand p-3"
              style={{ fontSize: "25px", fontWeight: "bold" }}
            >
              <Link
                href={"/"}
                style={{ display: "flex", alignItems: "center" }}
              >
                <FormattedMessage id="page.home.head.title" />
              </Link>
            </h1>
            <button
              type="button"
              aria-label="Menu Toggle Button"
              className="navbar-toggler"
              onClick={handleToggler}
              style={{ border: "0 solid", fontSize: "28px", boxShadow: "none" }}
            >
              <span
                className="navbar-toggler-icon"
                style={{ stroke: "#eee" }}
              ></span>
            </button>
            <div
              className={`collapse navbar-collapse${toggle ? " show" : ""}`}
              id="navbarCollapse"
            >
              <div className="navbar-nav"></div>
              <div className="navbar-nav ms-auto">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <button
                    role="button"
                    style={{
                      cursor: "pointer",
                      border: 0,
                      background: "none",
                      color: "#333",
                    }}
                    className="nav-item nav-link"
                    onClick={() => {
                      setToggle(false);
                      handleChangeLanguage("en");
                    }}
                  >
                    EN
                  </button>{" "}
                  |{" "}
                  <button
                    role="button"
                    style={{
                      cursor: "pointer",
                      border: 0,
                      background: "none",
                      color: "#333",
                    }}
                    className="nav-item nav-link"
                    onClick={() => {
                      setToggle(false);
                      handleChangeLanguage("fr");
                    }}
                  >
                    FR
                  </button>{" "}
                  |{" "}
                  <button
                    role="button"
                    style={{
                      cursor: "pointer",
                      border: 0,
                      background: "none",
                      color: "#333",
                    }}
                    className="nav-item nav-link"
                    onClick={() => {
                      setToggle(false);
                      handleChangeLanguage("ar");
                    }}
                  >
                    AR
                  </button>
                </div>
                &nbsp;
                <Link
                  href={"/contact-us"}
                  onClick={() => setToggle(false)}
                  className="nav-item nav-link"
                >
                  <FormattedMessage id="page.home.link.contactus" />
                </Link>
                &nbsp;&nbsp;
                {session == null && (
                  <Link
                    href={"/login"}
                    data-toggle="collapse"
                    className="nav-item nav-link"
                    onClick={() => setToggle(false)}
                  >
                    <FormattedMessage id="page.home.link.login" />
                  </Link>
                )}
                {session && (
                  <Link
                    href={"/user"}
                    data-toggle="collapse"
                    className="nav-item nav-link"
                    onClick={() => setToggle(false)}
                  >
                    Profile
                  </Link>
                )}
                {session && (
                  <button
                    role="button"
                    style={{
                      cursor: "pointer",
                      border: 0,
                      background: "none",
                      color: "#333",
                    }}
                    className="nav-item nav-link"
                    onClick={() => {
                      setToggle(false);
                      handleLogout();
                    }}
                  >
                    Logout
                  </button>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div
        style={{
          marginTop: "86px",
          marginBottom: "56px",
          padding: "0",
        }}
      >
        {props.children}
      </div>
      <footer
        className="bg-light fixed-bottom p-3"
        style={{ backgroundColor: "#eee" }}
      >
        <div style={{ maxWidth: "1100px", margin: "auto" }}>
          2023 SendCredit
        </div>
      </footer>
    </div>
  );
};

export default Layout;
