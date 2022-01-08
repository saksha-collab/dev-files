import React from 'react';
import './About.css';
import img1 from '../image/img1.jpg';

function About() {
    return (
        <div>
            {' '}
            <div className="About">
                <div className="secondhalf">
                    <h2>DEV_FILES</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quisquam tenetur ea dicta,
                        officiis doloribus commodi saepe, nam reiciendis corrupti eum blanditiis explicabo iusto quis
                        ipsam architecto ducimus deserunt alias!
                    </p>
                </div>
                <div className="firsthalf">
                    <img src={img1} />
                </div>
            </div>
        </div>
    );
}

export default About;
