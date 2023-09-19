import '../App.css';
import emailIcon from "../images/email.png";
import linkedInIcon from "../images/linkedin.png";

export default function Contact() {
    return (
        <section id="contact">
            <p className='section__text__p1'>Get In Touch..</p>
            <h1 className='title'>Contact Me</h1>
            <div className='contact-info-upper-container'>
                <div className='contact-info-container'>
                    <img src={emailIcon} alt='email' className='icon contact-icon' onDragStart={(event) => event.preventDefault()} />
                    <p><a href="mailto:tusharmahat@gmail.com">tusharmahat@gmail.com</a></p>
                </div>
                <div className='contact-info-container'>
                    <img src={linkedInIcon} alt='email' className='icon contact-icon' onDragStart={(event) => event.preventDefault()} />
                    <p><a href="https://www.linkedin.com/in/tushar-mahat/">LinkedIn</a></p>
                </div>
            </div>
        </section>
    );
};
