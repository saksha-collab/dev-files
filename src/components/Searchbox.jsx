import React, { useContext } from 'react';
import './Searchbox.css';
import Usercontext from './Usercontext';
function Searchbox() {
    let { User, setUser } = useContext(Usercontext);
    const handleChange = (e) => {
        let newdata = User.filter((val) => {
            console.log(e.target.value);
            if (e.target.value == '') {
                return val;
            } else if (val.githubid.includes(e.target.value)) {
                return val;
            }
        });
        setUser(newdata);
    };
    return (
        <div className="box">
            <div className="cot">
                <form action="" className="form">
                    <input type="text" placeholder="Enter Developer's username" onChange={handleChange} />
                    <button className="button">Search</button>
                </form>
            </div>
        </div>
    );
}

export default Searchbox;
