import React from 'react';

export default function ProjectCard(props) {
    return (
        <div className="projectCard-content">
            <img src={props.item.thumbnail} alt="Game thumbnail" className="projectCard-thumbnail"/>
            <div className="projectCard-title">
                <p>{props.item.title}</p>
                <p>{props.item.language}</p>
            </div>
        </div>
    );
}