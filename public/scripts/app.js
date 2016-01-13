var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var Redirect = ReactRouter.Redirect;

var App = React.createClass({
    render: function() {
        return (
            <div className="appComponent">
                <div className="appHeader">Header</div>
                <SiteMenu />
                {this.props.children}
                <div className="appFooter">Footer</div>
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