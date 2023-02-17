import Head from "next/head";
import { getSession, useSession } from "next-auth/react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

const User = () => {
  const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>MobileCredit - Profile</title>
      </Head>
      <main style={{ maxWidth: "1100px", margin: "auto" }}>
        <div
          className="card p-3"
          style={{ maxWidth: "550px", margin: "auto", top: "120px" }}
        >
          <div className="p-3" style={{ textAlign: "center" }}>
            {session?.user?.image && (
              <Image
                src={session?.user?.image?.toString()}
                alt=""
                width={100}
                height={100}
                style={{ borderRadius: "100%", marginBottom: "10px" }}
              />
            )}
            <h3
              className="text-dark"
              style={{ fontSize: "35px", fontWeight: "bold" }}
            >
              {session?.user?.name}
            </h3>
            <p className="text-dark">{session?.user?.email}</p>
          </div>
          <Link
            style={{
              width: "250px",
              borderRadius: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
              marginBottom: "20px",
            }}
            href={"/user/users"}
          >
            <p style={{ margin: 0, padding: 0 }}>Our Valued Customers</p>
            &nbsp;&nbsp;
            <BsArrowRight />
          </Link>
        </div>
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
