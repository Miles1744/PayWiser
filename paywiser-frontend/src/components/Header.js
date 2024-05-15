import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1 className="logo">Movie Picker</h1>
      <div className="links">
        <a href="/">Movie Catalog</a>
        <a href="/movie">Pick Movie</a>
        <a href="/add">Add a Movie</a>
      </div>
    </div>
  );
};

export default Header;
