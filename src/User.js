import { Link } from "react-router-dom";

const User = ({ users, title }) => {
  //could just have (props) and the commented out code below. This way is called 'destructuring'
  // const blogs = props.blogs;
  // const title = props.title; // passed in as argument of BlogList on Home.js
  // console.log(blogs);

  return (
    <div className="user-home">
      <h2>{title}</h2>
      {users.map((user) => (
        <div className="blog-preview" key={user.id}>
          <Link to={`/user/${user.id}`}>
            <h2>{user.title}</h2>
          </Link>

          {/* <button onClick={() => handleDelete(blog.id)}>delete blog</button> */}
        </div>
      ))}
    </div>
  );
};

export default User;
