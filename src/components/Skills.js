import '../App.css';
// import checkmark from "../images/checkmark.png"
import Arrow from "../components/Arrow"
function Skills() {
    return (
        <section id="skills">
            <p className='section__text__p1'>Explore My</p>
            <h1 className='title'>Skills</h1>
            <div className='skill-details-container'>
                <div className='about-containers'>
                    <div className='details-container'>
                        <h1>Skills</h1>
                        <ul>
                            <li><strong>Programming Languages:</strong> Java, JavaScript, SQL, JSP, HTML, CSS</li>
                            <li><strong>Frameworks:</strong> Spring Core, Spring JPA, Spring MVC, Spring Boot, Hibernate, Servlet, JSP, JDBC, JMS, Kafka, Apache Ignite, SOAP/Rest Web Service, Microservices</li>
                            <li><strong>Databases:</strong> MySQL, MongoDB, Oracle, SQL Server, PostgreSQL</li>
                            <li><strong>IDEs & Utilities:</strong> Spring Tool Suite, Eclipse, Visual Studio Code, IntelliJ IDEA</li>
                            <li><strong>Web Servers/Application Servers:</strong> Apache Tomcat</li>
                            <li><strong>Authentication & Authorization:</strong> Spring Security, OAuth2</li>
                            <li><strong>Testing Tools:</strong> Junit, Mockito, Postman, Selenium</li>
                            <li><strong>Source Control Tools:</strong> GIT, Github</li>
                            <li><strong>Web Technologies:</strong> Bootstrap, HTML, CSS, JSON, XML, RESTful APIs</li>
                            <li><strong>Version Control Tools:</strong> Maven</li>
                            <li><strong>Middle Ware:</strong> Integration Messaging Service (RabbitMQ, Kafka), Spring Boot</li>
                            <li><strong>Containerization:</strong> Docker</li>
                            <li><strong>Cloud Platform:</strong> AWS</li>
                        </ul>

                    </div>
                </div>
            </div>
            <Arrow page={'./#projects'} />
        </section>
    );
}

export default Skills;
