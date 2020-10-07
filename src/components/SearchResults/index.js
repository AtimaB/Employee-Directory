import React from "react";
import "materialize-css/dist/css/materialize.min.css";
// get fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import your icons
import {
  faEnvelope,
  faPhone,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";

function SearchResults(props) {
  function formatDate(date) {
    const dateArray = date.split("-");
    const year = dateArray[0];
    const month = dateArray[1];
    const dayArray = dateArray[2].split("T");
    const day = dayArray[0];
    const formattedDate = [month, day, year].join("-");
    return formattedDate;
  }
  return (
    <div className="row">
      <div className="col s12 m10 l10 offset-l1">
        <table className="centered responsive-table striped z-depth-3">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Image</th>
              <th>
                <FontAwesomeIcon icon={faPhone} /> Phone Number
              </th>
              <th>
                <FontAwesomeIcon icon={faEnvelope} /> Email
              </th>
              <th>
                <FontAwesomeIcon icon={faCalendarAlt} /> DOB
              </th>
            </tr>
          </thead>

          <tbody>
            {props.employee.map((emp, index) => (
              <tr key={emp.dob.date}>
                <th scope="row">{index + 1}</th>
                <td>
                  {emp.name.first} {emp.name.last}
                </td>
                <td>
                  <img src={emp.picture.thumbnail} alt="emp's img"></img>
                </td>
                <td>{emp.phone} </td>
                <td>
                  <a href={"mailto:" + emp.email} target="__blank">
                    {emp.email}
                  </a>
                </td>
                <td>{formatDate(emp.dob.date)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SearchResults;
