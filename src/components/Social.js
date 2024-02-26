import '../App.css';
import linkedIn from "../images/linkedin.png"
import gitHub from "../images/github.png"
function Social() {
    const openLinkedIn = () => {
        window.location.href = 'https://www.linkedin.com/in/tushar-mahat/';
    }
    return (
        <div id="social-container">
            {/* <button className="btn-holder">   <img src={linkedIn} alt="linkedin" className='icon' id="linkedin_icon" onClick={openLinkedIn} onDragStart={(event) => event.preventDefault()} /></button> */}
            <button className="btn-holder">
                <img src={gitHub} alt="gitHub" className='icon' id="github_icon" onClick={openGitHub} onDragStart={(event) => event.preventDefault()} /></button>
        </div>
    );
}

export default Social;
