import React, { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import Usercontext from './Usercontext';
import Useritem from './Useritem';
import './Searchbox.css';
function Displayuser() {
    const context = useContext(Usercontext);
    console.log(context);
    const User = context.User;
    const Getuser = context.Getuser;
    useEffect(() => {
        Getuser();
    }, []);
    let [search, setsearch] = useState('');
    const handleChange = (e) => {
        setsearch(e.target.value);
    };
    return (
        <>
            <div className="box">
                <div className="cot">
                    <form action="" className="form">
                        <input type="text" placeholder="Enter Developer's username" onChange={handleChange} />
                        <button className="button">Search</button>
                    </form>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {User.filter((val) => {
                        console.log(search);
                        if (search == '') {
                            return val;
                        } else if (val.githubid.includes(search)) {
                            return val;
                        }
                    }).map((element) => {
                        return <Useritem ele={element} key={element._id} />;
                    })}
                </div>
            </div>
        </>
    );
}

export default Displayuser;
