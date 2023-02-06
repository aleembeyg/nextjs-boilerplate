import Head from "next/head";
import Image from "next/image";

const ContactUs = () => {
  return (
    <>
      <Head>
        <title>MobileCredit - Contact Us</title>
      </Head>
     
        <div className="p-4">
          <div
            className="card p-5 shadow"
            style={{ textAlign: "center", maxWidth: "600px", margin: "auto", marginTop: "180px" }}
          >
            <h1 style={{ fontSize: "35px", fontWeight: "bold" }}>Contact Us</h1>
            <p>Stay Tuned With Us For More Updates</p>
          </div>
        </div>
    </>
  );
};

export default ContactUs;
