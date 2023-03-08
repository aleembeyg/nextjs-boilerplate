import styles from "./home.module.scss";
import Head from "next/head";
import Topup from "@/components/topup";
import { Card } from "@mui/material";
import { FormattedMessage, useIntl } from "react-intl";
import CardsSlider from "@/components/cardsSlider";
import Cards from "@/components/cards";

export default function Home() {
  const intl = useIntl();

  const title = intl.formatMessage({ id: "page.home.head.title" });
  const description = intl.formatMessage({
    id: "page.home.head.meta.description",
  });

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <section className={styles.homeSection}>
        <Card className={styles.cardPanel} sx={{ boxShadow: 3 }}>
          <h1 className="heading">
            <FormattedMessage id="page.home.title" />
          </h1>
          <h2>
            <FormattedMessage id="page.home.description" />
          </h2>
          <Topup />
        </Card>
      </section>
      <section>
        <div className={`${styles.packages} slider-packages`}>
          <div className="full-bg right"></div>
          <Cards />
        </div>
      </section>
    </>
  );
}
