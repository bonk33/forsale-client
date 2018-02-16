import React from 'react';
import './ListingCard.css';

const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

const ListingCard = ({ title, owner, imageUrl, description, price }) => {
    return (
        <div className="listing-card">
            <a className="listing-card-clickable-container">
                <figure className="listing-card-figure"><img className="listing-card-image" src={imageUrl} alt={title}/></figure>
                <div className="listing-card-content">
                    <p className="listing-card-title">{title} by {owner}</p>
                    {/* <p>{description}</p> */}
                    <p className="listing-card-price">GH&#x00A2; {numberWithCommas(price)}</p>
                </div>
            </a>
        </div>
    )
}

export default ListingCard;