import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { CLOUDINARY_BASE_IMAGE_URL} from '../utils/cloudinaryVars'
import ListingCard from './ListingCard/ListingCard';

import { getItems } from '../Queries';


class Listings extends Component {
    render() {
        const { data: { listings } } = this.props;
        return (
            <div className="listings">
                {   
                    listings ? 
                    listings.map( listing => (
                        <ListingCard key={listing.id}
                        id={listing.id}
                        title={listing.title}
                        owner={listing.owner.username}
                        imageUrl={`${CLOUDINARY_BASE_IMAGE_URL}/v${listing.imageVersion}/${listing.imageId}`}
                        description={listing.description}
                        price={listing.price}
                        />)
                    )
                    :
                    "Loading"
                    
                } 
            </div>
        )
    }
}

export default graphql(getItems)(Listings);
