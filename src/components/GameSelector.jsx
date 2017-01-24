import React from 'react';
import { Link } from 'react-router';

class GameSelector extends React.Component {
    render() {
        return (
            <div>
                <div>GameSelector Component</div>
                <Link to='login'>Login</Link>
            </div>
        );
    }
}

export default GameSelector;
