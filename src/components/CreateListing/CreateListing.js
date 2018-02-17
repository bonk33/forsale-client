import React, { Component } from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';
import { requestWithAuth } from '../../utils/resquests';
import { CLOUDINARY_API_KEY, CLOUDINARY_URL, CLOUDINARY_UPLOAD_PRESET } from '../../utils/cloudinaryVars';
import './CreateListing.css';
import { graphql } from 'react-apollo';
import { getCategories } from '../../Queries';

class CreateListing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            imageFile: null,
            description: '',
            price: 0,
            category: 'Electronics'
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTitleField = this.handleTitleField.bind(this);
        this.handleDescriptionField = this.handleDescriptionField.bind(this);
        this.handleCategoryField = this.handleCategoryField.bind(this);
        this.handlePriceField = this.handlePriceField.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
    }

    handleDrop(files) {
        this.setState({
            imageFile: files[0]
        })
    }

    handleTitleField(event) {
        this.setState({
            title: event.target.value
        })
    }

    handleDescriptionField(event) {
        this.setState({
            description: event.target.value
        })
    }

    handlePriceField(event) {
        this.setState({
            price: event.target.value
        })
    }

    handleCategoryField(event) {
        this.setState({
            category: event.target.value
        })
    }

    async handleSubmit(event) {
        event.preventDefault();
        const { title, imageFile, description, category, price } = this.state
        
        const formData = new FormData();
        formData.append("file", imageFile);
        formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
        formData.append("api_key", CLOUDINARY_API_KEY);
        formData.append("timestamp", (Date.now() / 1000) | 0);

        const cloudinaryResp = await axios.post(CLOUDINARY_URL, formData, { headers: { "X-Requested-With": "XMLHttpRequest" }})
        console.log(cloudinaryResp.data)
        const imageID = cloudinaryResp.data.public_id
        const imageVersion = cloudinaryResp.data.version
        

        const data = {
            title,
            image_id: imageID,
            image_version: `${imageVersion}`,
            description,
            category,
            price
        }
        
        requestWithAuth.post('/items/', data)
        .then((response) => console.log(response))
        .catch((err) => console.log(err));
    }

    render() {
        const categories = this.props.data.categories
        return (
            <div className="listing-form-page" >
            <form className="listing-form" onSubmit={this.handleSubmit}>
                <Dropzone className="listing-dropzone" onDrop={this.handleDrop}>
                    Drag imgaes here or click to upload
                </Dropzone>
                <div className="preview">
                {this.state.imageFile ? <img src={this.state.imageFile.preview} alt="preview"/> : "Preview"}
                </div>
                <label htmlFor="title">Title</label>
                <input className="listing-form-input" onChange={this.handleTitleField} value={this.state.title} type="text" name="title" /> <br />
                <label htmlFor="code">Description</label>
                <textarea className="listing-form-input" onChange={this.handleDescriptionField} value={this.state.description} name="code" rows="4" cols="50"></textarea><br />
                <label htmlFor="price">Price</label>
                <input className="listing-form-input" onChange={this.handlePriceField} type="number" name="price" /><br />
                <select className="listing-form-select" onChange={this.handleCategoryField} value={this.state.category} name="style" id="">
                    {
                        categories ?
                        categories.map((option) => <option key= {option.id} value={option.id}>{option.name}</option>)
                        :
                        "loading"
                    }
                </select><br />
                <input className="listing-form-button" type="submit" value="Create Listing" />
            </form>
            </div>
        )
    }
}

export default graphql(getCategories)(CreateListing);