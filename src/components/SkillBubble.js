import reactIcon from '../assets/skills/reactjs.png';

export default function SkillBubble() {
    return (
        <div className="skillBubble-container">
            <div className="skillBubble-icon-container">
                <img src={reactIcon} alt="ReactJS icon" className="skillBubble-icon"/>
            </div>
            <h3>ReactJS</h3>
            <p>Intermediate</p>
        </div>
    );
}