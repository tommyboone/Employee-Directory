import React, { Component } from "react";
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import "./style.css";
// import EmployeeList from "../../EmployeeList.json";
// import image from "../../../public/images/James.jpg"

class EmployeeCard extends Component {
  onClick = () => {
    this.props.onEmployeeClick(this.props.name);
  };

  render() {
    //  const contact  = EmployeeList[0].data
    console.log("these are the props", this.props);
    if (this.props.selectedEmp) {
      return (
        <Card>
          <Card.Header className="card-header">
            <img
              src={this.props.selectedEmp.contact.img}
              alt="avatar"
              height="150"
              width="150"
            />
          </Card.Header>
          <br />
          <Card.Body>
            <Card.Title className="card-title">
              Hi! I'm {this.props.selectedEmp.first_name} from{" "}
              {this.props.selectedEmp.info}
            </Card.Title>
            <ListGroup>
              <ListGroupItem>
                Office: {this.props.selectedEmp.contact.office}
              </ListGroupItem>
              <ListGroupItem>
                Mobile: {this.props.selectedEmp.contact.mobile}
              </ListGroupItem>
              <ListGroupItem>
                Text: {this.props.selectedEmp.contact.sms}
              </ListGroupItem>
              <ListGroupItem>
                Email: {this.props.selectedEmp.contact.email}
              </ListGroupItem>
            </ListGroup>
            <br />
            <Button
              variant="success"
              href={`mailto:${this.props.selectedEmp.contact.email}`}
            >
              Email {this.props.selectedEmp.first_name} ...
            </Button>
          </Card.Body>
        </Card>
      );
    } else {
      return (
        <div>
          <h1>Select an Employee</h1>
          <ListGroup>
            <ListGroupItem>Office:</ListGroupItem>
            <ListGroupItem>Mobile:</ListGroupItem>
            <ListGroupItem>Text:</ListGroupItem>
            <ListGroupItem>Email:</ListGroupItem>
          </ListGroup>
        </div>
      );
    }
  }
}

export default EmployeeCard;
