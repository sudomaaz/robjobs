import React, { useState } from "react";
import { useLocation, useHistory } from "react-router";

const Search = () => {
  const location = useLocation();
  const history = useHistory();
  const [search, setSearch] = useState("");
  const callSearch = () => {
    const url = location.pathname + "?q=" + search;
    history.push(url);
  };
  return (
    <div className="row mt-5">
      <div className="col-2"></div>
      <div className="col-8">
        <form>
          <div className="form-group row">
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              className="form-control-lg"
              placeholder="search by either job title or description or company or location"
            />
          </div>
        </form>
      </div>
      <div className="col-2">
        <button onClick={callSearch} className="btn btn-primary">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
