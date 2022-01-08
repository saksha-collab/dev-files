import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './App.css';
import About from './components/About';
import Searchbox from './components/Searchbox';
import AddButton from './components/AddButton';
import Team from './components/Team';

function App() {
    return (
        <>
            <Router>
                <div>
                    <Navbar />
                    <About />
                    <Searchbox />
                    <p>hello</p>
                    <AddButton />
                    <Team />
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