import React from 'react';
import logo from '../../images/logo.png';// (../) ডাবল ডট মানে একধাপ উপরের ফোল্ডার সিলেক্ট করা
import './Header.css'; // ./ সিংগেল ডট মানে একই ফোল্ডারের মধ্যে আলাদা ফাইল/ফোল্ডার সিলেক্ট করা
const Header = () => {
    return (
        <div className= "header">
            <img src= {logo} alt=""/>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Manage Inventory here</a>
            </nav>
        </div>
    );
};

export default Header;