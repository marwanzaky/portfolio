import React from 'react';
import workSpaceImg from '../img/workspace.jpg';

const p = `I’d love to meet up with you to discuss your venture, and potential collaborations.

I’m interested in freelance opportunities – especially ambitious or large projects.`;

function Contact() {
    return (
        <section className='section-contact'>
            <div className='xl:container xl:mx-auto section-contact-container'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className='section-contact-child'>
                        <h2 className='section-contact-header'>Get In Touch!</h2>
                        <p className='section-contact-p'>{p}</p>
                        <button className='btn-base btn-full'>Hire me</button>
                    </div>

                    <div className='section-contact-child'>
                        <img className='section-contact-img' src={workSpaceImg}></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;