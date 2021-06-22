import React from 'react';
import { withRouter } from 'react-router-dom';

class Nav extends React.Component {
    goToMain = () => {
        this.props.history.push('/main');
    };

    goToLogin = () => {
        this.props.history.push('/');
    };

    render() {
        return (
            <nav>
                <button onClick={this.goToLogin}>LoginPage</button>
                <button onClick={this.goToMain}>MainPage</button>
            </nav>
        );
    }
}

export default withRouter(Nav);
