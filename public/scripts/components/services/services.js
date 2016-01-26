import React from 'react';
import ServicesText from './services-text';
import MainContentRightPanel from '../common/right-panel';

export default class extends React.Component {
    render() {
        return (
            <div className="servicesPage">
                <div className="page padding-bottom">
                    <div className="content_wrap">
                        <ServicesText />
                        <MainContentRightPanel />
                        <div className="clear"></div>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>
        )
    }
};