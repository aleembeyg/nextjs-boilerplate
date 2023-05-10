import "@/styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../layout/main";
import { store, wrapper } from "@/redux/store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import Waiting from "@/components/waiting";
import { ThemeProvider } from "@mui/material";
import { theme } from "../utils/theme";

function App({ Component, pageProps }: any) {
  const [loader, setLoader] = useState(false);
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
        <title>Cheap International Calling Cards | Call Worldwide</title>
        <meta
          name="title"
          content="Cheap International Calling Cards | Call Worldwide"
        />
        <meta
          name="description"
          content="Get the cheapest international calling rates with Talk Home - purchase now to join our family of 1 million users and discover the calling card of the future."
        />
        <meta
          name="keywords"
          content="international calling cards Calling Card Talk Home"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
      <Provider store={store}>
        <SessionProvider session={pageProps.session}>
          <ThemeProvider theme={theme}>
            <ToastContainer />
            {renderWithLayout(<Component {...pageProps} />)}
          </ThemeProvider>
        </SessionProvider>
      </Provider>
    </>
  );
}

export default wrapper.withRedux(App);
