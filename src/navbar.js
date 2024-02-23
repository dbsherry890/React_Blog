const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>THE Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a
          href="/create"
          // example of inline css
          // style={{
          //   color: "white",
          //   backgroundColor: "#f1356d",
          //   borderRadius: "8px",
          // }}
        >
          New Blog
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
