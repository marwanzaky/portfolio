import React from 'react';

function Timeline(props) {
    return <div className='section-timelines-timeline'>
        <h4 className='section-timelines-timeline-title'>{props.title} <span className='section-timelines-timeline-title-company'>- {props.company}</span></h4>
        <div className='section-timelines-timeline-duration'>{props.duration}</div>
        <div className='section-timelines-timeline-des'>{props.children}</div>
    </div>
}

export default Timeline;