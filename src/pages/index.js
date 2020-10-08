import React, { Component } from "react";
import API from "../utils/API";
import SearchPage from "../components/SearchPage";
import SearchResults from "../components/SearchResults";

class Index extends Component {
  state = {
    search: [],
    employees: [],
    result: [],
    error: "",
    filteredEmp: [],
    isActive: false,
  };

  componentDidMount() {
    API.getEmployees()
      .then((res) => {
        this.setState({ employees: res.data.results.sort(this.compareFnc) });
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  compareFnc = (a, b) => {
    const varA = a.name.first.toUpperCase();
    const varB = b.name.first.toUpperCase();

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return comparison;
  };

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });

    event.target.value
      ? this.setState({ isActive: true })
      : this.setState({ isActive: false });

    const filteredList = this.state.employees.filter((filter) => {
      let chosenEmp =
        filter.name.first + filter.name.last + filter.email + filter.phone;
      return chosenEmp.indexOf(this.state.search) !== -1;
    });
    console.log(filteredList);
    console.log(this.state.filteredEmp);
    this.setState({ filteredEmp: filteredList });
  };

  render() {
    return (
      <div>
        <h4>Welcome to our company's employee directory!</h4>
        <SearchPage
          handleInputChange={this.handleInputChange}
          employee={this.state.employees}
        />
        {this.state.isActive ? (
          <SearchResults employee={this.state.filteredEmp} />
        ) : (
          <SearchResults employee={this.state.employees} />
        )}
      </div>
    );
  }
}
export default Index;
