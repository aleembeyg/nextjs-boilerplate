import Link from "next/link";
import { ReactNode } from "react";
import { FormattedMessage } from "react-intl";
import styles from "@/styles/Layout.module.css";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";

type IMainProps = {
  children: ReactNode;
};

const Layout = (props: IMainProps) => {
  const router = useRouter();
  const handleChangeLanguage = (lang: any) => {
    router.push(router.basePath, router.asPath, { locale: lang });
  };
  const handleLogout = () => {
    signOut({ callbackUrl: "/login" });
  };
  const { data: session } = useSession();
  return (
    <div
      className="container-fluid"
      style={{
        position: "relative",
        padding: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "100vh",
      }}
    >
      <header style={{ backgroundColor: "#eee" }}>
        <div className={styles.header}>
          <h1 className="p-3" style={{ fontSize: "25px", fontWeight: "bold" }}>
            <Link href={"/"}>
              <FormattedMessage id="page.home.head.title" />
            </Link>
          </h1>
          <nav
            style={{
              minWidth: "310px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>
              <button
                role="button"
                style={{ cursor: "pointer", border: 0 }}
                onClick={() => {
                  handleChangeLanguage("en");
                }}
              >
                EN
              </button>{" "}
              |{" "}
              <button
                role="button"
                style={{ cursor: "pointer", border: 0 }}
                onClick={() => {
                  handleChangeLanguage("fr");
                }}
              >
                FR
              </button>{" "}
              |{" "}
              <button
                role="button"
                style={{ cursor: "pointer", border: 0 }}
                onClick={() => {
                  handleChangeLanguage("ar");
                }}
              >
                AR
              </button>
            </span>
            &nbsp;
            <Link href={"/contact-us"}>
              <FormattedMessage id="page.home.link.contactus" />
            </Link>
            &nbsp;&nbsp;
            <Link href={"/users"}>
              <FormattedMessage id="page.home.link.users" />
            </Link>
            &nbsp;&nbsp;
            {session == null && (
              <Link href={"/login"}>
                <FormattedMessage id="page.home.link.login" />
              </Link>
            )}
            {session && (
              <button
                role="button"
                style={{ cursor: "pointer", border: 0 }}
                onClick={() => {
                  handleLogout();
                }}
              >
                Logout
              </button>
            )}
          </nav>
        </div>
      </header>
      <div>{props.children}</div>
      <footer className="p-3" style={{ backgroundColor: "#eee" }}>
        <div style={{ maxWidth: "1100px", margin: "auto" }}>
          2023 SendCredit
        </div>
      </footer>
    </div>
  );
};

export default Layout;
