import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './App.css';
import About from './components/About';

function App() {
    return (
        <>
            <Router>
                <div>
                    <Navbar />
                    <About />
                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
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
