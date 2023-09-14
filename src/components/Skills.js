import '../App.css';
import checkmark from "../images/checkmark.png"
import Arrow from "../components/Arrow"
function Skills() {
    return (
        <section id="skills">
            <p className='section__text__p1'>Explore My</p>
            <h1 className='title'>Skills</h1>
            <div className='skill-details-container'>
                <div className='about-containers'>
                    <div className='details-container'>
                        <h2 className='skill-sub-title'>Frontend Development</h2>
                        <div className='article-container'>
                            <article>
                                <img src={checkmark} alt="checkmark" className='icon icon-checkmark' />
                                <div><h3>HTML</h3>
                                    <p>Experienced</p></div>
                            </article>
                            <article>
                                <img src={checkmark} alt="checkmark" className='icon icon-checkmark' />
                                <div><h3>CSS</h3>
                                    <p>Intermediate</p></div>
                            </article>
                            <article>
                                <img src={checkmark} alt="checkmark" className='icon icon-checkmark' />
                                <div><h3>JavaScript</h3>
                                    <p>Intermediate</p></div>
                            </article>
                            <article>
                                <img src={checkmark} alt="checkmark" className='icon icon-checkmark' />
                                <div><h3>React</h3>
                                    <p>Basic</p></div>
                            </article>
                            <article>
                                <img src={checkmark} alt="checkmark" className='icon icon-checkmark' />
                                <div><h3>TypeScript</h3>
                                    <p>Basic</p></div>
                            </article>
                            <article>
                                <img src={checkmark} alt="checkmark" className='icon icon-checkmark' />
                                <div><h3>Bootstrap</h3>
                                    <p>Basic</p></div>
                            </article>
                        </div>
                    </div>
                    <div className='details-container'>
                        <h2 className='skill-sub-title'>Backend Development</h2>
                        <div className='article-container'>
                            <article>
                                <img src={checkmark} alt="checkmark" className='icon icon-checkmark' />
                                <div><h3>MySQL</h3>
                                    <p>Intermediate</p></div>
                            </article>
                            <article>
                                <img src={checkmark} alt="checkmark" className='icon icon-checkmark' />
                                <div><h3>Nodejs</h3>
                                    <p>Intermediate</p></div>
                            </article>
                            <article>
                                <img src={checkmark} alt="checkmark" className='icon icon-checkmark' />
                                <div><h3>MongoDB</h3>
                                    <p>Basic</p></div>
                            </article>
                            <article>
                                <img src={checkmark} alt="checkmark" className='icon icon-checkmark' />
                                <div><h3>Git</h3>
                                    <p>Basic</p></div>
                            </article>
                            <article>
                                <img src={checkmark} alt="checkmark" className='icon icon-checkmark' />
                                <div><h3>Express JS</h3>
                                    <p>Basic</p></div>
                            </article>

                        </div>
                    </div>
                </div>
            </div>
            <Arrow page={'./#projects'} />
        </section>
    );
}

export default Skills;
