import React from 'react';

function NewlineText(props) {
    const text = props.text;
    return <div className='timeline-description'>{text}</div>;
}


function Timeline(props) {
    return <div className='timeline-item'>
        <div className='timeline-icon'>
            <ion-icon name='briefcase'></ion-icon>
        </div>
        <p className='timeline-duration'>{props.duration}</p>
        <p className='timeline-title'>{props.title} <span>- {props.company}</span></p>
        <NewlineText text={props.description} />
    </div>
}

function Timelines() {
    const upworkDes = `- Translate requirements into complicated but clean and efficient code
- Develop schedules and determine milestones
- Polish the game, maintain code, fix bugs, and iron out occurring problems`;

    const aiwaHoldingDes = `- Building a simulator iOS/Android game from the ground up to finish a game
- Implementation of features using flexible and salable programming patterns
- Integration to user Authentication and Database`;

    const appliftDes = `- Responsible for developing hyper-casual games prototypes
- Produce prototypes of gameplay ideas and features
- Core gameplay systems and UI/UX`;

    const leelaGamesDes = `Responsible for different aspects
- Mesh generation gameplay mechanics
- Core gameplay systems and UI/UX
- Level design`;

    return <section className="section-timeline">
        <div className="container">
            <h4>Timeline</h4>
        </div>

        <div className="container timeline-box">
            <Timeline duration='May 2021 - Present' title='Unity Game Developer' company='Upwork' description={upworkDes} />
            <Timeline duration='Jun 2020 - Oct 2021' title='Unity Game Developer' company='Aiwa Holding' description={aiwaHoldingDes} />
            <Timeline duration='Jul 2020 - Jun 2021' title='Unity Game Developer' company='Applift' description={appliftDes} />
            <Timeline duration='Mar 2020 - Dec 2020' title='Unity Game Developer' company='Leela Games' description={leelaGamesDes} />
        </div>
    </section>
}

export default Timelines;