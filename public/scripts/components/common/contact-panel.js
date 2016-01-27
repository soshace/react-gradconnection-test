'use strict';

import React from 'react';
import ContactForm from './contact-form';
import { connect } from 'react-redux';

class ContactPanel extends React.Component {
    constructor(props) {
        super(props);

        this.contactUrl = "/api/contacts";

        this.handleContactSubmit = this.handleContactSubmit.bind(this);
    }

    handleContactSubmit(contactApplication) {
        this.props.sendContact();

        fetch(this.contactUrl, {
            method: 'POST',
            body: JSON.stringify(contactApplication),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(() => {
            this.props.sendContactSuccess();
        })
        .catch((error) => {
            this.props.sendContactFail();
        });
    }

    render() {
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
}

function mapStateToProps(state) {
    return {
        contactFormEvents: {
            isFetching: state.contactFormEvents.isFetching,
            status: state.contactFormEvents.status
        }
    };
}

function mapDispatchToProps(dispatch) {
    return {
        sendContact: () => { (dispatch({ type: 'SEND_CONTACT' })) },
        sendContactFail: () => { (dispatch({ type: 'SEND_CONTACT_FAIL' })) },
        sendContactSuccess: () => { (dispatch({ type: 'SEND_CONTACT_SUCCESS' })) }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactPanel);