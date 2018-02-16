import React from 'react';
import './Footer.css';
import logo from '../../assets/logos/logo-forsale-ghana-trimmed.JPG';

const Footer = () => (
    <div className="footer">
        <img className="footer-logo" src={logo} alt="logo"/>
        <h4 className="footer-text">&copy;2018 Forsale Ghana</h4>
    </div>
)

export default Footer;