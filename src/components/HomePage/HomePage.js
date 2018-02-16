import React, { Component } from 'react';
import CategoryPanel from '../CategoryPanel/CategoryPanel';
import FeedTab from '../FeedTab/FeedTab';
import PlaceAdButton from '../PlaceAdButton/PlaceAdButton';
import Listings from '../Listings';
import './HomePage.css';

export default class HomePage extends Component {
    render() {
        return (
            <div className="homepage-container container">
                <section className="homepage-side">
                    <CategoryPanel />
                </section>
                <section className="homepage-main">
                    <PlaceAdButton />
                    <FeedTab />
                    <Listings />
                </section>
          </div>
        )
    }
}

