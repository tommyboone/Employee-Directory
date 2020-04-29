import React from "react";
import {Jumbotron} from "react-bootstrap";
import './style.css'
function PageHeader() {
  return (
    <Jumbotron className="page-header">
      <h1>Employee Directory</h1>
      <p>
        Here you can search for an employee, and find their contact information.
      </p>
    </Jumbotron>
  );
}

export default PageHeader;