import React from 'react';

function ProgressBar(props) {
    return <div className='progress-bar'>
        <p className='progress-title'> {props.title}</p>
        <div className='progress-container'>
            <p className='progress-text'>{props.text}</p>
            <div className='progress'>
                <span className={props.class}></span>
            </div>
        </div>
    </div>
}

function Stats() {
    return <section className="section-stats">
        <div className="row">
            <h4>My Stats</h4>
        </div>

        <div className="row stats-box">
            <div className="progress-bars">
                <ProgressBar title='Unity' text='100%' class='unity' />
                <ProgressBar title='C#' text='100%' class='c-sharp' />
                <ProgressBar title='Firebase' text='90%' class='firebase' />
                <ProgressBar title='Blender' text='60%' class='blender' />
                <ProgressBar title='JavaScript' text='80%' class='js' />
                <ProgressBar title='HTML5' text='80%' class='html' />
                <ProgressBar title='CSS' text='80%' class='css' />
                <ProgressBar title='Python' text='65%' class='python' />
            </div>
        </div>
    </section>
}

export default Stats;