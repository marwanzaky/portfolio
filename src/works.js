import React from 'react';

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
        <Work url='https://www.artstation.com/artwork/o2bDYk' src='./venders/img/latest-work/run-rich.png' text='Run Food - Unity' />
        <Work url='https://play.google.com/store/apps/details?id=com.aiwabox.blooming.kingdom' src='./venders/img/latest-work/bk.png' text='Blooming Kingdom - Unity' style={style} />
        <Work url='https://www.artstation.com/artwork/d08yBQ' src='./venders/img/latest-work/blind-love.png' text='Blind Love - Unity' />
        <Work url='https://www.artstation.com/artwork/2q8L9g' src='./venders/img/latest-work/draw-stone-5.png' text='Draw Stone - Unity' />
        <Work url='https://www.artstation.com/artwork/3qdEov' src='./venders/img/latest-work/car-puzzle2.png' text='Car Puzzle - Unity' />
        <Work url='https://www.artstation.com/artwork/OmGe4k' src='./venders/img/latest-work/hill-climb-racing.png' text='Climb Racing - Unity' />
        <Work url='https://www.artstation.com/artwork/JerED0' src='./venders/img/latest-work/count-masters.png' text='Count Masters - Unity' />
    </>
}