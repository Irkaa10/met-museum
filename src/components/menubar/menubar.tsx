import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./menubar.css";

function Menubar() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search/${searchQuery}`);
  };

  return (
    <nav className="navbar">
      <Link className="met" to="/">
        Met museum.
      </Link>

      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Research..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>
      <button className="advancedsearching">Advanced Search</button>
    </nav>
  );
}

export default Menubar;
