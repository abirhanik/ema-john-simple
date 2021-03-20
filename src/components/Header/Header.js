import React from 'react';
import logo from '../../images/logo.png';// (../) ডাবল ডট মানে একধাপ উপরের ফোল্ডার সিলেক্ট করা
import './Header.css'; // ./ সিংগেল ডট মানে একই ফোল্ডারের মধ্যে আলাদা ফাইল সিলেক্ট করা
const Header = () => {
    return (
        <div className= "header">
            <img src= {logo} alt=""/>
        </div>
    );
};

export default Header;