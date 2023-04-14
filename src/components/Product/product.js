import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
// import { BsFillTrashFill } from "react-icons/bs"
import "./product.css";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentLikes: this.props.productdetails.likes };
  }
  addLike() {
    this.setState({ currentLikes: this.state.currentLikes + 1 });
  }

  render() {
    let rating = [];
    for (let i = 0; i < this.props.productdetails.rating; i++) {
      rating.push(<FaStar key={i} color="orange" size={15}></FaStar>);
    }
    return (
      <Col>
        <Card style={{ width: "18rem", backgroundColor: "rgb(230, 230, 230)" }}>
          <Card.Img
            variant="top"
            src={this.props.productdetails.thumbnail_image}
            width="200px"
            height="300px"
          />

          <Card.Body>
            <Card.Title className="product-title">
              {this.props.productdetails.title}
            </Card.Title>
            <Card.Text className="product-price my-1">
              <span>&#8377;</span>
              {this.props.productdetails.price}/-
            </Card.Text>
            <Card.Text>{rating}</Card.Text>
            <Button
              onClick={() => this.addLike()}
              variant="secondary"
              className="p-2"
            >
              <FaHeart
                size={20}
                style={{ color: "white", marginRight: "5px" }}
              ></FaHeart>
              {this.state.currentLikes}
            </Button>
            {/* <button
            className="btn btn-danger mx-2"
            onClick={() => this.props.deleteProduct(this.props.productdetails.id)}
          >
            <BsFillTrashFill />
          </button> */}
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default Product;
