import React from 'react';
import './About.css';
import img1 from '../image/img1.png';

function About() {
    return (
        <section className="sec1">
            <div className="box-main">
                <div className="first-half">
                    <div>
                        <img className="img_hover" src={img1} />
                    </div>
                </div>
                <div className="second-half">
                    <h1>DEV_FILES</h1>
                </div>
            </div>
        </section>
    );
}

export default About;
