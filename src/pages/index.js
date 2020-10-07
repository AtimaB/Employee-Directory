import React, { Component } from "react";
import API from "../utils/API";
// import Headers from "../components/Headers";
import SearchPage from "../components/SearchPage";
// import Tables from "../components/Tables";
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
        this.setState({ employees: res.data.results });
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });

    event.target.value
      ? this.setState({ isActive: true })
      : this.setState({ isActive: false });

    const filteredList = this.state.employees.filter((filter) => {
      let chosenEmp = filter.name.first + filter.name.last;
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
