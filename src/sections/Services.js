import React from 'react';

function Service(props) {
    return (
        <div className='flex services-service'>
            <span class='services-service-icon material-symbols-outlined'>{props.icon}</span>
            <div className='flex flex-col justify-center'>
                <h4 className='services-service-name m-0'>{props.name}</h4>
                <span className='services-service-projects'>{props.projects + ' Projects'}</span>
            </div>
        </div>
    )
}

function Skills() {
    return (
        <div class="grid grid-cols-4 mb-16 services-skills">
            <span>HTML5 &amp; CSS3</span>
            <span>JavaScript / ES6</span>
            <span>React.js</span>
            <span>React Native</span>
            <span>Sass &amp; Scss</span>
            <span>Tailwind</span>
            <span>Bootstrap</span>
            <span>Firebase</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>MongoDB</span>
            <span>Unity</span>
            <span>C#</span>
        </div>
    )
}

function Services() {
    return (
        <section className='section-services'>
            <div className='xl:container xl:mx-auto'>
                <div className='services-container'>
                    <div>
                        <Service icon='devices' name='Website design' projects='12' />
                        <Service icon='apps' name='Mobile apps' projects='4' />
                        <Service icon='stadia_controller' name='Mobile games' projects='31' />
                    </div>

                    <div>
                        <h2 className='services-h1'>Services I offer</h2>
                        <p className='text-justify services-p'>I will help you with finging a solution and solve your problems, We use process design to create digital products. Besids that also help their business.</p>

                        <Skills />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Services;