import Link from "next/link";
import { ReactNode } from "react";
import { FormattedMessage } from "react-intl";
import styles from "@/styles/Layout.module.css";
type IMainProps = {
  children: ReactNode;
};
const Layout = (props: IMainProps) => {
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
              <a rel="alternate" href={`../`} hrefLang="x-default">
                EN
              </a>{" "}
              |{" "}
              <a rel="alternate" href={`../fr`} hrefLang="fr">
                FR
              </a>{" "}
              |{" "}
              <a rel="alternate" href={`../ar`} hrefLang="ar">
                AR
              </a>
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
