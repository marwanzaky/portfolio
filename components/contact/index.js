import React from 'react';
import Image from 'next/image';

function hireMe() {
    window.location.href = 'https://www.upwork.com/freelancers/~016c440becd0ed6d83';
}

const p = `I’d love to meet up with you to discuss your venture, and potential collaborations.

I’m interested in freelance opportunities – especially ambitious or large projects.`;

export default function Contact() {
    return <section className='section-contact'>
        <div className='xl:container xl:mx-auto section-contact-container'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='section-contact-child'>
                    <h2 className='section-contact-header'>Get In Touch!</h2>
                    <p className='section-contact-p'>{p}</p>
                    <button className='btn-base btn-full' onClick={hireMe}>Hire me</button>
                </div>

                <div className='section-contact-child' style={{ width: '100%', height: 'auto', position: 'relative' }}>
                    <Image className='section-contact-img' src='/img/workspace.jpg' alt='Work Space' layout='fill' objectFit='contain' />
                </div>
            </div>
        </div>
    </section>
}