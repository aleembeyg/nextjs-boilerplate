const Users = ({ users }: any) => {
  return (
    <div className="row">
      {users &&
        users.results.map((item: any, index: number) => (
          <div data-id={item.id} key={index} className="p-2 col-sm-4">
            <div className="card">
              <img
                className="card-img-left"
                src={item.picture.large}
                style={{ width: "100px", height: "100px"}}
                alt="Card image cap"
              />
              <div className="card-body">{item.name.first}</div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Users;

export async function getServerSideProps() {
  const res = await fetch("https://randomuser.me/api/?results=6&gneder=female");
  const users = await res.json();
  return {
    props: {
      users,
    },
  };
}
