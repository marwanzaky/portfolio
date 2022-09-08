import React from 'react';

import bkIMg from '../img/games/bk.png'
import carPuzzleImg from '../img/games/car-puzzle2.png';
import hillClimbRacingImg from '../img/games/hill-climb-racing.png';
import storioImg from '../img/web/storio.png';
import appImg from '../img/web/app.png';
import app2Img from '../img/web/app-2.png';
import foodImg from '../img/web/food.png';

const style = {
    gridColumnStart: 2,
    gridColumnEnd: 4
};

function Project(props) {
    return (
        <div className="portfolio-project" style={props.style} >
            <a href={props.url} target="_blank">
                <img className='portfolio-project-img' src={props.src} alt={props.text} rel='noreferrer' />
                <div className="portfolio-project-background"></div>
                <span className="portfolio-project-text">{props.text}</span>
            </a>
        </div>
    )
}

function Portfolio() {
    return (
        <section className='section-portfolio'>
            <div className="xl:container xl:mx-auto nav-container">
                <h3>My latest works</h3>

                <div className='grid grid-cols-4 gap-4'>
                    {/* Web */}
                    <Project url='https://storio.netlify.app/' src={storioImg} text='Storio - React.js' style={{ filter: 'brightness(95%)' }} />
                    <Project url='#' src={appImg} text='App - React Native' />
                    <Project url='#' src={app2Img} text='Food - React Native' />
                    <Project url='#' src={foodImg} text='Food - React.js' />

                    {/* Games */}
                    <Project url='https://www.artstation.com/artwork/3qdEov' src={carPuzzleImg} text='Car Puzzle - Unity' />
                    <Project url='https://play.google.com/store/apps/details?id=com.aiwabox.blooming.kingdom' src={bkIMg} text='Blooming Kingdom - Unity' style={style} />
                    <Project url='https://www.artstation.com/artwork/OmGe4k' src={hillClimbRacingImg} text='Climb Racing - Unity' />
                </div>
            </div>
        </section >
    )
}

export default Portfolio;