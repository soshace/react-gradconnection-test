'use strict';

import React from 'react';
import ContactForm from './contact-form';

export default class extends React.Component {
    constructor(props) {
        super(props);

        // hardcoded for test purposes since used another server for backend
        this.contactUrl = "http://localhost:3000/api/contacts";

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
};