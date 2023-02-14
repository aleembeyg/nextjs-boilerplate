import { Card } from "@mui/material";
import Head from "next/head";
import styles from "./index.module.css";

const ContactUs = () => {
  return (
    <>
      <Head>
        <title>MobileCredit - Contact Us</title>
      </Head>
      <section className={styles.contactSection}>
        <Card className={styles.cardPanel} sx={{ boxShadow: 3 }}>
          <h1 className="heading">Contact Us</h1>
          <h3>Stay Tuned With Us For More Updates</h3>
        </Card>
      </section>
    </>
  );
};

export default ContactUs;
