import '../App.css';
import aboutPic from "../images/about.jpg"
import experiencePic from "../images/experience.png"
import Arrow from "../components/Arrow"
function About() {
    return (
        <section id="about">
            <p className='section__text__p1'>Get To Know More..</p>
            <h1 className='title'>About Me</h1>
            <div className='section-container'>
                <div className='section__pic-container section__margin'>
                    <img src={aboutPic} className='about-pic' alt="profile" />
                </div>
                <div className='about-details-container'>
                    <div className='about-containers'>
                        <div className='details-container'>
                            <img src={experiencePic} className='icon-about' alt="experience" />
                            <h1>Education</h1>
                            <p>B.Sc<br />Major in Computing Science With Minor in Mathematics</p>
                        </div>

                        <div className='details-container'>
                            <img src={experiencePic} className='icon-about' alt="experience" />
                            <h1>Experience</h1>
                            <p>Bachelor of Science<br />Major in Computing Science With Minor in Mathematics</p>
                        </div>

                    </div>
                    <div className='text-container'><p>Hello, I'm Tushar Mahat, a recent graduate from Saint Mary's University actively seeking job opportunities. While I may not have professional experience, I'm a fast learner, enthusiastic, and a problem solver. My passion lies in web development, and I'm also an avid soccer enthusiast.</p></div>
                </div>
            </div>
            <Arrow page={'./#skills'} />
        </section>
    );
}

export default About;
