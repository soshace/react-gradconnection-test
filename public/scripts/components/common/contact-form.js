'use strict';

import React from 'react';
import { connect } from 'react-redux';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.props.changeName(event.target.value);
    }

    handleEmailChange(event) {
        this.props.changeEmail(event.target.value);
    }

    handleMessageChange(event) {
        this.props.changeMessage(event.target.value);
    }

    handleSubmit(event) {
        event.preventDefault();
        var name    = this.props.contactFormFieldsEvents.name.trim(),
            email   = this.props.contactFormFieldsEvents.email.trim(),
            message = this.props.contactFormFieldsEvents.message.trim();

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

        this.props.changeName('');
        this.props.changeEmail('');
        this.props.changeMessage('');
    }

    validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    render() {
        return (
            <div>
                <div className="form">
                    <ul>
                        <li>
                            <input
                                type="text"
                                className="text-field"
                                placeholder="your name here"
                                value={this.props.contactFormFieldsEvents.name}
                                onChange={this.handleNameChange}
                            />
                        </li>
                        <li>
                            <input
                                type="text"
                                className="text-field"
                                placeholder="your email here"
                                value={this.props.contactFormFieldsEvents.email}
                                onChange={this.handleEmailChange}
                            />
                        </li>
                        <li>
                            <textarea
                                cols=""
                                rows=""
                                className="textarea"
                                placeholder="your message here"
                                value={this.props.contactFormFieldsEvents.message}
                                onChange={this.handleMessageChange}
                            />
                        </li>
                    </ul>
                    <div className="clear"></div>
                </div>
                <div className="controller">
                    <div className="buttons">
                        <h2>
                            <a href="#" onClick={this.handleSubmit}>
                                {!this.props.contactFormEvents.isFetching && <p>SUBMIT</p>}
                                {this.props.contactFormEvents.isFetching && <p>SENDING</p>}
                            </a>
                        </h2>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        contactFormFieldsEvents: {
            name: state.contactFormFieldsEvents.name,
            email: state.contactFormFieldsEvents.email,
            message: state.contactFormFieldsEvents.message
        },
        contactFormEvents: {
            isFetching: state.contactFormEvents.isFetching,
            status: state.contactFormEvents.status
        }
    };
}

function mapDispatchToProps(dispatch) {
    return {
        changeName: (name) => { (dispatch({ type: 'CHANGE_NAME', name })) },
        changeEmail: (email) => { (dispatch({ type: 'CHANGE_EMAIL', email })) },
        changeMessage: (message) => { (dispatch({ type: 'CHANGE_MESSAGE', message })) }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);