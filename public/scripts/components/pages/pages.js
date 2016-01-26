import React from 'react';
import PagesText from './pages-text';
import MainContentRightPanel from '../common/right-panel';

export default class extends React.Component {
    render() {
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
};