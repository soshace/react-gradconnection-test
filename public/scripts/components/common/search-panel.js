import React from 'react';

export default React.createClass({
    render: function() {
        return (
            <div className="contact-panel padding-bottm">
                <div className="title">
                    <h1>ALIQUAM ADIPIS</h1>
                    <h2>Suspendisse ut urna enim</h2>
                </div>
                <div className="search">
                    <ul>
                        <li className="libg">
                            <input type="text" className="search-filed" placeholder="search here..."/>
                        </li>
                        <li><img src="images/search-bt.jpg" alt="" /></li>
                    </ul>
                </div>
                <div className="clear"></div>
            </div>
        )
    }
});