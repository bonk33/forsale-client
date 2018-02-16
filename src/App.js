import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import ListingDetail from './components/ListingDetail/ListingDetail';
import CategoryDetail from './components/CategoryDetail/CategoryDetail';
import CreateListing from './components/CreateListing/CreateListing';
import Login from './components/Login/Login';
import './App.css';

const AppRoutes = ({ setLogin }) => (
  <div>
    <Route exact path="/" render={() => <HomePage />}/>
    <Route exact path="/login" render={() => <Login setLogin={setLogin}/>} />
    <Route exact path="/listings/:id"  
      render={(routeProps) => (<ListingDetail {...routeProps} />) }/>
      <Route exact path="/categories/:id"  
      render={(routeProps) => (<CategoryDetail {...routeProps} />) }/>
    <Route exact path="/create-listing" render={() => <CreateListing />}/>
  </div>
)

class App extends Component {
  constructor() {
    super();
    this.state = {
      authenticated: !!localStorage.getItem('AUTHTOKEN'),
      currentUser : {
        username: "Guest"
      }
    }
    this.setLogin = this.setLogin.bind(this);
    this.setLogout = this.setLogout.bind(this);
  }
  
  setLogin() {
    this.setState({
      authenticated: true
    });
  }

  setLogout() {
    localStorage.removeItem('AUTHTOKEN');
    this.setState({
      authenticated: false,
      currentUser: {
        username: "Guest"
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Router>
        <div>
            <Header currentUser={this.state.currentUser} authenticated={this.state.authenticated} setLogout={this.setLogout}/>
            <div className="container">
              {/* <AppRoutes setLogin={this.setLogin} /> */}
            </div>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
