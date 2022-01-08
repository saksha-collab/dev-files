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
                <h1 className="heading sec4head">All About Us</h1>
                <p>
                    We are the tech based startup in the online real estate space. We aim to ease and innovative the
                    whole concept of booking and renting a house in the real estate sector. With the help of modern
                    advancements we focus on making the whole process of renting and finding a suitable house very
                    convenient and easy within the tips of your finger. Led by passionate problem solvers and our
                    dedicated development team, we are poised to become the brand that you will seek whenever you
                    thought for booking a rental house.
                </p>
            </div>
        </section>
    );
}

export default Team;
