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
        $.ajax({
            url: this.contactUrl,
            dataType: 'json',
            type: 'POST',
            data: contactApplication,
            success: () => {
                // Since there is no success message design mockup console.log() and alert() were used
                console.log('Contact application was successfully sent');
                alert('Contact application was successfully sent');
            },
            error: (xhr, status, err) => {
                // Since there is no error message design mockup console.warn() and alert() were used
                console.error(this.contactUrl, status, err.toString());
                alert('Error was occurred while sending contact application');
            }
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