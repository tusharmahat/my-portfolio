import '../App.css';
import resume from "../assets/resume.pdf"
// import profilePic from "../images/profile.jpeg";
import Social from "./Social.js";
import Arrow from "../components/Arrow"

function Profile() {
    const openResume = () => {
        window.open(resume);
    }
    const openContact = () => {
        window.location.href = './#contact';
    }

    // const goToHome = () => {
    //     window.location.href = '/';
    // }
    return (
        <section id="profile">
            {/* <div className="section__pic-container" onClick={goToHome}>
                <img id="profile_pic" src={profilePic} alt="tushar's profile" onDragStart={(event) => event.preventDefault()} />
            </div> */}
            <div className="section__text text">
                <p className='section_text_p1'>Hello, I'm</p>
                <h1 className="title">Tushar Mahat</h1>
                <p className='section__text_p2'>Developer</p>
                <div className='btn-container'>
                    <button className="btn btn-color-2" onClick={openResume}>Download resume</button>
                    <button className="btn btn-color-1" onClick={openContact}>Contact Info</button>
                </div>
                <Social />
            </div>
            <Arrow page={'./#about'} />
        </section>
    );
}

export default Profile;
