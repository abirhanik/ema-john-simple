import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const Products = (props) => {
    //console.log(props);
    const { img, name, seller, price, stock } = props.productTemplate;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" /> {/* props.productTemplate.img */}
            </div>
            <div>
                <h3 className="product-name">{name}</h3>{/* props.productTemplate.name */}
                <p><small>by: {seller}</small></p>
                <p><small>${price}</small></p>{/* direct currency sign use kora zabe na. */}
                <p><small>only {stock} left in stock - order soon</small></p>
                <button className="cart-button" onClick = { () => props.handleAddProduct (props.productTemplate)}><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>

        </div>
    );
};

export default Products;