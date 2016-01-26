import React from 'react';

export default class extends React.Component {
    componentDidMount() {
        window.carousel();
    }

    render() {
        return (
            <div className="banner-wrapper">
                <div className="row">
                </div>
                <div className="clear"></div>
                <div className="banner">
                    <div className="banner-bg">
                        <div className="panel">
                            <div className="title">
                                <h1>Nulla sapien<br />
                                    vestibulum ut semper</h1>
                            </div>
                            <div className="content">
                                <p>Nulla sapien vestibulum ut semper <br />
                                    Pellentesque habitant morbi.</p>
                            </div>
                            <div className="banner-button"><a href="#">Primi ipsum dolor</a></div>
                        </div>
                        <div className="banner-img">
                            <div id="carousel">
                                <div id="slides">
                                    <ul>
                                        <li><img src="images/banner-img3.png"  alt="Slide 3"/></li>
                                        <li><img src="images/banner-img1.png"  alt="Slide 1"/></li>
                                        <li><img src="images/banner-img2.png"  alt="Slide 2"/></li>
                                    </ul>
                                    <div className="clear"></div>
                                </div>
                                <div className="clear"></div>
                                <div id="buttons"> <a href="#" id="prev">prev</a> <a href="#" id="next">next</a>
                                    <div className="clear"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};