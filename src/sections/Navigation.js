import React from 'react';

function Li(props) {
    return <li><a href={props.href}>{props.name}</a></li>
}

function Navigation() {
    return (
        <nav>
            <div className="xl:container xl:mx-auto nav-container">
                <a href='/' className="nav-logo">Mz</a>

                <ul className="nav-ul">
                    <Li href='/' name='About' />
                    <Li href='/shop' name='Services' />
                    <Li href='/about' name='Portfolio' />
                    <Li href='/contact' name='Testimonial' />
                </ul>

                <button className='nav-lets_talk btn-base btn-ghost'>Let's talk</button>
            </div>
        </nav >
    )
}

export default Navigation;