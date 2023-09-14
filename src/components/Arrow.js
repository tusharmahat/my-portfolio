import '../App.css';

import arrowIcon from "../images/arrow.png"
function Arrow({ page }) {
    const goToPage = () => {
        window.location.href = page;
    }
    return (
        <img src={arrowIcon} alt="arrow" className='icon-arrow' onClick={goToPage} />
    );
}

export default Arrow;
