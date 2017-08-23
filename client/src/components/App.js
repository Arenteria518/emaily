import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions'

import Header from './Header';
import Landing from './Landing';
const Dashboard = () => <h2>DashBoard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

class App extends Component{
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div className="container">
                <Header/>
                <BrowserRouter>
                    <Switch>
                        <Route path="/surveys/new" component={SurveyNew}/>
                        <Route path="/surveys" component={Dashboard}/>
                        <Route path="/" component={Landing}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
};

export default connect(null, actions)(App);