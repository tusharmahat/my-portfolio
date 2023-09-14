import '../App.css';
import linkedIn from "../images/linkedin.png"
import gitHub from "../images/github.png"
function Social() {
    const openLinkedIn = () => {
        window.location.href = 'https://www.linkedin.com/in/tushar-mahat/';
    }
    const openGitHub = () => {
        window.location.href = 'https://github.com/tusharmahat';
    }
    return (
        <div id="social-container">
            <img src={linkedIn} alt="linkedin" className='icon' id="linkedin_icon" onClick={openLinkedIn} />
            <img src={gitHub} alt="gitHub" className='icon' id="github_icon" onClick={openGitHub} />
        </div>
    );
}

export default Social;
