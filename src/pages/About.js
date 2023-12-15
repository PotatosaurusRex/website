import React from 'react';
import portrait from '../assets/portraitgood.jpg';
import portrait2 from '../assets/portrait6.webp';
import portrait3 from '../assets/portrait5.jpg';

import Skills from '../components/Skills';

export default function About() {
    return (
    <div>
        <div className="about-content">
            <div>
                <h1 className="about-header">Hi, my name is Rick Nguyen...</h1>
                <p className="about-p">
                    I am a 2nd year CS major at Georgia Tech
                    with threads in Media and Info/Internetworks. In the past, I have worked
                    as a tutor at my local university to help students with subjects like
                    math, chemistry, and computer science. I also occasionally visit my
                    local high school to provide one-to-one music lessons with the 
                    orchestra students. These experiences have helped me develop skills
                    needed to work with people of all backgrounds. In the meantime, you can 
                    catch me coding at a library or playing violin at the GT Symphony Orchestra.
                </p>
            </div>
            <img src={portrait2} alt="Portrait" className="portrait"/>
        </div>
        <Skills />
    </div>
    );
}