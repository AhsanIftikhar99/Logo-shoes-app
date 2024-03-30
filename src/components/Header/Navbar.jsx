import React from 'react';
import { FaBars, FaSearch, FaUser } from 'react-icons/fa';
import { CiShoppingCart } from "react-icons/ci";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import './navbar.css';


const logoFontSize = '1.5rem';
function Navbar() {
    return (
        <header className="navbar">

            <HiBars3CenterLeft size={logoFontSize}/>


            <p className="logo">L O G O</p>

            <div className="icons">
                <CiSearch size={logoFontSize} />
                <CiUser size={logoFontSize} />
                <CiShoppingCart size={logoFontSize}/>
            </div>
        </header>
    );
}

export default Navbar;