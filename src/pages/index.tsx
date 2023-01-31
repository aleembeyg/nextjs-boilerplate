import Head from "next/head";
import { Inter } from "@next/font/google";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
const inter = Inter({ subsets: ["latin"] });

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
      <main>
        <div
          style={{
            background: "#6A359C",
            height: "300px",
            padding: "0px 20px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              color: "#fff",
              maxWidth: "600px",
              margin: "auto",
              marginTop: "20px",
              paddingRight: "20px",
              fontSize: "40px",
            }}
          >
            Worldwide mobile recharge: send credit and data to any phone
          </h1>
        </div>
        <div className="p-4" style={{ marginTop: "-130px" }}>
          <div
            className="card p-5 shadow-sm"
            style={{ textAlign: "center", maxWidth: "600px", margin: "auto" }}
          >
            <h2 style={{ fontSize: "35px", fontWeight: "bold" }}>
              <FormattedMessage id="page.home.title" />
            </h2>
            <p>
              <FormattedMessage id="page.home.description" />
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
