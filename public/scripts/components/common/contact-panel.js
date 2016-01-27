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

    componentWillReceiveProps(nextProps) {
        if (nextProps.contactFormEvents.status === 'success') {
            // Since there is no success message design mockup console.log() and alert() were used
            console.log('!! Contact application was successfully sent');
            alert('Contact application was successfully sent');
        } else if (nextProps.contactFormEvents.status === 'fail') {
            // Since there is no error message design mockup console.warn() and alert() were used
            console.error(error);
            alert('Error was occurred while sending contact application');
        }
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