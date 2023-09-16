import React from "react";
import gpt3logo from "../../assets/logo.svg";

import "./footer.css";
const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step into the future before others
        </h1>
      </div>

      <div className="gpt3__footer-button">
        <p>Request Early Access</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3logo} alt="logo" />
          <p>Crechetrwoord k12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Links</h4>

          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>

          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Get in Touch</h4>

          <p>Crechetrwoord k12 182 DK Alknjkcb</p>
          <p>085-132568</p>
          <p>info@payme.com</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>2023 GPT-3,All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;