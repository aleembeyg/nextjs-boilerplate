import { Box } from "@mui/system";
import Link from "next/link";
import { FormattedMessage } from "react-intl";

const UserLayout = ({ page }: any) => {
  return (
    <div
      style={{
        maxWidth: "1024px",
        width: "100%",
        margin: "auto",
        padding: "20px",
      }}
    >
      {" "}
      <Link
        href={"/"}
        aria-label="Talk Home Logo"
        className="logo-panel bold-text"
        style={{
          width: "100px",
          textAlign: "center",
          background:
            "linear-gradient(89.7deg, rgb(0, 32, 95) 2.8%, rgb(132, 53, 142) 97.8%)",
          color: "#fff",
          borderRadius: "5px",
          padding: "8px",
          position: "relative",
        }}
      >
        <FormattedMessage id="page.home.head.title" />
        <Box
          style={{
            position: "absolute",
            zIndex: "-1",
            left: "0",
            right: "0",
          }}
        >
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </Box>
      </Link>
      <div>{page}</div>
    </div>
  );
};

export default UserLayout;
