import sendEmail from '../sendEmail';
import Navigation from "./Navigation";
import Scroll from '../scroll';

const send = () => {
    sendEmail();
}

const scroll = className => {
    Scroll(className);
}

function Header() {
    return <header >
        <Navigation />

        <div className="container header-box">
            <h1 className="header-text">Hy! I am<br />Marwan Zaky</h1>
            <p className="header-parag">
                Passion and Hobbyist game developer with +7 years of experience making<br />iOS/Android highly
                professional games, 2d and
                3d from scratch.
            </p>

            <button className="btn-base btn-full" onClick={send}>Email me</button>
            <button className="btn-base btn-ghost" onClick={() => scroll('.section-what-i-do')}>About me</button>
        </div>
    </header>
}

export default Header;