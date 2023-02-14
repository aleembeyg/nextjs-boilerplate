import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { Container, Drawer, IconButton } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { IoMdMenu } from "react-icons/io";
import styles from "./index.module.css";

type IMainProps = {
  children: ReactNode;
};

const Layout = (props: IMainProps) => {
  const router = useRouter();
  const [toggle, setToggle] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);

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

  useEffect(() => {
    const handleRouteChangeComplete = (url: any) => {
      if (url.indexOf("login") !== -1 || url.indexOf("user") !== -1) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }
    };
    handleRouteChangeComplete(router.pathname);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    // When the component unmounts, unsubscribe from the router events with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router]);

  const { data: session } = useSession();
  return (
    <Container disableGutters maxWidth={false}>
      <AppBar color="inherit">
        <Toolbar disableGutters className="fixed-width-panel header-panel">
          <Link href={"/"} className="logo-panel bold-text">
            <FormattedMessage id="page.home.head.title" />
          </Link>
          <List className="nav-bar-menu-list">
            <ListItem disableGutters disablePadding>
              <List className="nav-bar-menu-list" disablePadding>
                <ListItem>
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
                  </button>
                </ListItem>
                <ListItem disableGutters>
                  <Divider />
                </ListItem>
                <ListItem>
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
                  </button>
                </ListItem>
                <ListItem disableGutters>
                  <Divider />
                </ListItem>
                <ListItem>
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
                </ListItem>
              </List>
            </ListItem>
            <ListItem>
              <Link
                href={"/contact-us"}
                onClick={() => setToggle(false)}
                className="nav-item nav-link"
              >
                <FormattedMessage id="page.home.link.contactus" />
              </Link>
            </ListItem>
            {session == null && (
              <ListItem>
                <Link
                  href={"/login"}
                  data-toggle="collapse"
                  className="nav-item nav-link"
                >
                  <FormattedMessage id="page.home.link.login" />
                </Link>
              </ListItem>
            )}
            {session && (
              <ListItem>
                <Link
                  href={"/"}
                  data-toggle="collapse"
                  className="nav-item nav-link"
                  onClick={() => handleLogout()}
                >
                  <FormattedMessage id="page.home.link.logout" />
                </Link>
              </ListItem>
            )}
          </List>
          <IconButton
            aria-label="Menu Button"
            onClick={() => setToggle(true)}
            sx={{ display: { md: "none" } }}
          >
            <IoMdMenu className="menu-button-size" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer open={toggle}>
        <List className="nav-bar-menu-list-mobile">
          <ListItem>
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
            </button>
          </ListItem>
          <ListItem disableGutters>
            <Divider />
          </ListItem>
          <ListItem>
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
            </button>
          </ListItem>
          <ListItem disableGutters>
            <Divider />
          </ListItem>
          <ListItem>
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
          </ListItem>
          <ListItem>
            <Link
              href={"/contact-us"}
              onClick={() => setToggle(false)}
              className="nav-item nav-link"
            >
              <FormattedMessage id="page.home.link.contactus" />
            </Link>
          </ListItem>
          <ListItem>
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
          </ListItem>
        </List>
      </Drawer>
      <div className="main-container">
        {!hideHeader && (
          <div
            style={{
              height: "300px",
              padding: "0px 20px",
              display: "flex",
              alignItems: "center",
              backgroundColor: "#4c0380",
            }}
          >
            <h2 className={styles.title}>
              Switch To <br />
              Rechargeable Calling Cards
              <br />
              Click to buy and we&apos;ll send your PIN
            </h2>
          </div>
        )}
        {props.children}
      </div>
      <footer className="footer-panel">
        <div className="fixed-width-panel">2023 TalkHome Mobile</div>
      </footer>
    </Container>
  );
};

export default Layout;
