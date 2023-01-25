import "bootstrap/dist/css/bootstrap.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
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
  return (
    <>
      <Head>
        <title>React Boiler Plate</title>
      </Head>
      <div className="container-fluid" style={{ position: "relative" }}>
        <header>
          <nav className="navbar navbar-dark bg-dark">
            <Link href={"/"}>Home</Link>&nbsp;|&nbsp;
            <Link href={"/about"}>About Us</Link>&nbsp;|&nbsp;
            <Link href={"/contact-us"}>Contact Us</Link>&nbsp;|&nbsp;
            <Link href={"/users"}>Users</Link>
          </nav>
        </header>
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
            <div className="spinner-grow text-success" role="status">
              <span className="sr-only"></span>
            </div>
          </div>
        ) : (
          <Component {...pageProps} />
        )}
        <footer>Footer</footer>
      </div>
    </>
  );
}
