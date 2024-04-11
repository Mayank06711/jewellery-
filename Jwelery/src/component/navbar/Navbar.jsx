import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="container">
      <div className="nav-links">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/Products">Products</a></li>
          <li><a href="/Contact">Contact</a></li>
          <li><a href="/Review">Review</a></li>
          <li><a href="/About">About</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
