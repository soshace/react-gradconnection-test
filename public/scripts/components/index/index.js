import React from 'react';
import Carousel from './carousel';
import News from './news';
import Persons from './persons';
import MainContentRightPanel from '../common/right-panel';

export default class extends React.Component {
    render() {
        return (
            <div className="homePage">
                <Carousel />
                <Persons />
                <div className="page padding-bottom">
                    <div className="content_wrap">
                        <News />
                        <MainContentRightPanel />
                        <div className="clear"></div>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>
        )
    }
};