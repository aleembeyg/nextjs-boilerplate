import Link from "next/link";
import { ReactNode } from "react";
import { FormattedMessage } from "react-intl";
import styles from "@/styles/Layout.module.css";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { HiUserCircle } from "react-icons/hi";

type IMainProps = {
  children: ReactNode;
};

const Layout = (props: IMainProps) => {
  const router = useRouter();

  const handleChangeLanguage = (lang: any) => {
    router.push(router.basePath, router.asPath, { locale: lang });
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
                <BsCreditCard2FrontFill style={{ width: "25px" }} />
                &nbsp;
                <FormattedMessage id="page.home.head.title" />
              </Link>
            </h1>
            <button
              type="button"
              className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              style={{ border: "0 solid", fontSize: "28px", boxShadow: "none" }}
            >
              <span
                className="navbar-toggler-icon"
                style={{ stroke: "#eee" }}
              ></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
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
                      handleChangeLanguage("ar");
                    }}
                  >
                    AR
                  </button>
                </div>
                &nbsp;
                <li>
                  <Link href={"/contact-us"} className="nav-item nav-link">
                    <FormattedMessage id="page.home.link.contactus" />
                  </Link>
                </li>
                &nbsp;&nbsp;
                {session == null && (
                  <Link
                    href={"/login"}
                    data-toggle="collapse"
                    className="nav-item nav-link"
                  >
                    <HiUserCircle style={{ height: "22px", width: "22px" }} />
                    &nbsp;
                    <FormattedMessage id="page.home.link.login" />
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
      <div style={{ marginTop: "86px", marginBottom: "56px", padding: "0" }}>
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
