import Head from "next/head";
import { getSession, useSession } from "next-auth/react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const User = () => {
  const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>SendCredit - Profile</title>
      </Head>
      <main style={{ maxWidth: "1100px", margin: "auto" }}>
        <div className="p-3" style={{ textAlign: "center", marginTop: "50px" }}>
          <img
            src={session?.user?.image?.toString()}
            style={{ borderRadius: "100%", marginBottom: "10px" }}
          />
          <h3 style={{ fontSize: "35px", fontWeight: "bold" }}>
            {session?.user?.name}
          </h3>
          <p>{session?.user?.email}</p>
        </div>
        <Link
          className="btn btn-dark text-white"
          style={{
            width: "250px",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
          }}
          href={"/user/users"}
        >
          <BsArrowRight /> &nbsp;&nbsp;
          <p style={{ margin: 0, padding: 0 }}>Our Valued Customers</p>
        </Link>
      </main>
    </>
  );
};

export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  if (session) {
    return {
      props: { session },
    };
  } else {
    return {
      redirect: {
        destination: "/login",
        locale: context.locale,
        permanent: false,
      },
    };
  }
}

export default User;
