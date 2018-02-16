import React from 'react';
import { Link } from 'react-router-dom';
import './PlaceAdbutton.css';

const PlaceAdButton = () => (
    <Link to="/create-listing" className="place-ad-button">Place ad</Link>
)

export default PlaceAdButton;