import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
    render() {
        return (
            <div>
                <div>App Component</div>
                <Link to='login'>Login</Link>
            </div>
        );
    }
}

export default App;
