import React from 'react';

function Testimonial(props) {
  return <div className='testimonial'>
    <i className='fas fa-quote-left'></i>
    <blockquote>
      {props.blockquote}
      <cite>{props.cite}</cite>
    </blockquote>
  </div>
}

export default function TestimonialsWrapper() {
  return <div className='testimonials-wrapper' >
    <Testimonial
      blockquote='Marwan did very well at his work and was very Cooperative with us.
                    His work is very clean, of high quality and on time.I highly recommend him.'
      cite='Havil A. 🇸🇪' />

    <Testimonial
      blockquote='I am incredibly impressed with the speed and quality of this project.
                    I will definitely be ordering again!'
      cite='Harry K. 🇨🇦' />

    <Testimonial
      blockquote='It was a pleasure working with this developer. High quality code, and the game was really fun! I
                    will be ordering again!'
      cite='Harry K. 🇨🇦' />

    <Testimonial
      blockquote='Again, Marwan impressed me by being able to find a solution for each complex feature, even if it
                    was a new technology or something that he is not familiar with, still he was able to study the case and learn how to do
                    it and implement it perfectly...'
      cite='Tarek D. 🇦🇪' />

    <Testimonial
      blockquote='This is our second time working with Marwan, he completed our mobile game project in time with
                    quality and persistence, he was really a good communicator and a problem solver,
                    I hope we will work with him again :)'
      cite='Ramesh D. 🇮🇳' />

    <Testimonial
      blockquote='It has been a real pleasure working with Marwanzaky. He has a lot of experience programming
                    games and knows how to implement any mechanic you need. I will repeat for sure!'
      cite='Alcoverrr 🇪🇸' />

  </div >
}