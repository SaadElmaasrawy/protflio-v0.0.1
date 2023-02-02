import React, { Component } from 'react'
import card from '../images/projectsImg/card.png'
import quiz from '../images/projectsImg/quiz.png'
import qr from '../images/projectsImg/qr.png'

class Projects extends Component {
    state = { 
        project:[
            {title : 'Quiz',
            src : quiz,
            link: 'https://quiz-app-red-eight.vercel.app/'
        },
            {
                title : 'QR Code page',
                src : qr,
                link: 'https://qr-code-component-main-iota.vercel.app/'
                
            },
            {
                title : 'card',
                src : card,
                link: 'https://card02.vercel.app/'
    
            }

        ]
     } 
    render() { 
        return (

            <div className='projects-con'id='Projects'>
                <div className="projects-header">
                    <h1>Projects</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Corporis, harum ad. Magni rem a fugit amet.</p>
                </div>
                <div className="project">
                        {this.state.project.map((project) =>(
                            <div key={project.title}>
                                <a href={project.link} target="_blank" rel="noreferrer">
                                    <img src={project.src}alt={project.title} />
                                    <h2>{project.title}</h2>
                                </a>
                            </div>
                        ) )}
                </div>

            </div>
        );
    }
}
 
export default Projects;