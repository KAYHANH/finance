import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/login">Login</Link> | 
      <Link to="/signup">Signup</Link> | 
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
}

export default Header;
