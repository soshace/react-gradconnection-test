var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var Redirect = ReactRouter.Redirect;

var App = React.createClass({
    render: function() {
        return (
            <div className="appComponent">
                <SocialHeader />
                <SiteMenu />
                {this.props.children}
                <Footer />
            </div>
        )
    }
});

var SiteMenu = React.createClass({
    render: function() {
        return (
            <div className="siteMenu">
                <ul>
                    <li><Link to="index">Index</Link></li>
                    <li><Link to="about">About</Link></li>
                    <li><Link to="services">Services</Link></li>
                    <li><Link to="work">Work</Link></li>
                    <li><Link to="pages">Pages</Link></li>
                    <li><Link to="contact">Contact</Link></li>
                </ul>
            </div>
        );
    }
});

var Index = React.createClass({
    render: function() {
        return (
            <div><h1>Home page</h1></div>
        )
    }
});

var About = React.createClass({
    render: function() {
        return (
            <div><h1>About</h1></div>
        )
    }
});

var Services = React.createClass({
    render: function() {
        return (
            <div><h1>Services</h1></div>
        )
    }
});

var Work = React.createClass({
    render: function() {
        return (
            <div><h1>Work</h1></div>
        )
    }
});

var Pages = React.createClass({
    render: function() {
        return (
            <div><h1>Pages</h1></div>
        )
    }
});

var Contact = React.createClass({
    render: function() {
        return (
            <div><h1>Contact</h1></div>
        )
    }
});

var SocialHeader = React.createClass({
    render: function() {
        return (
            <div className="social-wrapper">
                <div className="row">
                    <ul>
                        <li><a href="#"><img src="images/social-1.jpg" alt="" /></a></li>
                        <li><a href="#"><img src="images/social-2.jpg" alt="" /></a></li>
                        <li><a href="#"><img src="images/social-3.jpg" alt="" /></a></li>
                        <li className="no-padding"><a href="#"><img src="images/social-4.jpg" alt="" /></a></li>
                    </ul>
                    <div className="clear"></div>
                </div>
            </div>
        )
    }
});

var Footer = React.createClass({
    render: function() {
        return (
            <div className="footer-wrapper">
                <div className="footer">
                    <div className="panel">
                        <div className="title">
                            <h1>ABOUT US</h1>
                            <h2>Aliquam id felis vitae tellus</h2>
                            <div className="content">
                                <p>Becenas neque ante,  congue condim
                                    entum ipsum. Integer et enim a massa dictum conguebitur tempor.</p>
                            </div>
                        </div>
                    </div>
                    <div className="panel">
                        <div className="title">
                            <h1>CONTACT US</h1>
                            <h2>Ipsum vestibulum non ferme</h2>
                            <div className="content">
                                <p><a href="info@sitename.com">info@sitename.com</a> </p>
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
                                <p><a href="www.alltemplateneeds.com" target="_blank" className="active">www.alltemplateneeds.com</a> </p>
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

ReactDOM.render((
    <Router>
        <Redirect from="/" to="index" />
        <Route path="/" component={App}>
            <Route path="index"    component={Index} />
            <Route path="about"    component={About} />
            <Route path="services" component={Services} />
            <Route path="work"     component={Work} />
            <Route path="pages"    component={Pages} />
            <Route path="contact"  component={Contact} />
        </Route>
    </Router>
), document.body);