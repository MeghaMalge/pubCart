import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

class Member extends React.Component {
  render() {
    return (
      <Col>
        <Card style={{ minHeight: "200px" }}>
          <Card.Body className="row p-2 m-0">
            <Col xs={4} sm className="p-0" style={{ position: "relative" }}>
              <Card.Img
                src={this.props.memberdetails.avatarUrl}
                className="rounded-circle"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                }}
              />
            </Col>
            <Col>
              <Card.Title>{this.props.memberdetails.name}</Card.Title>
              <Card.Text className="m-0">
                {this.props.memberdetails.email}
              </Card.Text>
              <Card.Text className="m-0">
                {this.props.memberdetails.designation}
              </Card.Text>
              <Card.Text className="m-0">
                {this.props.memberdetails.description}
              </Card.Text>
            </Col>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default Member;
