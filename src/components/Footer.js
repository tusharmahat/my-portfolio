import '../App.css';
import NavLinks from "./NavLinks"
export default function Contact() {
    return (
        <footer>
            <nav>
                <div className='nav-links-container'>
                    <NavLinks />
                </div>
            </nav>
            <p>Copyright &#169; 2023 Tushar Mahat. All Rights Reserved.</p>
        </footer>
    );
};
