import SkillBubble from './SkillBubble';
import skillData from '../helpers/skillData';

export default function Skills() {
    const skillBubbles = skillData.map(item => {
        return <SkillBubble key={item.id} item={item} />
    });

    return (
        <div className="skills-content">
            <h1>Skills</h1>
            <hr className="skills-hr" />
            <div className="skills-bubbles">
                {skillBubbles}
            </div>
        </div>
    );
}