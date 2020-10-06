import React, { Component } from "react";
import API from "../utils/API";
import SearchPage from "../components/SearchPage";
import Tables from "../components/Tables";

class EmployeeContainer extends Component {
  state = {
    result: [],
    search: "",
  };

  componentDidMount() {
    this.searchEmployee("");
  }

  searchEmployee = (query) => {
    API.search(query)
      .then((res) => this.setState({ employees: res.data.result }))
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefailt();
    this.searchEmployee(this.state.search);
  };
  render() {
    return <div></div>;
  }
}
