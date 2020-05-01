import React from "react";
import "./style.css";
import Select from "react-select";
import EmployeeList from "../../EmployeeList.json";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import { Col, Row } from "react-bootstrap";

const options = EmployeeList.map(({ data }) => {
  return {
    value: [data.first_name, data.last_name, data.info],
    label: [
      <img
        src={process.env.PUBLIC_URL + `/images/${data.first_name}.jpg`}
        alt="Employee Avatar"
        className="employee-avatar"
        height="50"
        width="50"
      />,
      data.first_name,
      " ",
      data.last_name,
      "- ",
      data.info,
      "  ",
    ],
  };
});

class SearchBar extends React.Component {
  state = {
    selectedOption: null,
    selectedDisplay: null,
  };
  handleChange = (selectedOption) => {
    var selectedEmp;

    for (var i = 0; i < EmployeeList.length; i++) {
      if (EmployeeList[i].data.first_name === selectedOption.value[0]) {
        selectedEmp = EmployeeList[i];
      }
    }

    this.setState(
      { selectedOption: selectedOption, selectedDisplay: selectedEmp.data },
      () => console.log(`Option selected:`, this.state.selectedOption)
    );
  };
  render() {
    const { selectedOption } = this.state;
    return (
      <Row>
        <Col className="col-lg-6">
          <Select
            className="search-container"
            value={selectedOption}
            options={options}
            onChange={this.handleChange}
            openMenuOnClick={false}
            placeholder="Search for an employee by name or role..."
          />
        </Col>
        <Col className="col-lg-6">
          <EmployeeCard selectedEmp={this.state.selectedDisplay} />
        </Col>
      </Row>
    );
  }
}

export default SearchBar;
