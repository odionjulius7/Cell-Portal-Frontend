import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left fs-1">
          Cell Meeting
          {/* <img src="./logo2.png" alt="" width={120} /> */}
          <span className="secondaryText">
            Our vision is to make all members <br />
            be the best in christ Jesus.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">Loren Address, USA</span>
          <div className="flexCenter f-menu">
            <span>Regions</span>
            <span>Zones</span>
            <span>Cells</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
