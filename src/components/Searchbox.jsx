import React from 'react';
import './Searchbox.css';
function Searchbox() {
    return (
        <div>
            <div className="container">
                <form action="" className="form">
                    <input type="text" placeholder="Enter Developer's username" />
                    <button className="button">Search</button>
                </form>
            </div>
        </div>
    );
}

export default Searchbox;
