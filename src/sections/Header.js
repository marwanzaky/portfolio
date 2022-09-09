import React from 'react';
import Navigation from './Navigation';

function HireMe() {
    window.location.href = 'https://www.upwork.com/freelancers/~016c440becd0ed6d83';
}

function Analytic(props) {
    const style = { display: 'block' }
    const typeStr = props.type.split('\n').map(str => <span style={style}>{str}</span>);

    return (
        <div className='header-analytic'>
            <span className='header-analytic-total'>{props.total}</span>
            <span className='header-analytic-type'>{typeStr}</span>
        </div>
    )
}

function Header() {
    return (
        <header className='section-header'>
            <Navigation />

            <div className='xl:container xl:mx-auto'>
                <div className='header-container flex flex-col md:flex-row'>
                    <div className='w-full md:w-[50%]'>
                        <div className='text-[300%] sm:text-[500%] header-name'>Hy there,<br />I'm Marwan.</div>
                        <p className='header-about'>I'm a <a href='/'>web</a> and <a href='/'>game developer</a>, and currently working as a full-time freelancer, I use modern technologies to develop a product from the ground up to a fully high-quality one.</p>
                        <button className='header-hire_me btn-base btn-full' onClick={HireMe}>Hire me</button>
                        <button className='header-hire_me btn-base btn-ghost'>Portfolio</button>

                        <div className='flex flex-row header-analytics'>
                            <Analytic total='+13' type={'Happy clients on work\nworldwide'} />
                            <Analytic total='+38' type={'Completed projects'} />
                        </div>
                    </div>

                    <div className='w-full md:w-[50%] hidden md:block'>
                        <img className='header-profile_picture' src='https://avatars.githubusercontent.com/u/64248203?v=4' alt='profile' />
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Header;