import React from 'react';

import runRichImg from '../img/latest-work/run-rich.png';
import bkIMg from '../img/latest-work/bk.png'
import blindLoveImg from '../img/latest-work/blind-love.png'
import drawStoneImg from '../img/latest-work/draw-stone-5.png'
import carPuzzleImg from '../img/latest-work/car-puzzle2.png';
import hillClimbRacingImg from '../img/latest-work/hill-climb-racing.png';
import countMastersImg from '../img/latest-work/count-masters.png';
import storioImg from '../img/web/storio.png';
import appImg from '../img/web/app.png';
import app2Img from '../img/web/app-2.png';
import foodImg from '../img/web/food.png';

const style = {
    gridColumnStart: 2,
    gridColumnEnd: 4
};

const storioStyle = {
    // gridColumnStart: 0,
    // gridColumnEnd: 5
};

function Project(props) {
    return (
        <div className="portfolio-project" style={props.style} >
            <a href={props.url} target="blank">
                <img className='portfolio-project-img' src={props.src} alt={props.text} />
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
                <h2>My latest works</h2>
                {/* <p>Prefect solution for digital experience</p> */}

                <div className='grid grid-cols-4 gap-4'>
                    {/* Web */}
                    <Project url='https://storio.netlify.app/' src={storioImg} text='Storio - React.js' style={{ filter: 'brightness(95%)' }} />
                    <Project url='#' src={appImg} text='App - React Native' />
                    <Project url='#' src={app2Img} text='Food - React Native' />
                    <Project url='#' src={foodImg} text='Food - React.js' />

                    {/* Games */}
                    <Project url='https://www.artstation.com/artwork/o2bDYk' src={runRichImg} text='Run Food - Unity' />
                    <Project url='https://play.google.com/store/apps/details?id=com.aiwabox.blooming.kingdom' src={bkIMg} text='Blooming Kingdom - Unity' style={style} />
                    <Project url='https://www.artstation.com/artwork/d08yBQ' src={blindLoveImg} text='Blind Love - Unity' />
                    <Project url='https://www.artstation.com/artwork/2q8L9g' src={drawStoneImg} text='Draw Stone - Unity' />
                    <Project url='https://www.artstation.com/artwork/3qdEov' src={carPuzzleImg} text='Car Puzzle - Unity' />
                    <Project url='https://www.artstation.com/artwork/OmGe4k' src={hillClimbRacingImg} text='Climb Racing - Unity' />
                    <Project url='https://www.artstation.com/artwork/JerED0' src={countMastersImg} text='Count Masters - Unity' />
                </div>
            </div>
        </section >
    )
}

export default Portfolio;