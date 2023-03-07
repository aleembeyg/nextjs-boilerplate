import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";
import { Button, Container, Drawer, IconButton } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { IoMdMenu } from "react-icons/io";
import styles from "./index.module.scss";
import { Box } from "@mui/system";

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
      <AppBar color="inherit" style={{ boxShadow: "none" }}>
        <Toolbar disableGutters className="fixed-width-panel header-panel">
          <Link
            href={"/"}
            aria-label="Talk Home Logo"
            className="logo-panel bold-text"
            style={{
              textAlign: "center",
              background:
                "linear-gradient(89.7deg, rgb(0, 32, 95) 2.8%, rgb(132, 53, 142) 97.8%)",
              color: "#fff",
              borderRadius: "5px",
              padding: "8px",
              position: "relative",
            }}
          >
            <FormattedMessage id="page.home.head.title" />
            <Box
              style={{
                position: "absolute",
                zIndex: "-1",
                left: "0",
                right: "0",
              }}
            >
              <div className="lds-ripple">
                <div></div>
                <div></div>
              </div>
            </Box>
          </Link>
          <List className="nav-bar-menu-list">
            <ListItem>
              <button
                role="button"
                title="English"
                aria-label="Press This Button For English"
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
            <ListItem>
              <button
                role="button"
                title="French"
                aria-label="Press This Button For French"
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
            <ListItem>
              <button
                role="button"
                title="Arabic"
                aria-label="Press This Button For Arabic"
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
                <Button
                  disableRipple
                  style={{
                    padding: "0px",
                    textTransform: "inherit",
                    fontSize: "16px",
                    color: "inherit",
                    marginTop: "-4px",
                  }}
                  onClick={() => handleLogout()}
                >
                  <FormattedMessage id="page.home.link.logout" />
                </Button>
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
        <Button
          size="small"
          aria-label="close menu button"
          onClick={() => setToggle(false)}
          style={{ fontSize: "20px", color: "#000", textAlign: "right" }}
          variant="text"
        >
          X
        </Button>
        <p
          style={{
            fontSize: "25px",
            textAlign: "center",
            background: "indigo",
            maxWidth: "250px",
            color: "#fff",
            margin: "20px auto 0px auto",
            borderRadius: "5px",
            padding: "10px",
          }}
        >
          TalkHome
        </p>
        <List
          className="nav-bar-menu-list-mobile"
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <ListItem disableGutters disablePadding>
            <List sx={{ display: "flex" }} disablePadding>
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
                onClick={() => setToggle(false)}
              >
                <FormattedMessage id="page.home.link.login" />
              </Link>
            </ListItem>
          )}
          {session && (
            <ListItem>
              <Button
                disableRipple
                style={{
                  padding: "0px",
                  textTransform: "inherit",
                  fontSize: "16px",
                  color: "inherit",
                  marginTop: "-4px",
                }}
                onClick={() => handleLogout()}
              >
                <FormattedMessage id="page.home.link.logout" />
              </Button>
            </ListItem>
          )}
        </List>
      </Drawer>
      <div className="main-container">
        {!hideHeader && (
          <div className={styles.bannerBG}>
            <div className="full-bg left"></div>
            <div className={styles.title}>
              Switch To <br />
              Rechargeable Calling Cards
              <br />
              Click to buy and we&apos;ll send your PIN
            </div>
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
