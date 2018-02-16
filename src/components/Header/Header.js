import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import menuIcon from '../../assets/icons/menu.svg';
import PlaceAdButton from '../PlaceAdButton/PlaceAdButton';
import './Header.css';


export default class Header extends Component {
    render(){
        return (
            <header className="header">
                <div className="header-ribbon-top"></div>
                <nav className="header-nav">
                    <div className="container">
                        <button className="header-nav-menu-button"><img className="header-nav-menu-icon" src={menuIcon} alt="menu-bar"/></button>
                        <ul className="header-nav-list">
                        {this.props.authenticated ? 
                                [<li className="header-nav-item header-nav-place-ad" key="create-listing"><PlaceAdButton /></li>,
                                <li className="header-nav-item" key="logout"><button className="logout-button" onClick={this.props.setLogout}>Logout</button></li>] 
                                :
                                [<li className="header-nav-item" key="login"><Link to="/login" className="header-nav-link">Login</Link></li>, 
                                <li className="header-nav-item" key="register"><Link to="/register" className="header-nav-link">Register</Link></li>]
                            }
                        </ul>
                    </div>
                </nav>
                <div className="header-search-box">
                    <div className="container">
                        <div className="header-brand"><h1><Link to="/">Forsale.com.gh</Link></h1></div>
                        <form className="header-search-form" onSubmit={this.handleSearch}>
                            <input type="text"  className="search-bar" />
                            <select name="categories" id="" className="search-category-select" >
                                <option value="Categories">Categories</option>
                            </select>
                            <input type="text" placeholder="location" className="search-location-input"/>
                            <input type="submit" value="Search" className="search-button" />
                        </form>
                    </div>
                </div>
                <div className="header-ribbon-bottom"></div>
            </header>
        )
    }
}