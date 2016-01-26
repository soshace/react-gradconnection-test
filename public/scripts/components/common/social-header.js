import React from 'react';

export default class extends React.Component {
    render() {
        return (
            <div className="social-wrapper">
                <div className="row">
                    <ul>
                        <li><a href="#"><img src="images/social-1.jpg" alt=""/></a></li>
                        <li><a href="#"><img src="images/social-2.jpg" alt=""/></a></li>
                        <li><a href="#"><img src="images/social-3.jpg" alt=""/></a></li>
                        <li className="no-padding"><a href="#"><img src="images/social-4.jpg" alt=""/></a></li>
                    </ul>
                    <div className="clear"></div>
                </div>
            </div>
        )
    }
};