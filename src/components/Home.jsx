import React, { Component } from 'react';
import hero from '../images/hero.jpg';

class Home extends Component {
    state = {  } 
    render() { 
        return (

            <React.Fragment>
                <div className="con" id='home'>
                    <div className="left">
                        <h1>Front-end Dev & Graphic Designer</h1>
                        <p>I am a Front-end Developer and Graphic Designer skilled in HTML, CSS, JavaScript, and design software. My portfolio showcases responsive web design and graphic design skills.</p>
                        <a href='#contact'>Contact us</a>
                    </div>
                    <div className="right">
                        <img
                        src={hero}
                        alt="Banner"
                            />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Home;