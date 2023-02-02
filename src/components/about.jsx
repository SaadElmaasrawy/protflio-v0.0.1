import React, { Component } from 'react';

class About extends Component {
    state = {  } 
    render() { 
        return (
            <div className='about-con' id='about'>
                <h1>About us</h1>
                <p>
                Welcome to SE DEV, a portfolio website showcasing the work of front-end developer, Saad El-maasrawy. 
                </p>
                <p>
                As a front-end developer, I specialize in creating visually appealing and user-friendly websites and web applications. I have a strong understanding of HTML, CSS, and JavaScript and am experienced in using various front-end frameworks such as Bootstrap and React.
                </p>
                <p>
                My goal is to create websites that not only look great, but also perform well and provide a seamless user experience. I am passionate about staying up-to-date with the latest web development trends and technologies, and am always looking for new ways to improve my skills.</p>
                <p>
                In this portfolio, you will find a selection of my past projects, including both personal and professional work. From simple landing pages to complex web applications, I have experience working on a wide range of projects.</p>
                <p>
                Thank you for visiting SE DEV. I hope you enjoy browsing my portfolio and feel free to contact me if you have any questions or would like to discuss a project.<br/>
                </p>
            </div>
        );
    }
}
 
export default About;