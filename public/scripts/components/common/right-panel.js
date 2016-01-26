import React from 'react';
import ContactPanel from './contact-panel';
import LinkPanel from './link-panel';
import SearchPanel from './search-panel';

export default class extends React.Component {
    render() {
        return (
            <div className="right-panel">
                <ContactPanel />
                <div className="clear"></div>
                <LinkPanel />
                <div className="clear"></div>
                <SearchPanel />
                <div className="clear"></div>
            </div>
        )
    }
};