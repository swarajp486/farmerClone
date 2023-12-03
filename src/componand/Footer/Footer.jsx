import React from "react";
import logo from "../../assets/logo.png";
import "./Footer.css";
function Footer() {
  return( 
  <div className="footer">
    <div className="footer-main">
    <div className="footer-main-div-1">
        <img
        src={logo}
        />

    </div>

    <div className="footer-main-div-2">
      <ul>
        <li>Features</li>
        <li>FAQ</li>
        <li>Pricing</li>
        <li>Testimonials</li>
        
      </ul>
    </div>
    <div className="line">
        <hr />
    </div>
    </div>
    <div className="footer-end">
        <p>© 2022 ManageWise, Inc.</p>
    </div>
   
  </div>
  
  )
}

export default Footer;
