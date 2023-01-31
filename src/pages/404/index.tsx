import Head from "next/head";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const fourOFour = () => {
  return (
    <>
      <Head>
        <title>SendCredit - 404 Page Not Found</title>
      </Head>
      <div
        style={{
          textAlign: "center",
          height: "500px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: "120px" }}>404</h1>
        <h5 style={{ fontSize: "25px" }}>
          <p>Something Missing Here...&nbsp;&nbsp;</p>
          <Link
            className="btn btn-dark text-white"
            style={{ width: "150px", borderRadius: "20px" }}
            href={"/"}
          >
            Back To Site &nbsp;&nbsp;
            <BsArrowRight />
          </Link>
        </h5>
      </div>
    </>
  );
};

export default fourOFour;
