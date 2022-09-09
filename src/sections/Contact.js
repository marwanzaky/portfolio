import React from 'react';

const p = `I’d love to meet up with you to discuss your venture, and potential collaborations.

I’m interested in freelance opportunities – especially ambitious or large projects.
however, if you have other request or question, don’t hesitate to use the form.`;

function Contact() {
    return (
        <section className='section-contact'>
            <div className='xl:container xl:mx-auto section-contact-container'>
                <h2 className='section-contact-header'>Get In Touch!</h2>
                <p className='section-contact-p'>{p}</p>
                <button className='btn-base btn-full'>Hire me</button>
            </div>
        </section>
    )
}

export default Contact;