import portraitImage from '../../assets/blazer.jpg';
import InfoText from './InfoText';
import Contact from './Contact';
import './Info.css';

function Info() {
    return (
        <div id="info">
            <img src={portraitImage} id='portrait-img' alt='portrait image'/>
            <InfoText />
            <Contact />
        </div>
    );
}

export default Info;