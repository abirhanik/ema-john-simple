import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);//add to cart button এ ক্লিক করলে প্রোডাক্ট সিলেক্ট হবে।
    const [cart, setCart] = useState([]);//সিলেক্ট করা প্রোডাক্ট order summary তে দেখাবে।
    const handleAddProduct = (productTemplate) => { //eventHandler Main Folder এ দিতে হয়। product.js এ দিলে সমস্যা হবে। 
        //console.log ("pro added", productTemplate);
        const newCart = [...cart,productTemplate];//... তিনটি ডট মানে কপি।
        setCart(newCart);
    }
    return (
        <div className = "shop-container">
            <div className="product-container">
                {
                    products.map(product => <Products 
                        productTemplate = {product} 
                        handleAddProduct = {handleAddProduct}
                        ></Products>)
                }
            </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
            </div>
            
            
        </div>
    );
};

export default Shop;