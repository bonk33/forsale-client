import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getItem } from '../../Queries';
import { CLOUDINARY_BASE_IMAGE_URL } from '../../utils/cloudinaryVars';
import mailIcon from '../../assets/icons/mail-circle.svg';
import facebookIcon from '../../assets/icons/facebook-circle.svg';
import './ListingDetail.css';

const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

class ListingDetail extends Component {
    render() {
        const listing = this.props.data.listing;
        return (
            listing ?
            <div className="listing-detail">
                <div className="listing-detail-main">
                    <div className="listing-detail-header">
                        <h1 className="listing-detail-title">{listing.title}</h1>
                        <button className="listing-detail-save-button">Save</button>
                    </div>
                    <div className="listing-detail-center">
                        <div className="listing-detail-photos">
                            <figure className="listing-detail-photos-figure">
                            <img src={`${CLOUDINARY_BASE_IMAGE_URL}/v${listing.imageVersion}/${listing.imageId}`} alt={listing.title} className="listing-detail-image"/>
                            </figure>
                        </div>
                        <div className="listing-detail-center-content">
                            <h3 className="listing-detail-price">GH&#x00A2;{numberWithCommas(listing.price)}</h3>
                        </div>
                    </div>
                    <div className="listing-detail-content">
                        <h3 className="listing-detail-content-heading">Description</h3>
                        <p className="listing-detail-description">{listing.description}</p>
                    </div>
                    <div className="listing-detail-share">
                        <p>Share via: </p>
                        <img src={mailIcon} alt="" className="listing-detail-share-icon"/>
                        <img src={facebookIcon} alt="" className="listing-detail-share-icon"/>
                        <button className="listing-detail-save-button">Save</button>
                    </div>
                </div>
                <div className="listing-detail-side">
                    <h3 className="listing-side-heading">Contact Details</h3>
                    <ul className="listing-owner-details">
                        <li className="listing-owner-contact">Seller: {listing.owner.username}</li>
                        <li className="listing-owner-contact">Phone: </li>
                        <li className="listing-owner-contact">Email: </li>
                        <li className="listing-owner-contact">Location: </li>
                    </ul>
                </div>
            </div>
            :
            "loading"
        )
    }
}

const getItemOptions = {
    options: props => ({
        variables: {
            id: props.match.params.id
        }
    })
}

export default graphql(getItem, getItemOptions)(ListingDetail);