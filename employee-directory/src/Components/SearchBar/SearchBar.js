import React from "react";
import "./style.css";
import Select from "react-select";
import EmployeeList from "../../EmployeeList.json";
// import {render} from 'react-dom';

const options = EmployeeList.map(({ data }) => {
  return (
    {
      value: [data.name, "- ", data.info],
      label:[data.name, "- ", data.info]

    }
  )})



class SearchBar extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = (selectedOption) => {
    this.setState({ selectedOption }, () =>
      console.log(`Option selected:`, this.state.selectedOption)
    );
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        className="search-container"
        value={selectedOption}
        options={options}
        onChange={this.handleChange}
        openMenuOnClick={false}
        placeholder="Search for an employee..."
      />
    );
  }
}

export default SearchBar;
