import envelope from '../../assets/envelope.svg';
import linkedIn from '../../assets/linkedin.svg';
import './Contact.css';

function Contact() {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div id="contact">
            <button type='button' id='email' onClick={() => openInNewTab('mailto:ammarfmr11@gmail.com')}>
                <svg>
                    <use href={envelope + "#envelope"}></use>
                </svg>
                Email
            </button>
            <button type='button' id='linkedin' onClick={() => openInNewTab('https://www.linkedin.com/in/ammarfmr/')}>
                <svg>
                    <use href={linkedIn + "#linkedin"}></use>
                </svg>
                LinkedIn
            </button>
        </div>
    );
}

export default Contact;