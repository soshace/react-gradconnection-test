import React from 'react';
import ReactRouter from 'react-router';
import { Router } from 'react-router';
import { Route } from 'react-router';
import { Redirect } from 'react-router';
import App from '../components/app';
import Index from '../components/index/index';
import About from '../components/about/about';
import Services from '../components/services/services';
import Work from '../components/work/work';
import Pages from '../components/pages/pages';
import Contact from '../components/contact/contact';

export default (
    <Router>
        <Redirect from="/" to="index"/>
        <Route path="/" component={App}>
            <Route path="index"    component={Index} />
            <Route path="about"    component={About} />
            <Route path="services" component={Services}/>
            <Route path="work"     component={Work}/>
            <Route path="pages"    component={Pages}/>
            <Route path="contact"  component={Contact}/>
        </Route>
    </Router>
);