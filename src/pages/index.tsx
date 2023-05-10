import styles from "./index.module.scss";
import TrustPolitRating from "@/components/trustpolitRating";
import OptimizeImage from "@/components/optimizeImage";
import { Button, Container, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <section className={styles.sectionContainer}>
        <Container>
          <Grid container className={styles.homeSection}>
            <Grid item xs={12} md={5} lg={4}>
              <div className={styles.ratingPanel}>
                <TrustPolitRating rating={4.6} />
              </div>
              <Typography variant="h1" component="h1">
                International Calling Cards
              </Typography>
              <Typography variant="h2" component="h2">
                100M+ international calls since 1996 & counting. Buy a Talk Home
                calling card today.
              </Typography>
              <Button
                className={styles.btnBuyCard}
                variant="contained"
                color="secondary"
                onClick={() => router.push("/login")}
              >
                Buy Card
              </Button>
            </Grid>
            <Grid item xs={12} md={7} lg={8} className={styles.bannerImage}>
              <OptimizeImage src="/images/MockUp_Banner.png" alt="" />
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className={styles.topupSection}></section>
      <section className={styles.cardsSection}></section>
    </>
  );
}
