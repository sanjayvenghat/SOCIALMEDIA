import { Link } from "react-router-dom";
const Search = ({ search }) => {
  return (
    <div className="search">
      <input
        className="texer"
        type="text"
        placeholder="search"
        onChange={(e) => search(e.target.value)}
      ></input>
      <div className="about">
        <Link className="abt" to="/">
          Home
        </Link>
        <Link className="abt" to="/post">
          Post
        </Link>
        <Link className="abt" to="/about">
          About
        </Link>
      </div>
    </div>
  );
};

export default Search;
