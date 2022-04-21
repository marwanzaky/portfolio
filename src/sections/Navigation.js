import React from 'react';
import Scroll from '../scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons'

function List(props) {
    const scroll = () => {
        Scroll(props.className);
    }

    return <li>
        <button onClick={scroll}>{props.name}</button>
    </li>
}

function Navigation() {
    return <nav className='container'>
        <div className="main-nav-box">
            <a className="logo" href="index.html">mz</a>

            <ul className="main-nav">
                <List name='About' className='.section-what-i-do' />
                <List name='Portfolio' className='.section-latest-work' />
                <List name='Skills' className='.section-skills' />
                <List name='Contact' className='.section-contact-me' />
            </ul>
        </div>

        <button className='theme-btn'>
            <FontAwesomeIcon icon={faBoltLightning} />
        </button>
    </nav>
}

export default Navigation;