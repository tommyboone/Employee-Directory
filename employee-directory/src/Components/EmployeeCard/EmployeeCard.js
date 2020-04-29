import React, { Component } from "react";
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import "./style.css";
import EmployeeList from "../../EmployeeList.json";
import image from "../../images/James.jpg"

class EmployeeCard extends Component {
  onClick = () => {
    this.props.onEmployeeClick(this.props.name);
  };

 
  render() {
   const contact  = EmployeeList[0].data
  
    return (
      <Card>
        <Card.Header><img src={image} alt="avatar" height="150" width="150"/></Card.Header>
        <br/>
        <Card.Body>
          <Card.Title className="card-title">Hi! I'm {contact.first_name} from {contact.info}</Card.Title>
          <ListGroup>
            <ListGroupItem>Office: {contact.contact.office}</ListGroupItem>
            <ListGroupItem>Mobile: {contact.contact.mobile}</ListGroupItem>
            <ListGroupItem>Text: {contact.contact.sms}</ListGroupItem>
            <ListGroupItem>Email: {contact.contact.email}</ListGroupItem>
          </ListGroup>
          <br />
          <Button variant="success" href="mailto:">Email {contact.first_name} ...</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default EmployeeCard;
