import styles from "./home.module.css";
import Head from "next/head";
import { useRouter } from "next/router";
import Topup from "@/components/topup";
import { Card } from "@mui/material";
import { FormattedMessage, useIntl } from "react-intl";

export default function Home() {
  const { locales } = useRouter();

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
          <h3>
            <FormattedMessage id="page.home.description" />
          </h3>
        </Card>
      </section>
    </>
  );
}
