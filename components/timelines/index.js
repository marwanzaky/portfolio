import React from 'react';
import Timeline from './timeline';

function Timelines() {
    return <section className='section-timelines'>
        <div className='xl:container xl:mx-auto section-timelines-container'>
            <h2>Work experience</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-[10px]'>
                <Timeline duration='May 2021 &#8212; Present' title='Web Developer Developer' company='Upwork' >
                    <ul>
                        <li>&#x2022;  Translate requirements into complicated but clean and efficient code.</li>
                        <li>&#x2022;  Develop schedules and determine milestones.</li>
                        <li>&#x2022;  Polish the game, maintain code, fix bugs, and iron out occurring problems.</li>
                    </ul>
                </Timeline>

                <Timeline duration='Jun 2020 &#8212; Oct 2021' title='Unity Game Developer' company='Aiwa Holding' >
                    <ul>
                        <li>&#x2022;  Building a simulator iOS/Android game from the ground up to finish a game.</li>
                        <li>&#x2022;  Implementation of features using flexible and salable programming patterns.</li>
                        <li>&#x2022;  Integration to user Authentication and Database.</li>
                    </ul>
                </Timeline>

                <Timeline duration='Jul 2020 &#8212; Jun 2021' title='Unity Game Developer' company='Applift'>
                    <ul>
                        <li>&#x2022;  Responsible for developing hyper-casual games prototypes.</li>
                        <li>&#x2022;  Produce prototypes of gameplay ideas and features.</li>
                        <li>&#x2022;  Core gameplay systems and UI/UX.</li>
                    </ul>
                </Timeline>

                <Timeline duration='Mar 2020 &#8212; Dec 2020' title='Unity Game Developer' company='Leela Games'  >
                    <p>Responsible for different aspects.</p>
                    <ul>
                        <li>&#x2022;  Mesh generation gameplay mechanics.</li>
                        <li>&#x2022;  Core gameplay systems and UI/UX.</li>
                        <li>&#x2022;  Level design.</li>
                    </ul>
                </Timeline>
            </div>
        </div>
    </section>
}

export default Timelines;