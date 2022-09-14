import React from 'react';

function Timeline(props) {
    return (
        <div className='section-timelines-timeline'>
            <h4 className='section-timelines-timeline-title'>{props.title} <span className='section-timelines-timeline-title-company'>- {props.company}</span></h4>
            <div className='section-timelines-timeline-duration'>{props.duration}</div>
            <div className='section-timelines-timeline-des'>{props.children}</div>
        </div>
    )
}

function Timelines() {
    return (
        <section className='section-timelines'>
            <div className='xl:container xl:mx-auto section-timelines-container'>
                <h2>Timelines</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <Timeline duration='May 2021 &#8212; Present' title='Web Developer Developer' company='Upwork' >
                        &#x2022;  Translate requirements into complicated but clean and efficient code.<br />
                        &#x2022;  Develop schedules and determine milestones.<br />
                        &#x2022;  Polish the game, maintain code, fix bugs, and iron out occurring problems.
                    </Timeline>

                    <Timeline duration='Jun 2020 &#8212; Oct 2021' title='Unity Game Developer' company='Aiwa Holding' >
                        &#x2022;  Building a simulator iOS/Android game from the ground up to finish a game.<br />
                        &#x2022;  Implementation of features using flexible and salable programming patterns.<br />
                        &#x2022;  Integration to user Authentication and Database.
                    </Timeline>

                    <Timeline duration='Jul 2020 &#8212; Jun 2021' title='Unity Game Developer' company='Applift'>
                        &#x2022;  Responsible for developing hyper-casual games prototypes.<br />
                        &#x2022;  Produce prototypes of gameplay ideas and features.<br />
                        &#x2022;  Core gameplay systems and UI/UX.
                    </Timeline>

                    <Timeline duration='Mar 2020 &#8212; Dec 2020' title='Unity Game Developer' company='Leela Games'  >
                        Responsible for different aspects.<br />
                        &#x2022;  Mesh generation gameplay mechanics.<br />
                        &#x2022;  Core gameplay systems and UI/UX.<br />
                        &#x2022;  Level design.
                    </Timeline>
                </div>
                {/* </div> */}
            </div>
        </section>
    )
}

export default Timelines;