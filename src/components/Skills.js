import SkillBubble from './SkillBubble';

export default function Skills() {
    return (
        <div className="skills-content">
            <h1>Skills</h1>
            <hr className="skills-hr" />
            <div className="skills-bubbles">
                <SkillBubble />
                <SkillBubble />
                <SkillBubble />
            </div>
        </div>
    );
}