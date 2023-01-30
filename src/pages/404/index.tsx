import Head from "next/head";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const fourOFour = () => {
  return (
    <>
      <Head>
        <title>SendCredit - 404 Page Not Found</title>
      </Head>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "120px" }}>404</h1>
        <h5 style={{ fontSize: "25px" }}>
          Something Missing Here...&nbsp;&nbsp;
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
