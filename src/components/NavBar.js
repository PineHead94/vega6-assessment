import { useDispatch, useSelector } from "react-redux";
import { getImage } from "../redux/imageSlice";
import { useCallback, useState } from "react";
import icon from "../assets/websiteIcon.png";

function NavBar() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const { data, loading, error } = useSelector((state) => state.image);

  const search = useCallback((query) => {
    if (query) {
      let str = query.toString().toLowerCase();
      let split = str.split(" ").join("+");
      return split;
    }
  }, []);

  return (
    <div className="navbar-main-container">
      <img src={icon} alt="website-icon" className="nav-bar-icon" />
      <div>
        <input
          type="text"
          className="navbar-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="navbar-search-button"
          onClick={() => {
            dispatch(getImage(search(query)));
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default NavBar;
