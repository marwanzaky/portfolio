import React from 'react';
import Navigation from './Navigation';

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
        <header>
            <Navigation />

            <div className='xl:container xl:mx-auto'>
                <div className='flex header-container'>
                    <div className='w-[50%]'>
                        <div className='header-name'>Hy there, <br /> I'm Marwan.</div>
                        <div className='header-about'>Web developer with <strong>+3 years</strong> of experience building modern websites from the ground up to a fully complete one.</div>
                        <button className='header-hire_me btn-base btn-full'>Hire me</button>
                        <button className='header-hire_me btn-base btn-ghost'>Portfolio</button>

                        <div className='flex flex-row header-analytics'>
                            <Analytic total='+13' type={'Happy clients on work\nworldwide'} />
                            <Analytic total='+38' type={'Completed projects'} />
                        </div>
                    </div>

                    <div className='w-[50%]'>
                        <img className='header-profile_picture' src='https://avatars.githubusercontent.com/u/64248203?v=4' />
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Header;