import Head from "next/head";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

const User = () => {
  const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>SendCredit - Profile</title>
      </Head>
      <main style={{ maxWidth: "1100px", margin: "auto" }}>
        <div className="p-5" style={{ textAlign: "center" }}>
          <img
            src={session?.user?.image?.toString()}
            style={{ borderRadius: "100%", marginBottom: "10px" }}
          />
          <h3 style={{ fontSize: "35px", fontWeight: "bold" }}>
            {session?.user?.name}
          </h3>
          <p>{session?.user?.email}</p>
        </div>
      </main>
    </>
  );
};

export default User;