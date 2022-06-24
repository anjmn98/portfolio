import React from 'react';
import PROJECTS from '../data/project';

const Project = (props) => {

    //console.log('this.props', this.props);
    

    const{ title, image, link, description } = props.project;
    /* This line is equal to the below
    const title = this.props.project.title;
    const image = this.props.project.image;
    const description = this.props.project.description;
    const link = this.props.project.link;
    */

    return(
        <div style={{ display: 'inline-block', width: 300, margin: 10}}>
        <h3>{ title }</h3>
        <img src = { image } alt = 'profile' style={{width: 200, height: 120}} />
        <p>{ description }</p>
        <a href={ link }>{link}</a>
        </div>
        
    )
}


const Projects = () => (
    <div>
        <h2>Highlighted Projects</h2>
        <div>
            {
                PROJECTS.map(PROJECT => (
                        <Project key={PROJECT.id} project = {PROJECT} />
                    )
                )
            }
        </div>
    </div>
)

export default Projects;