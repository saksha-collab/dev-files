import React from 'react';
// import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import Usercontext from './Usercontext';
import Useritem from './Useritem';
function Displayuser() {
    const context = useContext(Usercontext);
    console.log(context);
    const User = context.User;
    const Getuser = context.Getuser;
    useEffect(() => {
        Getuser();
    }, []);
    return (
        <div className="container">
            <div className="row">
                {User.map((element) => {
                    return <Useritem ele={element} key={element._id} />;
                })}
            </div>
        </div>
    );
}

export default Displayuser;
