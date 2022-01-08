import React from 'react';
import { useState } from 'react';
import Usercontext from './Usercontext';
function Usersate(props) {
    const host = 'http://localhost:4000';
    const [User, setUser] = useState([]);
    const Getuser = async () => {
        const response = await fetch(`/fetchdata`, {
            method: 'GET',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = await response.json();
        setUser(json);
        console.log(json);
    };
    const Adduser = async (element) => {
        const githubid = element.githubid;
        const codeforcesid = element.codeforcesid;
        let codechefid = element.codechefid;
        let Linkedin = element.Linkedin;
        const response = await fetch(`${host}/adddata`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({ githubid, codeforcesid, codechefid, Linkedin }),
        });
        const json = await response.json();
        console.log(json);
        Getuser();
    };
    const Deluser = async (id) => {
        const response = await fetch(`${host}/deletedata/${id}`, {
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(response);
        console.log('deleted ' + id);
        Getuser();
    };
    return (
        <Usercontext.Provider value={{ User, Adduser, Deluser, Getuser, setUser }}>
            {props.children}
        </Usercontext.Provider>
    );
}
export default Usersate;
