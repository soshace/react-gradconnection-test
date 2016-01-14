window.Carousel = React.createClass({
    componentDidMount: function() {
        window.carousel();
    },
    render: function() {
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
});

window.Persons = React.createClass({
    render: function() {
        return (
            <div className="page">
                <div className="boxs1">
                    <div className="panel">
                        <div className="title">
                            <h1>CRAS EGET ERAT</h1>
                            <h2>Vestibulum ante ipsum primis</h2>
                        </div>
                        <div className="panel-img"><img src="images/img1.jpg" alt="" /></div>
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
                        <div className="panel-img"><img src="images/img2.jpg" alt="" /></div>
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
                        <div className="panel-img"><img src="images/img3.jpg" alt="" /></div>
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

window.News = React.createClass({
    render: function() {
        return (
            <div className="left-panel">
                <div className="panel">
                    <div className="title">
                        <div className="icons"><img src="images/arrow-icons.png" alt="" /></div>
                        <h1>PRAESENT VEHICULA PURUS IRIN</h1>
                        <h2>Aenean facilisis lorem ut metus</h2>
                    </div>
                    <div className="content">
                        <p>Donec a nulla erat. Fusce molestie pellentesque est eget tincidunt. Pellentesque at arcu a arcu bibendum mattis at suscipit nunc. Maecenas neque ante,  congue condimentum ipsum. Integer et enim a massa dictum congue. Curabitur tempor massa ac lectus aliquet vitae hendrerit leo semper lorem ipsum dolor. </p>
                    </div>
                    <div className="controller">
                        <div className="buttons">
                            <h2><a href="#">MORE</a></h2>
                        </div>
                        <div className="clear"></div>
                    </div>
                </div>
                <div className="clear"></div>
                <div className="panel">
                    <div className="title">
                        <div className="icons"><img src="images/arrow-icons.png" alt="" /></div>
                        <h1>DONCE SED NEQUE NON FELIS AUCTOR</h1>
                        <h2>Ut feugiat dui sit amet nulla posuer</h2>
                    </div>
                    <div className="content">
                        <p>Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a diam sit amet mi ullamcorper vehicula. Integer adipiscing risus a sem. Nullam quis massa sit amet nibh viverra malesuada. Nunc sem lacus, accumsan quis, faucibus non, congue vel, arcu. Ut scelerisque hendrerit tellus. Integer sagittis. </p>
                    </div>
                    <div className="controller">
                        <div className="buttons">
                            <h2><a href="#">MORE</a></h2>
                        </div>
                        <div className="clear"></div>
                    </div>
                </div>
                <div className="clear"></div>
                <div className="panel">
                    <div className="title">
                        <div className="icons"><img src="images/arrow-icons.png" alt="" /></div>
                        <h1>ENIAN FEUGIAT BLANDIT NEQUE</h1>
                        <h2>Vivamus et augue sed orci auctor</h2>
                    </div>
                    <div className="content">
                        <p>Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget. ed ac risus. Phasellus lacinia, magna Ut aliquam sollicitudin leo.Cras iaculis ultricies nulla.</p>
                    </div>
                    <div className="controller">
                        <div className="buttons">
                            <h2><a href="#">MORE</a></h2>
                        </div>
                        <div className="clear"></div>
                    </div>
                </div>
                <div className="clear"></div>
            </div>
        )
    }
});

window.ContactForm = React.createClass({
    getInitialState: function() {
        return {name: '', email: '', message: ''};
    },
    handleNameChange: function(event) {
        this.setState({name: event.target.value});
    },
    handleEmailChange: function(event) {
        this.setState({email: event.target.value});
    },
    handleMessageChange: function(event) {
        this.setState({message: event.target.value});
    },
    handleSubmit: function(event) {
        event.preventDefault();
        var name    = this.state.name.trim(),
            email   = this.state.email.trim(),
            message = this.state.message.trim();

        if (!name || !email || !message) {
            // Since there is no error message design mockup console.warn() and alert() were used
            console.warn('One or more fields are empty');
            alert('One or more fields are empty');
            return;
        }
        if (!this.validateEmail(email)) {
            // Since there is no error message design mockup console.warn() and alert() were used
            console.warn('Email is incorrect');
            alert('Email is incorrect');
            return;
        }

        this.props.onContactSubmit({name: name, email: email, message: message});
        this.setState({name: '', email: '', message: ''})
    },
    validateEmail: function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    },
    render: function() {
        return (
            <div>
                <div className="form">
                    <ul>
                        <li>
                            <input
                                type="text"
                                className="text-field"
                                placeholder="your name here"
                                value={this.state.name}
                                onChange={this.handleNameChange}
                            />
                        </li>
                        <li>
                            <input
                                type="text"
                                className="text-field"
                                placeholder="your email here"
                                value={this.state.email}
                                onChange={this.handleEmailChange}
                            />
                        </li>
                        <li>
                            <textarea
                                cols=""
                                rows=""
                                className="textarea"
                                placeholder="your message here"
                                value={this.state.message}
                                onChange={this.handleMessageChange}
                            />
                        </li>
                    </ul>
                    <div className="clear"></div>
                </div>
                <div className="controller">
                    <div className="buttons">
                        <h2><a href="#" onClick={this.handleSubmit}>SUBMIT</a></h2>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>
        )
    }
});

window.ContactPanel = React.createClass({
    contactUrl: "http://localhost:3000/api/contacts", // hardcoded for test purposes since used another server for backend
    handleContactSubmit: function(contactApplication) {
        $.ajax({
            url: this.contactUrl,
            dataType: 'json',
            type: 'POST',
            data: contactApplication,
            success: function() {
                console.log('Contact application was successfully sent');
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.contactUrl, status, err.toString());
            }.bind(this)
        });
    },
    render: function() {
        return (
            <div className="contact-panel">
                <div className="title">
                    <h1>PROIN A RISUS</h1>
                    <h2>Vestibulum suscipit nib</h2>
                </div>
                <ContactForm onContactSubmit={this.handleContactSubmit}/>
                <div className="clear"></div>
            </div>
        )
    }
});

window.LinkPanel = React.createClass({
    render: function() {
        return (
            <div className="panel martop">
                <div className="title">
                    <h1>DUIS AT LACUS</h1>
                    <h2>Sed sagittis mi scelerisque</h2>
                </div>
                <div className="content">
                    <ul>
                        <li><a href="#">Posuere justo velitet laotinoc us</a></li>
                        <li><a href="#">Donec egestas diam sed odiotio</a></li>
                        <li><a href="#">Integer eu nibh vitae massa kun</a></li>
                        <li><a href="#">Lorem ipsum dolor sit amet, con</a></li>
                    </ul>
                </div>
                <div className="clear"></div>
            </div>
        )
    }
});

window.SearchPanel = React.createClass({
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
                            <input type="text" className="search-filed" value="search here..."/>
                        </li>
                        <li><img src="images/search-bt.jpg" alt="" /></li>
                    </ul>
                </div>
                <div className="clear"></div>
            </div>
        )
    }
});