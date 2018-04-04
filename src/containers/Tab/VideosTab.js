import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Videos from './../Videos/Videos';

class VideosTab extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row mt-3">
                    <div className="col-md-2">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <NavLink to="/videos/all" className="nav-link" activeClassName="active bg-dark text-white">All</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/videos/sports" className="nav-link" activeClassName="active bg-dark text-white">Sports</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/videos/news" className="nav-link" activeClassName="active bg-dark text-white">News</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/videos/music" className="nav-link" activeClassName="active bg-dark text-white">Music</NavLink>
                            </li>
                        </ul>                                
                    </div>
                    <div className="col-md-10">
                        <div className="card-columns">
                            <Route path="/videos/:cat(all|sports|news|music)" component={Videos} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    onClick() {
        alert(this.props.name);
    }
}
export default VideosTab;