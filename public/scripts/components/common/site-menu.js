import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
        render: function () {
            return (
                <div className="header">
                    <div className="row">
                        <div className="logo">
                            <h1>SITE NAME</h1>
                        </div>
                        <div className="menu">
                            <ul>
                                <li><Link to="index" activeClassName="active">Home</Link></li>
                                <li><Link to="about" activeClassName="active">About</Link></li>
                                <li><Link to="services" activeClassName="active">Services</Link></li>
                                <li><Link to="work" activeClassName="active">Work</Link></li>
                                <li><Link to="pages" activeClassName="active">Pages</Link></li>
                                <li><Link to="contact" activeClassName="active">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="clear"></div>
                </div>
            )
        }
    });