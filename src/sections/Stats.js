import React from 'react';

const prgrsStyle = {
    marginLeft: '18px',
    position: 'relative',
    width: '100%',
    height: '8px'
}

function ProgressBar(props) {

    const prgrsSpanStyle = {
        position: 'absolute',
        top: '0',
        left: '0',
        height: '100%',
        width: '0%'
    }

    prgrsSpanStyle.width = props.width;

    return <div className='col-sm-6 p-2 prgrs-bar '>
        <p className='prgrs-title'> {props.title}</p>
        <div className='prgrs-container '>
            <p className='prgrs-text'>{props.width}</p>
            <div className='progress' style={prgrsStyle}>
                <span className='progress-bar bg-danger progress-bar-striped progress-bar-animated' style={prgrsSpanStyle}></span>
            </div>
        </div>
    </div>
}

function Stats() {
    return <section className="section-stats">
        <div className="container">
            <h4>My Stats</h4>
        </div>

        <div className="container stats-box">
            <div className="row prgrs-bars">
                <ProgressBar title='Unity' width='100%' />
                <ProgressBar title='C#' width='100%' />
                <ProgressBar title='Firebase' width='90%' />
                <ProgressBar title='Blender' width='60%' />
                <ProgressBar title='JavaScript' width='80%' />
                <ProgressBar title='HTML5' width='80%' />
                <ProgressBar title='CSS' width='80%' />
                <ProgressBar title='Python' width='65%' />
            </div>
        </div>
    </section>
}

export default Stats;