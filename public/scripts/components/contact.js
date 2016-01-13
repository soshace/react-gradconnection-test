window.Contacts = React.createClass({
    render: function() {
        return (
            <div className="left-panel">
                <div className="generic-content">
                    <div className="title">
                        <h1>Contact us</h1>
                        <h2>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.</h2>
                    </div>
                    <div className="content">
                        <div className="address martop">
                            <div className="panel">
                                <div className="title">
                                    <h1>Address - 01</h1>
                                </div>
                                <div className="content">
                                    <p>Block No:5, Some where Road,<br />
                                        City name, State, Country name</p>
                                    <p className="padTop"><span>Phone :</span> 000 888 88888</p>
                                    <p><span>Email :</span> <a href="mailto:info@companyname.com">info@companyname.com</a></p>
                                </div>
                            </div>
                            <div className="panel marginTop">
                                <div className="title">
                                    <h1>Address - 02</h1>
                                </div>
                                <div className="content">
                                    <p>Block No:5, Some where Road,<br />
                                        City name, State, Country name</p>
                                    <p className="padTop"><span>Phone :</span> 000 888 88888</p>
                                    <p><span>Email :</span> <a href="mailto:info@companyname.com">info@companyname.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clear"></div>
            </div>
        )
    }
});