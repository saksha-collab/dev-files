import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    return (
        <Router>
            {
                <Switch>
                    <Route exact path="/" component={''} />
                    <Route exact path="/profile" component={''} />
                </Switch>
            }
        </Router>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
