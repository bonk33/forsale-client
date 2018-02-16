import React from 'react';
import { graphql } from 'react-apollo';
import ListingCard from '../ListingCard/ListingCard';
import { getCategoryWithItems } from '../../Queries';
import { CLOUDINARY_BASE_IMAGE_URL} from '../../utils/cloudinaryVars';

const CategoryDetail = ({ data: { category } }) => {
    return (
        <div className="category-detail">
            {
                category ?
                <div>
                    <h1>{category.name}</h1>
                    <div>
                    {category.items.map( listing => (
                        <ListingCard key={listing.id}
                        id={listing.id}
                        title={listing.title}
                        owner={listing.owner.username}
                        imageUrl={`${CLOUDINARY_BASE_IMAGE_URL}/v${listing.imageVersion}/${listing.imageId}`}
                        description={listing.description}
                        price={listing.price}
                        />)
                    )}
                    </div>
                </div>
                :
                "loading"
            }
        </div>
    )
}
const getCategoryOptions = {
    options: (props) => ({
        variables: {
            id: props.match.params.id
        }
    })
}

export default graphql(getCategoryWithItems, getCategoryOptions)(CategoryDetail);