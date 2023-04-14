import React from "react";
import Product from "../Product/product";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class ProductsList extends React.Component {

    constructor() {
        super();
        this.state = {  products: [
            {
                id:1,
                thumbnail_image:"http://www.excitinglives.com/images/id1858.jpg",
                title:"Happy Minion Sipper Bottle",
                price: 699,
                rating: 4,
                likes: 100
            },
            {
                id:2,
                thumbnail_image:"https://www.liltreasures.com.au/assets/full/9EGPR4S8.jpg?20210622113618",
                title:"Disney x Frank Green Bottle",
                price: 1499,
                rating: 5,
                likes: 210
            },
            {
                id:3,
                thumbnail_image:"https://www.temptationgifts.com/media/catalog/product/cache/623a6c74e30aa11506d045198d97fecc/p/o/portico-joules-jls1904-insulated-water-bottle-01.jpg",
                title:"Floral Insulated Water Bottle", 
                price: 1799,
                rating: 3,
                likes: 58
            },
            {
                id:4,
                thumbnail_image:"https://m.media-amazon.com/images/I/31xabM+dk8L._SY300_SX300_.jpg",
                title:"Yellow Duck Stainless Steel Water Bottle",    
                price: 599,
                rating: 4,
                likes: 305
            },
            {
                id:5,
                thumbnail_image:"https://m.media-amazon.com/images/I/51BLS5zvaiL._SL1129_.jpg",
                title:"Pooh Sipper Bottle",    
                price: 2000,
                rating: 2,
                likes: 305
            },
            {
                id:6,
                thumbnail_image:"http://www.excitinglives.com/images/id1858.jpg",
                title:"Happy Minion Sipper Bottle",    
                price: 2000,
                rating: 4,
                likes: 305
            },
            {
                id:7,
                thumbnail_image:"http://www.excitinglives.com/images/id1858.jpg",
                title:"Happy Minion Sipper Bottle",    
                price: 2000,
                rating: 4,
                likes: 305
            },
            {
                id:8,
                thumbnail_image:"http://www.excitinglives.com/images/id1858.jpg",
                title:"Happy Minion Sipper Bottle",    
                price: 2000,
                rating: 1,
                likes: 305
            },
            {
                id:9,
                thumbnail_image:"http://www.excitinglives.com/images/id1858.jpg",
                title:"Happy Minion Sipper Bottle",    
                price: 2000,
                rating: 4,
                likes: 305
            },
            {
                id:10,
                thumbnail_image:"http://www.excitinglives.com/images/id1858.jpg",
                title:"Happy Minion Sipper Bottle",    
                price: 2000,
                rating: 3,
                likes: 305
            },
            {
                id:11,
                thumbnail_image:"http://www.excitinglives.com/images/id1858.jpg",
                title:"Happy Minion Sipper Bottle",
                price: 2000,
                rating: 4,
                likes: 140
            }
     
        ] }
    }

    // deleteProduct(productId) {
    //     console.log(`Deleting Product with id : ${productId}`);

    //     let newProductList = this.state.products.filter((product) => {
    //         return product.id !== productId;
    //     });

    //     this.setState({ products: newProductList});
    //   }

        render() {
            let allProducts = this.state.products.map(product => <Product productdetails={product} key={product.id}
            />)

            return (
                <React.Fragment>
                <Container className="mt-5">
                    <Row xs={1} sm={2} lg={3} xl={4}
                    className="gx-4 gy-4" >
                        {allProducts}
                    </Row> 
                </Container>
            </React.Fragment>
            )
        }
}

export default ProductsList;
