import "./Header.css";
//for login and the reset
import { Link } from 'next/link';

const Header = () => {
  return (
    <div className="header">
      <h1 className="logo">PayWiser</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/login">Login</a>
        <a href="/reset">Reset Password</a>
      </div>
    </div>
  );
};

export default Header;
