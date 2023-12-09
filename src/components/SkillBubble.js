import reactIcon from '../assets/skills/reactjs.png';

export default function SkillBubble(props) {
    return (
        <div className="skillBubble-container">
            <div className="skillBubble-icon-container">
                <img src={props.item.icon} alt="Language icon" className="skillBubble-icon"/>
            </div>
            <h3>{props.item.language}</h3>
            <p>{props.item.level}</p>
        </div>
    );
}