import React, { Component } from 'react';


class Skills extends Component {
    state = { 
        skills :[
            {
                id: 1,
                name: 'HTML',
                level: 100
            },
            {
                id: 2,
                name: 'CSS',
                level: 100
            },
            {
                id: 3,
                name: 'JavaScript',
                level: 90
            },
            {
                id: 4,
                name: 'React',
                level: 60
            }
        ]
     } 
    render() { 
        return (
            <div className="skills-con" id='skills'>
                <div className="header">
                <h1>Skills</h1>
                <p>Showcase your expertise and accomplishments on our skills section, highlighting your technical and professional abilities, including programming languages, design software, certifications, and transferable skill</p>
                </div>
                {this.state.skills.map((skill)=>{
                    return(
                        <div className="skills-list">
                            <div className="skill" key={skill.id}>
                                <h2>{skill.name}</h2>
                                <div className="progress-bar">
                                    <p style={ {width:`${skill.level}%`}} >{skill.level}%</p>

                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}
 
export default Skills;