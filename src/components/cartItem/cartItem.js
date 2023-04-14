import React from "react";
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import {BsFillTrashFill} from 'react-icons/bs'
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaPlus , FaMinus} from 'react-icons/fa';
import './cartItem.css';

class CartItem extends React.Component { 
  render() {
    
    return (

          <Card style={{minHeight: "200px"}} className="p-0 mb-3">
            <Card.Body className="row m-0 p-0">
              <Col xs={4} sm={4} lg={4} xl={3} className="p-0" >
                <Card.Img src={this.props.cartdetails.thumbnail_image} className="me-4 " width="200px" height="200px" />
              </Col>
              <Col className="p-4 ms-5">
         <Card.Title>{this.props.cartdetails.title}</Card.Title>

         <Card.Text className="ps-2">₹{this.props.cartdetails.price}</Card.Text>
     <Button
            className="btn btn-danger mx-2"
            onClick={() => this.props.deleteProduct(this.props.cartdetails.id)}
          >
            <BsFillTrashFill /> Remove
          </Button>
          <div className="Qty">
          <button className="rounded-circle Qty-btn" onClick={() => this.props.decrementQty(this.props.cartdetails.id)}><FaMinus className="Qty-icon"></FaMinus></button>
          <input type="text" className="Qty-input" value={this.props.cartdetails.Qty} min="1" max="100"></input>
          <button className="rounded-circle Qty-btn" onClick={() => this.props.incrementQty(this.props.cartdetails.id)}><FaPlus className=" Qty-icon"></FaPlus></button>
          </div>
          
              </Col>
             </Card.Body>
</Card>

   
    );
  }
}

export default CartItem;