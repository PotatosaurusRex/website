import React from 'react';
import unityGame from '../assets/thumbnails/UnityGame.png';

export default function Project(props) {
    return (
        /*
        <div className="projectCard-content">
            <img src={unityGame} alt="Game thumbnail" className="projectCard-thumbnail"/>
            <div className="projectCard-title">
                <p>No Name</p>
                <p>Unity/C#</p>
            </div>
        </div>
        */
        <div className="projectCard-content">
        <img src={props.item.thumbnail} alt="Game thumbnail" className="projectCard-thumbnail"/>
        <div className="projectCard-title">
            <p>{props.item.title}</p>
            <p>{props.item.language}</p>
        </div>
    </div>
    );
}