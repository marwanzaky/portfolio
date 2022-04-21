import React from 'react';
import $ from 'jquery';

function List(props) {
    const jump = () => {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(props.className).offset().top
        }, 1000);
    }

    return <li>
        <button onClick={jump}>{props.name}</button>
    </li>
}

function Navigation() {
    return <nav>
        <div className="row main-nav-box">
            <a className="logo" href="index.html">mz</a>

            <ul className="main-nav">
                <List name='About' className='.section-what-i-do' />
                <List name='Portfolio' className='.section-latest-work' />
                <List name='Skills' className='.section-skills' />
                <List name='Contact' className='.section-contact-me' />
            </ul>
        </div>
    </nav>
}

export default Navigation;