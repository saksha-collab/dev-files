import React from 'react';
import './AddCred.css';
import { useContext } from 'react';
import Usercontext from './Usercontext';
import { useState } from 'react';
function AddCred() {
    let { Adduser, Getuser } = useContext(Usercontext);
    const [data, setdata] = useState({ githubid: '', codeforcesid: '', codechefid: '', Linkedin: '' });
    const handleclick = (e) => {
        e.preventDefault();
        console.log(data);
        Adduser(data);
        Getuser();
    };
    const handleChange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value });
    };
    return (
        <div>
            <div className="dock">
                <h3>Please, Enter your details</h3>
                <form className="fillup">
                    <input type="text" name="githubid" placeholder="github username" onChange={handleChange} />
                    <input type="text" name="codeforcesid" placeholder="codeforces username" onChange={handleChange} />
                    <input type="text" name="codechefid" placeholder="leetcode username" onChange={handleChange} />
                    <input type="text" name="Linkedin" placeholder="linkedin username" onChange={handleChange} />
                </form>
                <button className="btn" type="submit" onClick={handleclick}>
                    Submit
                </button>
            </div>
        </div>
    );
}

export default AddCred;
