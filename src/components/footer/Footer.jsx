import twitter from '../../assets/square-twitter.svg';
import facebook from '../../assets/square-facebook.svg';
import instagram from '../../assets/square-instagram.svg';
import github from '../../assets/github.svg';
import './Footer.css';

function Footer() {
    return (
        <div id="footer">
            {/* <svg>
                <use href={twitter + "#twitter"}></use>
            </svg>
            <svg>
                <use href={facebook + "#facebook"}></use>
            </svg>
            <svg>
                <use href={instagram + "#instagram"}></use>
            </svg>
            <svg>
                <use href={github + "#github"}></use>
            </svg> */}
            <a href='https://twitter.com/AmmarFMR' target='_blank'><img src={twitter} alt='twitter' /></a>
            <a href='https://www.facebook.com/profile.php?id=100009882878434' target='_blank'><img src={facebook} alt='facebook' /></a>
            <a href='https://www.instagram.com/_amma_appa_/' target='_blank'><img src={instagram} alt='instagram' /></a>
            <a href='https://github.com/FROST8ytes' target='_blank'><img src={github} alt='github' /></a>
        </div>
    );
}

export default Footer;