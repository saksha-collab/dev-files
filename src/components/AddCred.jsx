import React from 'react';
import './AddCred.css';

function AddCred() {
    return (
        <div>
            <div className="dock">
                <h3>Please, Enter your details</h3>
                <form action="" className="fillup">
                    <input type="text" placeholder="github username" />
                    <input type="text" placeholder="codeforces username" />
                    <input type="text" placeholder="leetcode username" />
                    <input type="text" placeholder="linkedin username" />
                </form>
            </div>
        </div>
    );
}

export default AddCred;
