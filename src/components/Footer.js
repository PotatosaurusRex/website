import github from '../assets/icons/github.png';
import gmail from '../assets/icons/gmail.png';
import instagram from '../assets/icons/instagram.png';
import linkedin from '../assets/icons/linkedin.png';

export default function Foooter() {
    let width = 30;
    let height = 30;
    return (
        <div className="footer-content">
            <p>© 2023 Rick Nguyen</p>
            <a href="https://github.com/PotatosaurusRex">
                <img border="0" alt="github" src={github} width={width} height={height}/>
            </a>
            <a href="mailto:rick248nguyen@gmail.com">
                <img border="0" alt="gmail" src={gmail} width={width} height={height}/>
            </a>
            <a href="https://www.instagram.com/rexyricc">
                <img border="0" alt="ig" src={instagram} width={width} height={height}/>
            </a>
            <a href="https://www.linkedin.com/in/rick-nguyen2/">
                <img border="0" alt="linkedin" src={linkedin} width={width} height={height}/>
            </a>
        </div>
    )
}