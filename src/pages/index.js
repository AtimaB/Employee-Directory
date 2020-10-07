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
  };

  render() {
    return (
      <div>
        <h4>Welcomt to our company's employee directory!</h4>
        <SearchPage
          handleInputChange={this.handleInputChange}
          employee={this.state.employees}
        />
        <SearchResults employee={this.state.employees} />
      </div>
    );
  }
}
export default Index;
