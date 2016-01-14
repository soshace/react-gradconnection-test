import React from 'react';
import AboutText from './about-text';
import MainContentRightPanel from '../common/right-panel';

export default React.createClass({
    render: function () {
        return (
            <div className="aboutPage">
                <div className="page padding-bottom">
                    <div className="content_wrap">
                        <AboutText />
                        <MainContentRightPanel />
                        <div className="clear"></div>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>
        )
    }
});