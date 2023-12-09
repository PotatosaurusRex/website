import React from 'react';
import back from '../assets/background.jpg';

export default function Home() {
    return (
        <div className="home-content">
            <p className="home-p">
                Hi! Welcome to my page. My name is...
            </p>

            <h1 className="home-name">Rick Nguyen</h1>
            <hr className="home-hr"/>
            <h2 className="home-desc">
                Get to know me, and take a look at my projects!
            </h2>
        </div>
    );
}