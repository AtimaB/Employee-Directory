import React from "react";
import "materialize-css/dist/css/materialize.min.css";
// get fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import your icons
import {
  faEnvelope,
  faPhone,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";
// import data

const Tables = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m12 l12">
          <table className="centered responsive-table striped z-depth-3">
            <thead>
              <tr>
                <th>Name</th>
                <th>Image</th>
                <th>
                  <FontAwesomeIcon icon={faPhone} /> Phone Number
                </th>
                <th>
                  <FontAwesomeIcon icon={faEnvelope} /> Email
                </th>
                <th>
                  <FontAwesomeIcon icon={faAddressBook} /> Address
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tables;
