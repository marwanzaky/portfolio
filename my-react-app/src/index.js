import Navigation from './navigation'
import React from 'react';
import ReactDOM from 'react-dom';
import TestimonialsWrapper from './testimonialsWrapper';
import ProgressBars from './progressBars';
import TimelineBox from './timelineBox';
import Works from './works';
import Skills from './skills'
import Contact from './contact';
import Footer from './footer';
import Testimonials from './testimonials';

ReactDOM.render(<Navigation />, document.querySelector('#navigation'));
ReactDOM.render(<Skills />, document.querySelector('.skills-box'));
ReactDOM.render(<Works />, document.querySelector('.latest-work-box'));
ReactDOM.render(<TimelineBox />, document.querySelector('.timeline-box'));
ReactDOM.render(<ProgressBars />, document.querySelector('.stats-box'));
ReactDOM.render(<TestimonialsWrapper />, document.querySelector('.testimonials-box'));
ReactDOM.render(<Contact />, document.querySelector('#contact'));
ReactDOM.render(<Footer />, document.querySelector('#footer'));

Testimonials();