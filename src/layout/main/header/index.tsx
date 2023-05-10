import { Button, Container, Drawer } from "@mui/material";
import styles from "./index.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import OptimizeImage from "@/components/optimizeImage";
import { SlMenu } from "react-icons/sl";
import { MdLogin } from "react-icons/md";

const Header = (props: any) => {
  const [showDrawer, setShowDrawer] = useState(false);

  useEffect(() => {
    window.onscroll = (e) => {
      if (document.documentElement.scrollTop > 80) {
        document.getElementById("headerPanel")?.classList.add("fixed-panel");
      } else {
        document.getElementById("headerPanel")?.classList.remove("fixed-panel");
      }
    };
  }, []);

  const router = useRouter();

  return (
    <header id="headerPanel">
      <div className={styles.headerContainer + (props.whitePanel ? " " + styles.fixePanel : "")}>
        <Container className={styles.container} maxWidth="xl">
          <Link href="/" className={styles.logoPanel}>
            <OptimizeImage src={"/images/talk-home-logo.png"} />
            <div>
              <p className={styles.name}>TALK HOME</p>
              <p className={styles.since}>Since 1996</p>
            </div>
          </Link>
          <div className={styles.linkPanel}>
            <Link href="/">Buy Cards</Link>
            <Link href="/contactuscallingcards">Recharge</Link>
            <Link href="/contactuscallingcards">Points</Link>
            <Link href="/contactuscallingcards">Rates</Link>
            <div>
              <Button
                className={styles.login}
                variant="outlined"
                onClick={() => router.push("/login")}
              >
                Login
              </Button>
              <Button
                className={styles.register}
                variant="contained"
                onClick={() => router.push("/login")}
              >
                Register
              </Button>
            </div>
          </div>
          <div className={styles.menuLinks}>
            <Link href="/login" className={styles.loginLink}>
              <MdLogin />
              Login
            </Link>
            <Button color="secondary" onClick={() => setShowDrawer(true)} className={styles.menuBtn}>
              <SlMenu />
            </Button>
          </div>
          <Drawer
          sx={{ md: {display: 'none'}}}
            open={showDrawer}
            onClose={() => setShowDrawer(false)}
          ></Drawer>
        </Container>
      </div>
    </header>
  );
};

export default Header;
