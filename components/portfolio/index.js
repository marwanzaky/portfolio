import React from 'react';
import PortfolioProject from './project';

const style = {
    gridColumnStart: 2,
    gridColumnEnd: 4
};

function Portfolio() {
    return <section className='section-portfolio'>
        <div className='xl:container xl:mx-auto nav-container'>
            <h2>My latest works</h2>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-4'>
                {/* Web */}
                <PortfolioProject url='https://mamolio.com/' src='/img/web/storio.jpg' text='Storio - React.js' style={{ filter: 'brightness(95%)' }} />
                <PortfolioProject url='#' src='/img/web/app.jpg' text='App - React Native' />
                <PortfolioProject url='#' src='/img/web/app-2.jpg' text='Food - React Native' />
                <PortfolioProject url='#' src='/img/web/food.jpg' text='Food - React.js' />

                {/* Games */}
                <PortfolioProject url='https://www.artstation.com/artwork/3qdEov' src='/img/games/car-puzzle2.jpg' text='Car Puzzle - Unity' />
                <PortfolioProject url='https://play.google.com/store/apps/details?id=com.aiwabox.blooming.kingdom' src='/img/games/bk.jpg' text='Blooming Kingdom - Unity' style={style} />
                <PortfolioProject url='https://www.artstation.com/artwork/OmGe4k' src='/img/games/hill-climb-racing.jpg' text='Climb Racing - Unity' />
            </div>
        </div>
    </section >
}

export default Portfolio;