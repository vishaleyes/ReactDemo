import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import CurrencyConverterTab from './../Tab/CurrencyConverterTab';
import VideosTab from './../Tab/VideosTab';

class App extends Component {

    render() {
        return (
                <Router>
                <div >
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <span className="navbar-brand">
                            <img className="App-logo" src={logo} alt="logo" width="40" height="40" />
                            React Primer
                        </span>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Currency Converter</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/videos/all" className="nav-link">Videos</Link>
                                </li>
                          </ul>
                        </div>
                    </nav>
                    <div className="container-fluid">
                        <Route exact path="/" component={CurrencyConverterTab} />
                        <Route path="/videos" component={VideosTab} />
                    </div>
                </div>
                </Router>
                );
    }
}
export default App;
