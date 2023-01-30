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
        <title>{[process.env.customKey]}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ maxWidth: "1100px", margin: "auto" }}>
        <div className="p-5" style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "35px", fontWeight: "bold" }}>
            <FormattedMessage id="page.home.title" />
          </h1>
          <p>
            <FormattedMessage id="page.home.description" />
          </p>
        </div>
      </main>
    </>
  );
}
