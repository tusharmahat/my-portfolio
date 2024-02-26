import '../App.css';
// import linkedIn from "../images/linkedin.png"
import gitHub from "../images/github.png"
function Social() {

    const openGitHub = () => {
        window.location.href = 'https://github.com/tusharmahat';
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
