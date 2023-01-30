import Head from "next/head";
import {
  selectError,
  selectLoadingStatus,
  selectUsers,
} from "@/redux/selectors/user";
import { wrapper } from "@/redux/store";
import { getUsersRequest } from "@/services/user.service";
import { APIStatus, errorInfo } from "@/utils/index.utils";
import { FormattedMessage, useIntl } from "react-intl";
import { useSelector, useDispatch } from "react-redux";
import {
  getUsersListRequest,
  getUsersListRequestFailure,
  getUsersListRequestSuccess,
} from "@/redux/actions/user";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { getSession } from "next-auth/react";

const Users = () => {
  const usersList = useSelector(selectUsers);
  const errorMessage = useSelector(selectError);
  const loadingData = useSelector(selectLoadingStatus);
  const intl = useIntl();
  //Page SEO Information
  const title = intl.formatMessage({ id: "page.users.head.title" });
  const description = intl.formatMessage({
    id: "page.users.head.meta.description",
  });

  const dispatch = useDispatch();

  const handleRefreshData = async () => {
    dispatch(getUsersListRequest());
  };

  useEffect(() => {
    dispatch(getUsersListRequestSuccess(usersList));
  }, []);

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
    }
  }, [errorMessage]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {loadingData !== APIStatus.pending && (
          <button className="btn btn-primary" onClick={handleRefreshData}>
            Update Users
          </button>
        )}
        <div className="p-2" style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "35px", fontWeight: "bold" }}>
            <FormattedMessage id="page.users.title" />
          </h1>
        </div>
      </div>
      <div
        className="row"
        style={{ maxWidth: "1100px", margin: "auto", minWidth: "200px" }}
      >
        {loadingData === APIStatus.pending && (
          <div
            style={{
              height: "450px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="spinner-grow text-disable" role="status">
              <span className="sr-only"></span>
            </div>
          </div>
        )}
        {usersList &&
          usersList.results &&
          usersList.results.map((item: any, index: number) => (
            <div data-id={item.id} key={index} className="p-2 col-sm-3">
              <div className="card">
                <img
                  className="card-img-left"
                  src={item.picture.large}
                  style={{ width: "100%", height: "auto" }}
                  alt="Card image cap"
                />
                <div className="card-body">
                  {item.name.first}
                  <div>
                    <strong>Email:</strong>
                    {item.email}
                  </div>
                  <div>
                    <strong>Phone:</strong>
                    {item.phone}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context: any) => {
    let users = {};
    const session = await getSession(context);
    try {
      const res = await getUsersRequest();
      users = res;
      store.dispatch(getUsersListRequestSuccess(users));
    } catch (e: any) {
      store.dispatch(getUsersListRequestFailure(errorInfo(e)));
    }
    if (session) {
      return {
        props: { users },
      };
    } else {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
        props: { users },
      };
    }
  }
);

export default Users;
