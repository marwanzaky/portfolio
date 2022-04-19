import React from 'react';
import runRich from './img/latest-work/run-rich.png';
import bloomingKingdom from './img/latest-work/bk.png'
import blindLove from './img/latest-work/blind-love.png'
import drawStone from './img/latest-work/draw-stone-5.png'
import carPuzzle from './img/latest-work/car-puzzle2.png';
import hillClimbRacing from './img/latest-work/hill-climb-racing.png';
import countMasters from './img/latest-work/count-masters.png';

const style = {
    gridColumnStart: 2,
    gridColumnEnd: 4
};

function Work(props) {
    return <div className="latest-work" style={props.style} >
        <a href={props.url} target="blank">
            <img src={props.src} alt="" />
            <div className="latest-work-background"></div>
            <span className="latest-work-text">{props.text}</span>
        </a>
    </div>
}

export default function Works() {
    return <>
        <Work url='https://www.artstation.com/artwork/o2bDYk' src={runRich} text='Run Food - Unity' />
        <Work url='https://play.google.com/store/apps/details?id=com.aiwabox.blooming.kingdom' src={bloomingKingdom} text='Blooming Kingdom - Unity' style={style} />
        <Work url='https://www.artstation.com/artwork/d08yBQ' src={blindLove} text='Blind Love - Unity' />
        <Work url='https://www.artstation.com/artwork/2q8L9g' src={drawStone} text='Draw Stone - Unity' />
        <Work url='https://www.artstation.com/artwork/3qdEov' src={carPuzzle} text='Car Puzzle - Unity' />
        <Work url='https://www.artstation.com/artwork/OmGe4k' src={hillClimbRacing} text='Climb Racing - Unity' />
        <Work url='https://www.artstation.com/artwork/JerED0' src={countMasters} text='Count Masters - Unity' />
    </>
}