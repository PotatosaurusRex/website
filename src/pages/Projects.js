import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Link} from 'react-router-dom';

import ProjectCard from '../components/ProjectCard';
import ProjectDetail from '../components/ProjectDetail';
import projectData from "../helpers/projectData";

export default function Projects() {
    const projects = projectData.map(item => {
        return (
            // <Link to="/projects/1">
            <Link to={`/projects/${item.id}`} >
                <ProjectCard 
                    key={item.id}
                    item={item}
                />
            </Link>
        )
    })
    return (
        <div className='project-content'>
            <h1 className='project-header'>Take a look at my stuff...</h1>
            <div className='project-list'>
                {projects}
            </div>
        </div>
    );
}