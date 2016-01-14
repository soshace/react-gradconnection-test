import React from 'react';

export default React.createClass({
    render: function () {
        return (
            <div className="page">
                <div className="boxs1">
                    <div className="panel">
                        <div className="title">
                            <h1>CRAS EGET ERAT</h1>
                            <h2>Vestibulum ante ipsum primis</h2>
                        </div>
                        <div className="panel-img"><img src="images/img1.jpg" alt=""/></div>
                        <div className="content">
                            <p>Tongue condimentum ipsum. Integer et enim a massa dictum congue urabit.</p>
                        </div>
                        <div className="controller">
                            <div className="buttons">
                                <h2><a href="#">MORE</a></h2>
                            </div>
                            <div className="clear"></div>
                        </div>
                    </div>
                </div>
                <div className="boxs2">
                    <div className="panel">
                        <div className="title">
                            <h1>MORBI MI DIAMSUS</h1>
                            <h2>Nullam non ligula risus lorem</h2>
                        </div>
                        <div className="panel-img"><img src="images/img2.jpg" alt=""/></div>
                        <div className="content">
                            <p>Aliquam cursus ultrices gravida. Maecenas nisl leo, lobortis nec egestas sodales.</p>
                        </div>
                        <div className="controller">
                            <div className="buttons">
                                <h2><a href="#">MORE</a></h2>
                            </div>
                            <div className="clear"></div>
                        </div>
                    </div>
                </div>
                <div className="boxs3">
                    <div className="panel">
                        <div className="title">
                            <h1>PRAESENT SEMPER</h1>
                            <h2>Quisque tincidunt adipiscing</h2>
                        </div>
                        <div className="panel-img"><img src="images/img3.jpg" alt=""/></div>
                        <div className="content">
                            <p> Vestibulum et justo massa. Pellentesque habitant morbi tristique senectus.</p>
                        </div>
                        <div className="controller">
                            <div className="buttons">
                                <h2><a href="#">MORE</a></h2>
                            </div>
                            <div className="clear"></div>
                        </div>
                    </div>
                </div>
                <div className="clear"></div>
            </div>
        )
    }
});