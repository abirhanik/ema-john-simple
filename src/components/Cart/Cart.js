import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    //console.log(cart);
    const total = cart.reduce( (total, product) => total + product.price,0);
    // or for loop
    // let total = 0;
    // for(let i = 0; i<cart.length; i++){
    //     const product =cart[i];
    //     total = total + product.price;
    // }
    let shipping = 0;

    if(total > 35){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99;
    }

    const tax = (total / 10).toFixed(2);//toFixed দিলে value টা string এ convert হয়। পরে Number এ convert করে নিতে হয়।
    const grandTotal = (total + shipping + Number(tax));

    // দশমিক এর পর 2 digit পর্যন্ত নেওয়ার জন্য ফাংশন
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);//number এ convert করবে
    }
    return (
        <div>
            <h3>Order Summary</h3>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: ${formatNumber(total)}</p>
            <p><small>Shipping Cost: ${shipping}</small></p>
            <p><small>Tax + VAT: ${tax}</small></p>
            <p>Total Price: ${grandTotal}</p>
        </div>
    );
};

export default Cart;