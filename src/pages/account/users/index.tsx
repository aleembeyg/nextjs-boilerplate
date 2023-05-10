import Head from "next/head";
import {
  selectError,
  selectLoadingStatus,
  selectUsers,
} from "@/redux/selectors/user";
import { wrapper } from "@/redux/store";
import { getUsersRequest } from "@/services/user.service";
import { APIStatus, errorInfo } from "@/utils/index.utils";
import { useSelector, useDispatch } from "react-redux";
import {
  getUsersListRequest,
  getUsersListRequestFailure,
  getUsersListRequestSuccess,
} from "@/redux/actions/user";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { getSession } from "next-auth/react";
import { HiOutlineRefresh } from "react-icons/hi";
import Loading from "@/components/loading";

const Users = () => {
  const usersList = useSelector(selectUsers);
  const errorMessage = useSelector(selectError);
  const loadingData = useSelector(selectLoadingStatus);

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
      <div className="card" style={{ maxWidth: "1100px", margin: "auto", top: "100px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
            position: "relative",
            maxWidth: "1100px",
            margin: "auto",
            padding: "10px",
            boxSizing: "border-box",
          }}
        >
          {loadingData !== APIStatus.pending && (
            <button
              aria-label="Refresh Users List"
              className="btn btn-success"
              onClick={handleRefreshData}
              style={{ position: "absolute", right: "10px" }}
            >
              <HiOutlineRefresh style={{ width: "25px", height: "25px" }} />
            </button>
          )}
          <div className="p-2" style={{ textAlign: "center" }}>
            <h1 style={{ fontSize: "30px", fontWeight: "bold" }}>
              Users
            </h1>
          </div>
        </div>
        <div
          className="row"
          style={{ maxWidth: "1100px", margin: "auto", minWidth: "200px" }}
        >
          {loadingData == APIStatus.pending && <Loading />}
          {loadingData != APIStatus.pending &&
            usersList &&
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
