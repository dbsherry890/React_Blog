import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const User = () => {
  const { id } = useParams();
  const { data: user } = useFetch("http://localhost:8000/users/" + id);

  return <div className="user-home">{user && <p>{user.first_name}</p>}</div>;
};

export default User;
