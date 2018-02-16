import React, { Component } from 'react';
import './ListingDetail.css';


export default class ListingDetail extends Component {
    render() {
        const listing = this.props.listing;
        return (
            <div className="listing-detail">
                <div className="listing-detail-header">
                    <h1 className="listing-detail-title">{listing.title}</h1>
                </div>
                <div className="listing-detail-photos">
                </div>
                <div className="listing-detail-content">
                    <p className="listing-detail-description">{listing.description}</p>
                </div>
                <div className="listing-detail-share"></div>
            </div>
        )
    }
}
