import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const [name, setName] = useState("mario");

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  useEffect(() => {
    fetch("http://localhost:8000/blogs") // returns a promise
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBlogs(data);
      });
  }, []); // dependency array

  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
      <button onClick={() => setName("luigi")}>change name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
