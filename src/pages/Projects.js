import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Project from '../components/Project';
import projectData from "../helpers/projectData";

export default function Projects() {
    const projects = projectData.map(item => {
        return (
            <Project 
                key={item.id}
                item={item}
            />
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