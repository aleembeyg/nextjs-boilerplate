import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <div
          id={"appLoadingWindow"}
          style={{
            color: "black",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            position: "absolute",
            zIndex: "10000",
            fontSize: "25px",
            fontWeight: "bold",
          }}
        >
          SendCredit
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
