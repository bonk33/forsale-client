import React from 'react';
import { Link } from 'react-router-dom';
import './ListingCard.css';

const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

const ListingCard = ({ id, title, owner, imageUrl, price }) => {
    const listingUrl = `/listings/${id}`
    return (
        <div className="listing-card">
            <Link to={listingUrl} className="listing-card-clickable-container">
                <figure className="listing-card-figure"><img className="listing-card-image" src={imageUrl} alt={title}/></figure>
                <div className="listing-card-content">
                    <p className="listing-card-title">{title} by {owner}</p>
                    <p className="listing-card-price">GH&#x00A2; {numberWithCommas(price)}</p>
                </div>
            </Link>
        </div>
    )
}

export default ListingCard;