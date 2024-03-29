import React from 'react';
import { useState, useEffect } from 'react';

function Useritem(props) {
    const ele = props.ele;
    const [img, setImg] = useState('');

    useEffect(async () => {
        const data = await gettingmore(ele.githubid);
        console.log(data.avatar_url);
        setImg(data.avatar_url);
    }, [img]);

    const gettingmore = async (x) => {
        console.log(x);
        let data = await fetch(`https://api.github.com/users/${x}`);
        data = await data.json();
        return data;
    };

    return (
        <>
            <div
                className="card my-3"
                style={{
                    width: '18rem',
                }}
            >
                <img
                    src={
                        img
                            ? img
                            : 'https://img.search.brave.com/6xgDU7tJsUF77N9rdOO2WKXBWsmVeTJ864s4ijukG3Q/fit/860/789/ce/1/aHR0cHM6Ly93d3cu/a2luZHBuZy5jb20v/cGljYy9tLzQ5NS00/OTUyNTM1X2NyZWF0/ZS1kaWdpdGFsLXBy/b2ZpbGUtaWNvbi1i/bHVlLXVzZXItcHJv/ZmlsZS1pY29uLnBu/Zw'
                    }
                    className="card-img-top"
                    alt="..."
                    style={{ width: '17.7rem', height: '10rem' }}
                />
                <div className="card-body">
                    <h5 className="card-title">{ele.githubid}</h5>
                    <p className="card-text">Followers : {ele.githubfollowers}</p>
                    <p className="card-text">Following : {ele.githubfollowing}</p>
                    <button className="btn-primary">More Info</button>
                </div>
            </div>
        </>
    );
}
export default Useritem;
