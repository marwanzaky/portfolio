import React from 'react';
import Scroll from '../../utils/scroll';

const scroll = section => {
    Scroll(section);
}

function List({ name, section }) {
    return <li><button onClick={() => scroll(section)}>{name}</button></li>
}

function Navigation() {
    return <nav>
        <div className='xl:container xl:mx-auto nav-container'>
            <a href='/' className='text-[300%] sm:text-[500%] nav-logo'>Mz</a>

            <ul className='hidden sm:block nav-ul'>
                <List section='.section-header' name='About' />
                <List section='.section-services' name='Services' />
                <List section='.section-portfolio' name='Portfolio' />
                <List section='.section-testimonial' name='Testimonial' />
            </ul>

            <button className='hidden sm:block nav-lets_talk btn-base btn-ghost'>Let's talk</button>
        </div>
    </nav >
}

export default Navigation;