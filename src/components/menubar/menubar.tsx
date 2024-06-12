import { Link } from "react-router-dom";
import "./menubar.css";

function Menubar() {
  return (
    <nav className="navbar">
      <Link className="met" to="/">
        Met museum.
      </Link>

      <form className="search-bar">
        <input type="text" placeholder="Research..." />
      </form>
      <button className="advancedsearching">Advanced Search</button>
    </nav>
  );
}

export default Menubar;
