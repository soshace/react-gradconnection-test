import React from 'react';

export default React.createClass({
    render: function () {
        return (
            <div className="footer-wrapper">
                <div className="footer">
                    <div className="panel">
                        <div className="title">
                            <h1>ABOUT US</h1>
                            <h2>Aliquam id felis vitae tellus</h2>
                            <div className="content">
                                <p>Becenas neque ante, congue condim
                                    entum ipsum. Integer et enim a massa dictum conguebitur tempor.</p>
                            </div>
                        </div>
                    </div>
                    <div className="panel">
                        <div className="title">
                            <h1>CONTACT US</h1>
                            <h2>Ipsum vestibulum non ferme</h2>
                            <div className="content">
                                <p><a href="info@sitename.com">info@sitename.com</a></p>
                                <h3>( 000 ) 888 8888</h3>
                            </div>
                        </div>
                    </div>
                    <div className="panel border-right">
                        <div className="title">
                            <h1>COPY RIGHT</h1>
                            <h2>Ultrices dictum etut urna.</h2>
                            <div className="content">
                                <p>websitename. All rights reserved. </p>
                                <p><a href="www.alltemplateneeds.com" target="_blank" className="active">www.alltemplateneeds.com</a>
                                </p>
                                <p>Images by: <a href="www.photorack.net" target="_blank"> www.photorack.net</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clear"></div>
            </div>
        )
    }
});