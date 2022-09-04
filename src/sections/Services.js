import React from 'react';

import { IonIcon } from '@ionic/react';
import { laptopOutline, logoReact, gameControllerOutline } from 'ionicons/icons';

function Service(props) {
    return (
        <div className='flex w-[500px] services-service'>
            <IonIcon class='services-service-icon' src={props.icon} />
            <div className='flex flex-col'>
                <h4 className='services-service-name'>{props.name}</h4>
                <span className='services-service-projects'>{props.projects + ' Projects'}</span>
            </div>
        </div>
    )
}

function Services() {
    return (
        <section className='section-services'>
            <div className='xl:container xl:mx-auto'>
                <div className='flex services-container'>
                    <div className='w-[50%]'>
                        <Service icon={laptopOutline} name='Website design' projects='12' />
                        <Service icon={logoReact} name='Mobile apps' projects='4' />
                        <Service icon={gameControllerOutline} name='Mobile games' projects='31' />
                    </div>

                    <div className='w-[50%]'>
                        <h3 className='services-h1'>Services I offer</h3>
                        <p className='text-justify services-p'>I will help you with finging a solution and solve your problems, We use process design to create digital products. Besids that also help their business. <br /> <br />We use process design to create digital products. Besids that also help their business.</p>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Services;