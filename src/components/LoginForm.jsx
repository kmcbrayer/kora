import React from 'react';
import { Link } from 'react-router';

class LoginForm extends React.Component {
    render() {
        return (
            <div className="full-page">
                <div>LoginForm Component</div>
                <Link to="/">Home</Link>
            </div>
        );
    }
}

export default LoginForm;
