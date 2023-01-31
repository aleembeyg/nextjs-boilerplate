import Head from "next/head";
import Image from "next/image";

const ContactUs = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <main style={{ margin: "auto" }}>
        <div
          style={{
            background: "#6A359C",
            height: "300px",
            padding: "0px 20px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              color: "#fff",
              maxWidth: "600px",
              margin: "auto",
              marginTop: "20px",
              paddingRight: "20px",
              fontSize: "40px",
            }}
          >
            Worldwide mobile recharge: send credit and data to any phone
          </h1>
        </div>
        <div className="p-4" style={{ marginTop: "-130px" }}>
          <div
            className="card p-5 shadow"
            style={{ textAlign: "center", maxWidth: "600px", margin: "auto" }}
          >
            <h1 style={{ fontSize: "35px", fontWeight: "bold" }}>Contact Us</h1>
            <p>Stay Tuned With Us For More Updates</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactUs;
