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
                    <div className='text-container'><p>Grretings,<br />
                        &emsp;&emsp;&emsp;&emsp;I am Tushar Mahat, a recent graduate from Saint Mary's University, actively in pursuit of job opportunities. While my professional experience may be limited, I take pride in being a quick learner, driven by enthusiasm, and adept at problem-solving. My true passion is in the field of web development, and I also hold a deep enthusiasm for soccer. During my leisure hours, I often find solace in the immersive world of first-person shooter (FPS) games, where I take pleasure in refining my strategic and analytical skills.</p></div>
                </div>
            </div>
            <Arrow page={'./#skills'} />
        </section>
    );
}

export default About;
