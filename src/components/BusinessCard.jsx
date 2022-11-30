import Info from './info/Info';
import About from './about/About';
import Interests from './interests/Interests';
import Footer from './footer/Footer';
import './BusinessCard.css';

function BusinessCard() {
    return (
        <div id="card">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    );
}

export default BusinessCard;