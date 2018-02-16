import React from 'react';
import './CategoryPanel.css';
import { graphql } from 'react-apollo';
import { getCategories } from '../../Queries';


const CategoryPanel = ({ data, data: { categories } }) => (
    <div className="category-panel">
        <h4 className="category-panel-heading">Categories</h4>
        { data.loading ?
        "loading" :
        <ul className="category-panel-list">
            {categories.map((cat) => <li key={cat.id} className="category-panel-item"><a className="category-panel-link" href={`categories/${cat.id}`}>{cat.name}</a></li>)}
        </ul>
        }
    </div>
);

export default graphql(getCategories)(CategoryPanel);