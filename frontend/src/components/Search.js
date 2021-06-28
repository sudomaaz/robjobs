import React from "react";

const Search = () => {
  return (
    <div className="row mt-5">
      <div className="col-2"></div>
      <div className="col-8">
        <form>
          <div className="form-group row">
            <input
              type="text"
              className="form-control-lg"
              placeholder="search by job title,company,location"
            />
          </div>
        </form>
      </div>
      <div className="col-2">
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
