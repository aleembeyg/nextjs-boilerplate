import "@/styles/globals.scss";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IntlProvider } from "react-intl";
import ar from "@/lang/ar.json";
import en from "@/lang/en.json";
import fr from "@/lang/fr.json";
import Layout from "../layout/main";
import { store, wrapper } from "@/redux/store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import Waiting from "@/components/waiting";

const messages = {
  ar,
  fr,
  en,
};

function App({ Component, pageProps }: any) {
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
  const renderWithLayout = loader
    ? function (page: any) {
        return (
          <Layout>
            <Waiting />
          </Layout>
        );
      }
    : Component.getLayout ||
      function (page: any) {
        return <Layout>{page}</Layout>;
      };
  return (
    <>
      <Head>
        <meta name="description" content="TalkHome" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IntlProvider locale={localeStr} messages={Object(messages)[localeStr]}>
        <Provider store={store}>
          <SessionProvider session={pageProps.session}>
            <ToastContainer />
            {renderWithLayout(<Component {...pageProps} />)}
          </SessionProvider>
        </Provider>
      </IntlProvider>
    </>
  );
}

export default wrapper.withRedux(App);
