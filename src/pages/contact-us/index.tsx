import Head from "next/head";

const ContactUs = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <main style={{ maxWidth: "1100px", margin: "auto" }}>
        <div className="p-5" style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "35px", fontWeight: "bold" }}>
            Contact Us
          </h1>
          <p>Stay Tuned With Us For More Updates</p>
        </div>
      </main>
    </>
  );
};

export default ContactUs;
