import { Link } from "react-router-dom";
import useFetch from "./useFetch";

const Users = () => {
  const { data, error } = useFetch("http://localhost:8000/users");
  if (error) console.log(error);
  return (
    <div className="user-list">
      {data?.map((user) => (
        <div className="user-preview" key={user.id}>
          <Link to={`/user/${user.id}`}>
            <h2>{user.id}</h2>
            <p>Written by {user.first_name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Users;
