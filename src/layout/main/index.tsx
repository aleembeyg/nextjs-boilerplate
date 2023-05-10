import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";
import Header from "./header";

type IMainProps = {
  children: ReactNode;
};

const Layout = (props: IMainProps) => {
  const router = useRouter();

  const [showWhiteHeader, setShowWhiteHeader] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);

  const handleLogout = () => {
    signOut({
      callbackUrl:
        (router.defaultLocale !== router.locale ? "/" + router.locale : "") +
        "/login",
    });
  };

  useEffect(() => {
    const handleRouteChangeComplete = (url: any) => {
      if (router.pathname.length > 1) {
        setShowWhiteHeader(true);
      } else {
        setShowWhiteHeader(false);
      }
    };
    handleRouteChangeComplete(router.pathname);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    // When the component unmounts, unsubscribe from the router events with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router]);

  const { data: session } = useSession();

  return (
    <div>
      <Header whitePanel={showWhiteHeader} />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
