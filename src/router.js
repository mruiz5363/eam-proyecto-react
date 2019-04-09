import React from 'react'
import Posts from './containers/Posts/Posts'
import Albums from './containers/Albums/Albums'

import './Pane.css';

import { BrowserRouter, Route, Switch } from
    'react-router-dom';

import App from './App';
import Panel from './components/Panel/Panel';
import NotFound from './components/NotFound/NotFound';

const Router = () => {


    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={App} />
            <Route path="/panel" component={Panel} />
            <Route path="/albums" component={Albums} />
            <Route path="/posts" component={Posts} />

            <Route component={NotFound} />


        </Switch>
    </BrowserRouter>
    )
    
    };

export default Router;