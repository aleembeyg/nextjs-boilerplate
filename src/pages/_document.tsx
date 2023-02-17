import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="shortcut icon"
          href="/icon-192x192.png"
          type="image/x-icon"
        />
        <link rel="apple-touch-icon" href="/icon-256x256.png" />
        <meta name="theme-color" content="#4c0380" />
        <link rel="manifest" href="/manifest.json" />
        <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
