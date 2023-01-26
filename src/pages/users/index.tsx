import Head from "next/head";
import { selectUsers } from "@/redux/selectors/user";
import { wrapper } from "@/redux/store";
import { getUsersRequest } from "@/services/user.service";
import { errorInfo } from "@/utils/index.utils";
import { FormattedMessage, useIntl } from "react-intl";
import { useSelector, useDispatch } from "react-redux";
import {
  getUsersListRequestFailure,
  getUsersListRequestSuccess,
} from "@/redux/actions/user";

const Users = () => {
  const usersList = useSelector(selectUsers);
  const intl = useIntl();
  //Page SEO Information
  const title = intl.formatMessage({ id: "page.users.head.title" });
  const description = intl.formatMessage({
    id: "page.users.head.meta.description",
  });

  const dispatch = useDispatch();

  const handleRefreshData = async () => {
    const res = await getUsersRequest();
    await dispatch(getUsersListRequestSuccess(res));
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div className="p-2" style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "35px", fontWeight: "bold" }}>
          <FormattedMessage id="page.users.title" />
        </h1>
      </div>
      <div className="row" style={{ maxWidth: "1100px", margin: "auto" }}>
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
  (store) => async () => {
    let users = {};
    try {
      const res = await getUsersRequest();
      users = res;
      store.dispatch(getUsersListRequestSuccess(users));
    } catch (e: any) {
      store.dispatch(getUsersListRequestFailure(errorInfo(e)));
    }

    return {
      props: { users },
    };
  }
);

export default Users;
