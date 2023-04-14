import React from "react";
import Card from "react-bootstrap/Card";

class PriceDetails extends React.Component {
  tPrice;
  tQty;
  calculatePrice(CartProducts) {
    this.tPrice = 0;
    this.tQty = 0;
    CartProducts.forEach((CartProduct) => {
      this.tPrice += CartProduct.price * CartProduct.Qty;
      this.tQty += CartProduct.Qty;
    });
  }
  render() {
    this.calculatePrice(this.props.CartProducts);
    return (
      <Card>
        <Card.Body>
          <Card.Title>PRICE DETAILS</Card.Title>
          <Card.Text>
            Price ({this.tQty} items): ₹{this.tPrice}
          </Card.Text>
          <Card.Text>Delivery Charges: FREE</Card.Text>
        </Card.Body>
        <Card.Footer>Total: ₹{this.tPrice}</Card.Footer>
      </Card>
    );
  }
}
export default PriceDetails;
