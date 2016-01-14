import React from 'react';

export default React.createClass({
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