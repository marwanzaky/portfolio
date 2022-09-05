import React from 'react';
import Scroll from '../scroll';

const scroll = section => {
    // const element = document.querySelector(section);
    // const elementY = element.getBoundingClientRect().y;
    Scroll(section);
}

function Li(props) {
    return <li><a onClick={() => scroll(props.section)}>{props.name}</a></li>
}

function Navigation() {
    return (
        <nav>
            <div className="xl:container xl:mx-auto nav-container">
                <a href='/' className="nav-logo">Mz</a>

                <ul className="nav-ul">
                    <Li section='.section-header' name='About' />
                    <Li section='.section-services' name='Services' />
                    <Li section='.section-portfolio' name='Portfolio' />
                    <Li section='.section-testimonial' name='Testimonial' />
                </ul>

                <button className='nav-lets_talk btn-base btn-ghost'>Let's talk</button>
            </div>
        </nav >
    )
}

export default Navigation;