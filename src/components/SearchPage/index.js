import React from "react";
// get materialize imports
import "materialize-css/dist/css/materialize.min.css";

function SearchPage(props) {
  console.log(props.employee);
  return (
    <div className="container">
      <div className="row">
        <div className="col s6 offset-s3">
          <input
            value={props.search}
            onChange={props.handleInputChange}
            name="employee"
            lost="employees"
            className="form-control form-control-sm ml-3 w-75"
            type="Search"
            placeholder="Enter your employee's name"
            aria-label="Search"
          />
          <datalist id="employee">
            {props.employee.map((emp) => (
              <option
                value={emp.name.first + " " + emp.name.last}
                key={emp.name.first}
              />
            ))}
          </datalist>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
