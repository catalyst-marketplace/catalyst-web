import React from 'react';
import ReactDOM from 'react-dom';
import {FaInstagramSquare} from 'react-icons/fa'
import "./footnote.css"
import FootNote from "./footnote_img.svg"
function footnote(){
    return(
        <div id="footnote_container">
            
            <h4 id="contact_us">
                Contact Us
            </h4>
            <h4 id="contact_email">
            support@catalystmarketplace.com
            </h4>
            <img src={FootNote} id="footnote"/>

            <h4 id="follow_on_cnt">
            Follow us on
            </h4>
            <FaInstagramSquare href="https://www.instagram.com/catalyst.marketplace/" size="2em"id="ig_square"/>
        </div>
    )
}

export default footnote;