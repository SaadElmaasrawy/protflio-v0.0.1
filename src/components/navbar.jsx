import React, { Component } from 'react'

class Navbar extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <nav>
                    <h1><a href='#home'>SE DEV</a></h1>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#Projects">Projects</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>

            </React.Fragment>
        );
    }
}
 
export default Navbar;