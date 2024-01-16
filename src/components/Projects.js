import '../App.css';
import dashboard from "../assets/dashboard.png"
import pagination from "../assets/pagination.png"
import email from "../assets/email.png"
import portfolio from "../assets/portfolio.png"
import clothingstore from "../assets/clothingstore.png"
import Arrow from "../components/Arrow"
function Projects() {
    const openDashboardDemo = () => {
        window.location.href = "https://info-viz-dashboard.onrender.com/";
    }
    const openDashboardGithub = () => {
        window.location.href = "https://github.com/tusharmahat/visualizationDashBoard";
    }

    const openPaginationDemo = () => {
        window.location.href = "https://hacker-news-pagination.netlify.app/";
    }
    const openPaginationGithub = () => {
        window.location.href = "https://github.com/tusharmahat/hackernews-pagination";
    }
    const openEmailDemo = () => {
        window.location.href = "https://email-system.onrender.com";
    }
    const openEmailGithub = () => {
        window.location.href = "https://github.com/tusharmahat/email-system";
    }
    const openPortfolioDemo = () => {
        window.location.href = "/#home";
    }
    const openPortfolioGithub = () => {
        window.location.href = "https://github.com/tusharmahat/my-portfolio";
    }
    const openClothingStoreDemo = () => {
        window.location.href = "http://ps.cs.smu.ca/~u20/submissions/submission06/my_business.php";
    }
    const openClothingStoreGithub = () => {
        window.location.href = "#";
    }

    return (
        <section id="projects">
            <p className='section__text__p1'>Browse My School</p>
            <h1 className='title'>Projects</h1>
            <div className='skill-details-container'>
                <div className='about-containers'>
                    <div className='details-container color-container'>
                        <div className='article-container'>
                            <img src={dashboard} alt='dashboard' className='project-img' onDragStart={(event) => event.preventDefault()} />
                        </div>
                        <h2 className='skill-sub-title project-title'>
                            Visualization <br />Dashboard (D3js)
                        </h2>
                        <p className="project-description">A visualization Dashboard built using D3.js</p>
                        <div className='btn-container'>
                            <button className="btn btn-color-2 project-btn" onClick={openDashboardDemo}>Demo</button>
                            <button className="btn btn-color-2 project-btn" onClick={openDashboardGithub}>GitHub</button>
                        </div>
                    </div>
                    <div className='details-container color-container'>
                        <div className='article-container'>
                            <img src={pagination} alt='pagination' className='project-img' onDragStart={(event) => event.preventDefault()} />
                        </div>
                        <h2 className='skill-sub-title project-title'>
                            HackerNews <br />Pagination App
                        </h2>
                        <p className="project-description">A pagination app built using ReactJS</p>
                        <div className='btn-container'>
                            <button className="btn btn-color-2 project-btn" onClick={openPaginationDemo}>Demo</button>
                            <button className="btn btn-color-2 project-btn" onClick={openPaginationGithub}>GitHub</button>
                        </div>
                    </div>
                    <div className='details-container color-container'>
                        <div className='article-container'>
                            <img src={email} alt='email' className='project-img' onDragStart={(event) => event.preventDefault()} />
                        </div>
                        <h2 className='skill-sub-title project-title'>
                            Email App
                        </h2>
                        <p className="project-description">An email app built using HTML, CSS, JS, NodeJS, ExpressJS, MongoDB</p>
                        <div className='btn-container'>
                            <button className="btn btn-color-2 project-btn" onClick={openEmailDemo}>Demo</button>
                            <button className="btn btn-color-2 project-btn" onClick={openEmailGithub}>GitHub</button>
                        </div>
                    </div>
                    <div className='details-container color-container'>
                        <div className='article-container'>
                            <img src={portfolio} alt='portfolio' className='project-img' onDragStart={(event) => event.preventDefault()} />
                        </div>
                        <h2 className='skill-sub-title project-title'>
                            Portfolio<br />
                            (ReactJS)
                        </h2>
                        <p className="project-description">My portfolio app built using ReactJS</p>
                        <div className='btn-container'>
                            <button className="btn btn-color-2 project-btn" onClick={openPortfolioDemo}>Demo</button>
                            <button className="btn btn-color-2 project-btn" onClick={openPortfolioGithub}>GitHub</button>
                        </div>
                    </div>
                    <div className='details-container color-container'>
                        <div className='article-container'>
                            <img src={clothingstore} alt='clothingstore' className='project-img' onDragStart={(event) => event.preventDefault()} />
                        </div>
                        <h2 className='skill-sub-title project-title'>
                            Clothing Store
                        </h2>
                        <p className="project-description">A responsive Clothing Store web app built HTML, CSS, and PHP.</p>
                        <div className='btn-container'>
                            <button className="btn btn-color-2 project-btn" onClick={openClothingStoreDemo}>Demo</button>
                            <button className="btn btn-color-2 project-btn" onClick={openClothingStoreGithub}>GitHub</button>
                        </div>
                    </div>
                </div>

            </div>
            <Arrow page={'./#contact'} />
        </section>
    );
}

export default Projects;
