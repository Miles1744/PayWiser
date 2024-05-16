import "./Header.css";
import Link from "next/link";

const Header = () => {
  return (
    <div className="header">
      <h1 className="logo">PayWiser</h1>
      <div className="links">
        <Link href="/">Home</Link>
        <Link href="/login">Login</Link>
        <Link href="/reset">Reset Password</Link>
      </div>
    </div>
  );
};

export default Header;
