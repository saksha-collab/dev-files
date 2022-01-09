import React from 'react';
import './Team.css';
import img2 from '../image/img2.png';

function Team() {
    return (
        <section className="sec4" id="sec4">
            <div className="leftsec4">
                <img src={img2} />
            </div>
            <div className="rightsec4">
                <h1 className="heading sec4head">About DEV_FILES</h1>
                <p>
                    DEV_FILES is a react based platform where any developer can save their credentials of github,
                    codeforces, codechef, linked-in. A profile will then appear on the app with data fetched from the
                    given accounts. We also have included search functionality so that if you are unable to find someone
                    so you can type his username there and the developer will appear there.
                </p>
            </div>
        </section>
    );
}

export default Team;
