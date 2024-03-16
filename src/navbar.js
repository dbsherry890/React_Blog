import { Link } from "react-router-dom";

import { IconContext } from "react-icons";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>THE Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link
          to="/create"
          className="btn"
          // example of inline css
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          New Blog
        </Link>
        <Link to="/user:id"></Link>
      </div>
    </nav>
  );
};

export default Navbar;
