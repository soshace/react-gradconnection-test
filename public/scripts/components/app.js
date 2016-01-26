import React from 'react';
import SocialHeader from './common/social-header';
import SiteMenu from './common/site-menu';
import Footer from './common/footer';

export default class extends React.Component {
    render() {
        return (
            <div className="appComponent">
                <SocialHeader />
                <SiteMenu />
                {this.props.children}
                <Footer />
            </div>
        )
    }
};