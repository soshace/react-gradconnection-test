import React from 'react';
import Contacts from './contacts';
import MainContentRightPanel from '../common/right-panel';

export default React.createClass({
    render: function () {
        return (
            <div className="contactPage">
                <div className="page padding-bottom">
                    <div className="content_wrap">
                        <Contacts />
                        <MainContentRightPanel />
                        <div className="clear"></div>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>
        )
    }
});