import React, { useContext } from "react";
// get materialize imports
import "materialize-css/dist/css/materialize.min.css";
// get fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import your icons
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchPage(props) {
  // const context = useContext(DataContext);
  return (
    <div className="container">
      <div className="row">
        <div className="col s6 offset-s3">
          <input
            className="form-control form-control-sm ml-3 w-75"
            type="Search"
            placeholder="Employee Name"
            aria-label="Search"
          />

          <button
            class="btn waves-effect waves-light col s6 offset-s3 "
            type="submit"
            name="action"
          >
            <FontAwesomeIcon icon={faSearch} /> Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
