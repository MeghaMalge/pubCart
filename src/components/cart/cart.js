import React from "react";
import CartItem from "../cartItem/cartItem";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PriceDetails from '../PriceDetails/PriceDetails'

class Cart extends React.Component {

    constructor() {
        super();
        this.state = {  CartProducts: [
            {
                id:1,
                Qty:1,
                thumbnail_image:"http://www.excitinglives.com/images/id1858.jpg",
                title:"Happy Minion Sipper Bottle",
                price: 699,
                rating: 4,
                likes: 100
            },
            {
                id:2,
                Qty:1,
                thumbnail_image:"https://www.liltreasures.com.au/assets/full/9EGPR4S8.jpg?20210622113618",
                title:"Disney x Frank Green Bottle",
                price: 1499,
                rating: 5,
                likes: 210
            },
            {
                id:3,
                Qty:1,
                thumbnail_image:"https://www.temptationgifts.com/media/catalog/product/cache/623a6c74e30aa11506d045198d97fecc/p/o/portico-joules-jls1904-insulated-water-bottle-01.jpg",
                title:"Floral Insulated Water Bottle", 
                price: 1799,
                rating: 3,
                likes: 58
            },
            {
                id:4,
                Qty:1,
                thumbnail_image:"https://m.media-amazon.com/images/I/31xabM+dk8L._SY300_SX300_.jpg",
                title:"Yellow Duck Stainless Steel Water Bottle",    
                price: 599,
                rating: 4,
                likes: 305
            },
            {
                id:5,
                Qty:1,
                thumbnail_image:"https://m.media-amazon.com/images/I/51BLS5zvaiL._SL1129_.jpg",
                title:"Pooh Sipper Bottle",    
                price: 2000,
                rating: 2,
                likes: 305
            }
     
        ] }
    }
    
    deleteProduct(cartItemId) {
        console.log(`Deleting Product with id : ${cartItemId}`);

        let newcart= this.state.CartProducts.filter((cartItem) => {
            return cartItem.id !== cartItemId;
        });

        this.setState({ CartProducts: newcart});
      }

      incrementQty(cartItemId){
        console.log("+ :",cartItemId)
        let newcart = this.state.CartProducts;
        newcart.forEach((cartItem)=> {
            if(cartItem.id === cartItemId) {
                cartItem.Qty += 1;
            }  
        });
        console.log(newcart);
        this.setState({
            CartProducts: newcart
        });
    }
    decrementQty(cartItemId){
        let newcart = this.state.CartProducts;
        newcart.forEach((cartItem)=> {
            if(cartItem.id === cartItemId) {
                cartItem.Qty -= 1;
            }  
        });
        console.log(newcart);
        this.setState({
            CartProducts: newcart
        });
    }
        render() {
            let allCartProducts = this.state.CartProducts.map(CartProduct => <CartItem deleteProduct={id => this.deleteProduct(id)} 
            decrementQty={id => this.decrementQty(id)}
            incrementQty={id => this.incrementQty(id)}
            cartdetails={CartProduct} key={CartProduct.id} />)

            return (
                <React.Fragment>
                <Container className="mt-5" xl={5}>
                    <Row xs={1} sm={1} lg={1} xl={2}
                    className="g-4">
                        <Col xl={8}>
                        {allCartProducts}
                        </Col>
                        <Col xl={3}>
                    <PriceDetails CartProducts={this.state.CartProducts}>
                    </PriceDetails>
                        </Col>
                      
                    </Row>
                   
                </Container>
            </React.Fragment>
            )
        }
}

export default Cart;