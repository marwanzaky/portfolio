import React from 'react';
import workspaceIMg from '../img/workspace.png';

function Timeline(props) {
    return (
        <div className='section-timelines-timeline'>
            <h4 className='section-timelines-timeline-title'>{props.title} <span className='section-timelines-timeline-title-company'>- {props.company}</span></h4>
            <div className='section-timelines-timeline-duration'>{props.duration}</div>
            <div className='section-timelines-timeline-des'>{props.des}</div>
        </div>
    )
}

function Timelines() {
    const appliftDes = `- Responsible for developing hyper-casual games prototypes.
- Produce prototypes of gameplay ideas and features.
- Core gameplay systems and UI/UX.`;

    const upworkDes = `- Translate requirements into complicated but clean and efficient code.
- Develop schedules and determine milestones.
- Polish the game, maintain code, fix bugs, and iron out occurring problems.`;

    const aiwaHoldingDes = `- Building a simulator iOS/Android game from the ground up to finish a game.
- Implementation of features using flexible and salable programming patterns.
- Integration to user Authentication and Database.`;

    const leelaGamesDes = `Responsible for different aspects.
- Mesh generation gameplay mechanics.
- Core gameplay systems and UI/UX.
- Level design.`;

    return (
        <section className='section-timelines'>
            <div className='xl:container xl:mx-auto section-timelines-container'>
                <h2>Timelines</h2>

                {/* <div className='section-timelines-grid'> */}
                {/* <div>
                    <img className='section-timelines-img' src={workspaceIMg}></img>
                </div> */}

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <Timeline duration='May 2021 &#8212; Present' title='Web Developer Developer' company='Upwork' des={upworkDes} />
                    <Timeline duration='Jun 2020 &#8212; Oct 2021' title='Unity Game Developer' company='Aiwa Holding' des={aiwaHoldingDes} />
                    <Timeline duration='Jul 2020 &#8212; Jun 2021' title='Unity Game Developer' company='Applift' des={appliftDes} />
                    <Timeline duration='Mar 2020 &#8212; Dec 2020' title='Unity Game Developer' company='Leela Games' des={leelaGamesDes} />
                </div>
                {/* </div> */}
            </div>
        </section>
    )
}

export default Timelines;