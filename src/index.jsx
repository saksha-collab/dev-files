import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './App.css';
import About from './components/About';
import AddButton from './components/AddButton';
import Team from './components/Team';
import Displayuser from './components/Displayuser';
import Usersate from './components/Usersate';

function App() {
    return (
        <Usersate>
            <Router>
                <div>
                    <Navbar />
                    <About />
                    {/* <Searchbox /> */}
                    <AddButton />
                    <Displayuser />
                    <Team />
                    <Footer />
                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/"></Route>
                    </Switch>
                </div>
            </Router>
        </Usersate>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
