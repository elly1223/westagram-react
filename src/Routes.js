import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Nav from './Component/Nav';

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Nav />
                <switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/main" component={Main} />
                </switch>
            </Router>
        );
    }
}

export default Routes;
