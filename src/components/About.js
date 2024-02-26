import '../App.css';
import experiencePic from "../images/experience.png"
import Arrow from "../components/Arrow"
function About() {
    return (
        <section id="about">
            <p className='section__text__p1'>Get To Know More..</p>
            <h1 className='title'>About Me</h1>
            <div className='section-container'>
                <div className='about-details-container'>
                    <div className='about-containers'>
                        <div className='details-container education_container'>
                            <img src={experiencePic} className='icon-about' alt="experience" />
                            <h1>Education</h1>
                            <p>B.Sc<br />Major in Computing Science With Minor in Mathematics</p>
                        </div>
                    </div>
                    <div className='text-container'><p>Greetings,<br />
                        &emsp;&emsp;&emsp;&emsp;Ambitious and motivated recent graduate with a Bachelor of Science in Computing Science and a Minor in Mathematics from Saint Mary's University. Skilled in various programming languages, frameworks, and technologies, including Java, JavaScript, SQL, Spring Boot, and Docker. Adept at collaborating within teams and passionate about learning and applying new technologies to real-world projects. Eager to leverage academic knowledge and technical skills to contribute effectively to software development projects in a professional setting.</p></div>
                </div>
            </div>
            <Arrow page={'./#skills'} />
        </section>
    );
}

export default About;
