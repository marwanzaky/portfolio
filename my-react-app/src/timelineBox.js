import React from 'react';

function Timeline(props) {
    return <div className='timeline-item'>
        <div className='timeline-icon'>
            <ion-icon name='briefcase'></ion-icon>
        </div>
        <p className='timeline-duration'>{props.duration}</p>
        <p className='timeline-title'>{props.title} <span>- {props.company}</span></p>
        <p> {props.description} </p>
    </div>
}

export default function TimelineBox() {
    return <>
        <Timeline duration='May 2021 - Present' title='Unity Game Developer' company='Upwork' description='
            - Translate requirements into complicated but clean and efficient code <br>
            - Develop schedules and determine milestones <br>
            - Polish the game, maintain code, fix bugs, and iron out occurring problems <br>' />

        <Timeline duration='Jun 2020 - Oct 2021' title='Unity Game Developer' company='Aiwa Holding' description='
            - Building a simulator iOS/Android game from the ground up to finish a game <br>
            - Implementation of features using flexible and salable programming patterns <br>
            - Integration to user Authentication and Database <br>' />

        <Timeline duration='Jul 2020 - Jun 2021' title='Unity Game Developer' company='Applift' description='
            - Responsible for developing hyper-casual games prototypes <br>
            - Produce prototypes of gameplay ideas and features <br>
            - Core gameplay systems and UI/UX <br>' />

        <Timeline duration='Mar 2020 - Dec 2020' title='Unity Game Developer' company='Leela Games' description='
            Responsible for different aspects <br>
            - Mesh generation gameplay mechanics <br>
            - Core gameplay systems and UI/UX <br>
            - Level design' />
    </>
}
