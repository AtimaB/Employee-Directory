import React from "react";
// get materialize imports
import "materialize-css/dist/css/materialize.min.css";

function SearchPage(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col s6 offset-s3 z-depth-3" id="search">
          <input
            value={props.search}
            onChange={props.handleInputChange}
            name="employee"
            lost="employees"
            className="form-control form-control-sm ml-3 w-75"
            type="text"
            placeholder="Search employee's name here..."
          />
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
