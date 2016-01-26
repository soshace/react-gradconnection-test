import React from 'react';
import Portfolio from './portfolio';

export default class extends React.Component {
    render() {
        return (
            <div className="workPage">
                <div className="page padding-bottom">
                    <div className="content_wrap">
                        <Portfolio />
                        <div className="clear"></div>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>
        )
    }
};