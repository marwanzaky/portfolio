import sendEmail from '../sendEmail';

const send = () => {
    sendEmail();
}

function About() {
    return < section className="section-what-i-do" >
        <div className="container">
            <h4>What I Do</h4>
            <h2>I enjoy creating delightful, <br />
                human-centered digital experiences.
            </h2>
            <span>Think. Make. <br />
                Solve.</span>

            <button className="btn-base btn-full" onClick={send}>Email me</button>
        </div>
    </section >
}

export default About;