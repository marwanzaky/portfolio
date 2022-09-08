import React from 'react';
import githubIcon from '../assets/github.svg';
import upworkIcon from '../assets/upwork.svg';

function List(props) {
    return (
        <li className='footer-contacts-li'>
            <a className='footer-contacts-li-a' href={props.url} target='_blank'>
                <img className='footer-contacts-li-a-icon' src={props.src} rel='noreferrer' />
            </a>
        </li>
    )
}

function Footer() {
    return (
        <footer className='section-footer'>
            <div className='xl:container xl:mx-auto nav-container flex flex-row'>
                <div className='w-[50%]'>
                    <p>Copyright © 2021 Marwan Zaky. All rights reserved.</p>
                </div>

                <div className='w-[50%] flex flex-row justify-end footer-contacts'>
                    <List url='https://github.com/marwanzaky' src={upworkIcon} />
                    <List url='https://www.upwork.com/freelancers/~016c440becd0ed6d83' src={githubIcon} />
                </div>
            </div>
        </footer>
    )
}

export default Footer;