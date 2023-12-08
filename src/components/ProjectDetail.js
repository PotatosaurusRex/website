import React from 'react';
import {useParams} from 'react-router-dom';
import projectData from "../helpers/projectData";

export default function ProjectDetail() {
    const {id} = useParams();
    const item = projectData.find(x => x.id == id);
    
    return (
        <div className="projDetail-container">
            <div className="projDetail-text">
                <h1 className="projDetail-header">{item.title}</h1>
                <div className="projDetail-content">
                    <h2>{item.language}</h2>
                    <p className="projDetail-p">{item.description}</p>
                </div>
            </div>
            <img src={item.thumbnail} alt="Game thumbnail" className="projDetail-thumbnail"/>
        </div>
    );
}