import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FormattedMessage, IntlProvider } from "react-intl";
import ar from "@/lang/ar.json";
import en from "@/lang/en.json";
import fr from "@/lang/fr.json";
import Layout from "./layout";

const messages = {
  ar,
  fr,
  en,
};
function getDirection(locale: any) {
  if (locale === "ar") {
    return "rtl";
  }

  return "ltr";
}
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  const [loader, setLoader] = useState(false);
  const { locale } = useRouter();
  const localeStr: string = locale || "en";
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeStart = (url: any) => {
      setLoader(true);
    };
    const handleRouteChangeComplete = (url: any) => {
      setLoader(false);
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    // When the component unmounts, unsubscribe from the router events with the `off` method
    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router]);

  return (
    <>
      <Head>
        <title>
          <FormattedMessage id="page.home.title" />
        </title>
      </Head>
      <IntlProvider locale={localeStr} messages={Object(messages)[localeStr]}>
        <Layout>
          <div>
            {loader ? (
              <div
                style={{
                  width: "100%",
                  height: "100vh",
                  margin: "auto",
                  position: "absolute",
                  right: 0,
                  left: 0,
                  top: 0,
                  zIndex: 1000,
                  background: "rgba(0,0,0,0.2)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="spinner-grow text-disable" role="status">
                  <span className="sr-only"></span>
                </div>
              </div>
            ) : (
              <Component {...pageProps} dir={getDirection(locale)} />
            )}
          </div>
        </Layout>
      </IntlProvider>
    </>
  );
}
