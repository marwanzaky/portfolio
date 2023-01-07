import React from 'react';
import githubIcon from '../assets/github.svg';

function List(props) {
    return <li className='footer-contacts-li'>
        <a className='footer-contacts-li-a' href={props.url} target='_blank' rel='noopener noreferrer'>
            <img className='footer-contacts-li-a-icon' src={props.src} alt={props.alt} />
        </a>
    </li>
}

function Footer() {
    return <footer className='section-footer'>
        <div className='xl:container xl:mx-auto nav-container flex flex-col sm:flex-row'>
            <div className='w-full sm:w-[50%]'>
                <p>Copyright © 2022 Marwan Zaky.</p>
            </div>

            <div className='w-full sm:w-[50%] flex flex-row justify-center sm:justify-end items-center footer-contacts'>
                {/* <List src={upworkIcon} alt='Upwork icon' url='https://www.upwork.com/freelancers/~016c440becd0ed6d83' /> */}
                <List src={githubIcon} alt='Github icon' url='https://github.com/marwanzaky' />
            </div>
        </div>
    </footer>
}

export default Footer;