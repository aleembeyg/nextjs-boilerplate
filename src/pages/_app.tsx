import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IntlProvider } from "react-intl";
import ar from "@/lang/ar.json";
import en from "@/lang/en.json";
import fr from "@/lang/fr.json";
import Layout from "../layout";
import { store, wrapper } from "@/redux/store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";

const messages = {
  ar,
  fr,
  en,
};

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle");
  }, []);

  const [loader, setLoader] = useState(false);
  const { locale } = useRouter();
  const router = useRouter();
  const localeStr: string = locale || "en";

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

  useEffect(() => {
    let dir = router.locale == "ar" ? "rtl" : "ltr";
    let lang = router.locale == "ar" ? "ar" : router.locale;
    const doc: any = document;
    if (doc) {
      doc.querySelector("html").setAttribute("dir", dir);
      doc.querySelector("html").setAttribute("lang", lang);
    }
  }, [router.locale]);
  return (
    <>
      <Head>
        <meta name="description" content="Mobile Credit" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IntlProvider locale={localeStr} messages={Object(messages)[localeStr]}>
        <Provider store={store}>
          <SessionProvider session={pageProps.session}>
            <ToastContainer />
            <Layout>
              {loader ? (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    margin: "auto",
                    position: "absolute",
                    right: 0,
                    left: 0,
                    top: 0,
                    zIndex: 1000,
                    background: "rgba(0,0,0,0)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    className="spinner-grow text-disable"
                    role="status"
                  ></div>
                </div>
              ) : (
                <div style={{ position: "relative" }}>
                  <div
                    style={{
                      position: "absolute",
                      background:
                        "#fff url(/images/how-to-buy-banner.jpg) 0 0 no-repeat",
                      backgroundAttachment: "scroll",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "300px",
                      top: 0,
                      width: "100%",
                      backfaceVisibility: "hidden",
                      zIndex: "-1"
                    }}
                  >
                  </div>
                  <Component {...pageProps} />
                </div>
              )}
            </Layout>
          </SessionProvider>
        </Provider>
      </IntlProvider>
    </>
  );
}

export default wrapper.withRedux(App);
