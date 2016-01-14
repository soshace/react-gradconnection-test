import React from 'react';
import PagesText from './pages-text';
import MainContentRightPanel from '../common/right-panel';

export default React.createClass({
    render: function () {
        return (
            <div className="pagesPage">
                <div className="page padding-bottom">
                    <div className="content_wrap">
                        <PagesText />
                        <MainContentRightPanel />
                        <div className="clear"></div>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>
        )
    }
});