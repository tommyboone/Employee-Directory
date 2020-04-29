import React from "react";
import PageHeader from "./Components/PageHeader/PageHeader";
import SearchBar from "./Components/SearchBar/SearchBar";
import EmployeeCard from "./Components/EmployeeCard/EmployeeCard";
import { Row, Col } from "react-bootstrap";
// import "./App.css";
function App() {
  return (
    <div className="App">
      <header>
        <div className="container">
          <PageHeader />
          <Row>
            <Col className="col-lg-6">
              <SearchBar />
            </Col>
            <Col className="col-lg-6">
              <EmployeeCard />
            </Col>
          </Row>
        </div>
      </header>
    </div>
  );
}

export default App;
