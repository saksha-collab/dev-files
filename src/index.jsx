import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './App.css';
import About from './components/About';
import AddButton from './components/AddButton';
import Team from './components/Team';
import Displayuser from './components/Displayuser';
import Usersate from './components/Usersate';
import AddCred from './components/AddCred';

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
                    <AddCred />
                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Routes>
                        <Route exact path="/"></Route>
                        <Route exact path="/submitDetails" element={<AddCred />}></Route>
                    </Routes>
                </div>
            </Router>
        </Usersate>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
