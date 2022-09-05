import React from 'react';

import { IonIcon } from '@ionic/react';
import { laptopOutline, logoReact, gameControllerOutline } from 'ionicons/icons';

function Analytic(props) {
    const style = { display: 'block' }
    const typeStr = props.type.split('\n').map(str => <span style={style}>{str}</span>);

    return (
        <div className='services-analytic'>
            <span className='services-analytic-total'>{props.total}</span>
            <span className='services-analytic-type'>{typeStr}</span>
        </div>
    )
}

function Service(props) {
    return (
        <div className='flex services-service'>
            <span class='services-service-icon material-symbols-outlined'>{props.icon}</span>
            <div className='flex flex-col justify-center'>
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
                <div className='grid grid-cols-2 gap-[100px] services-container'>
                    <div className=''>
                        <Service icon='devices' name='Website design' projects='12' />
                        <Service icon='apps' name='Mobile apps' projects='4' />
                        <Service icon='stadia_controller' name='Mobile games' projects='31' />
                    </div>

                    <div className=''>
                        <h3 className='services-h1'>Services I offer</h3>
                        <p className='text-justify services-p'>I will help you with finging a solution and solve your problems, We use process design to create digital products. Besids that also help their business. <br /> <br />We use process design to create digital products. Besids that also help their business.</p>
                        <div className='flex flex-row services-analytics'>
                            <Analytic total='+13' type={'Happy clients on work\nworldwide'} />
                            <Analytic total='+38' type={'Completed projects'} />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Services;