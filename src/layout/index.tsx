import Link from "next/link";
import { ReactNode } from "react";
import { FormattedMessage } from "react-intl";
import styles from "@/styles/Layout.module.css";
import { useRouter } from "next/router";
type IMainProps = {
  children: ReactNode;
};
const Layout = (props: IMainProps) => {
  const router = useRouter();
  const handleChangeLanguage = (lang: any) => {
    router.push(router.basePath, router.asPath, { locale: lang });

    router.events.on("routeChangeComplete", () => {
      router.reload();
    });
  };
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
              minWidth: "250px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>
              <span
                style={{ cursor: "pointer" }}
                onClick={() => {
                  handleChangeLanguage("en");
                }}
              >
                EN
              </span>{" "}
              |{" "}
              <span
                style={{ cursor: "pointer" }}
                onClick={() => {
                  handleChangeLanguage("fr");
                }}
              >
                FR
              </span>{" "}
              |{" "}
              <span
                style={{ cursor: "pointer" }}
                onClick={() => {
                  handleChangeLanguage("ar");
                }}
              >
                AR
              </span>
            </span>
            <Link href={"/contact-us"}>
              <FormattedMessage id="page.home.link.contactus" />
            </Link>
            <Link href={"/users"}>
              <FormattedMessage id="page.home.link.users" />
            </Link>
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
