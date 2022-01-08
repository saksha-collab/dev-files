import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css';

function App() {
    return (
        <>
            <Router>
                <div>
                    <nav className="container">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/header">header</Link>
                            </li>
                            <li>
                                <Link to="/footer">Footer</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/footer">
                            <Footer />
                        </Route>
                        <Route path="/header">
                            <Header />
                        </Route>
                        <Route path="/">
                            <Footer />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
