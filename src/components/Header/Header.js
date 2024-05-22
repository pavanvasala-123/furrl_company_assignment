import React from 'react';
import './Header.css';
import { IoBagOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";

const Header = () => {
    return (
        <header>
             <div className="logo">Furrl</div>
            <nav>
                
               
                <div className="icons">
                <IoBagOutline/>
                <CiBookmark/>
                </div>
            </nav>
        </header>
    );
};

export default Header;
