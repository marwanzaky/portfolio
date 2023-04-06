function Service({ name, icon, projects }) {
    return <div className='flex services-service'>
        <span className='services-service-icon material-symbols-outlined'>{icon}</span>
        <div className='flex flex-col justify-center'>
            <h4 className='services-service-name m-0'>{name}</h4>
            <span className='services-service-projects'>{projects + ' Projects'}</span>
        </div>
    </div>
}

function Skills() {
    return <div className='services-skills'>
        <span>HTML5 &amp; CSS3</span>
        <span>JavaScript / ES6</span>
        <span>Next.js</span>
        <span>React.js</span>
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
}

export default function Services() {
    return <section className='section-services'>
        <div className='xl:container xl:mx-auto'>
            <div className='services-container'>
                <div>
                    <Service icon='devices' name='Website design' projects='12' />
                    <Service icon='apps' name='Mobile apps' projects='4' />
                    <Service icon='stadia_controller' name='Mobile games' projects='31' />
                </div>

                <div>
                    <h2 className='services-h1'>Services I offer</h2>
                    <p className='services-p'>Someone who has a passion for their job and cares about helping you succeed and bringing value to your organization, I have been working as a software engineer for almost 7 years in various companies.</p>

                    <Skills />
                </div>
            </div>
        </div>
    </section >
}