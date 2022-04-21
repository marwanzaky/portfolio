import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

import Navigation from './navigation'
import TestimonialsWrapper from './testimonialsWrapper';
import ProgressBars from './progressBars';
import TimelineBox from './timelineBox';
import Works from './works';
import Skills from './skills'
import Contact from './contact';
import Footer from './footer';
import Testimonials from './testimonials';

import './css/style.css';

var navigation = ReactDOMClient.createRoot(document.querySelector('#navigation'));
var skillsBox = ReactDOMClient.createRoot(document.querySelector('.skills-box'));
var latestWorkBox = ReactDOMClient.createRoot(document.querySelector('.latest-work-box'));
var timelineBox = ReactDOMClient.createRoot(document.querySelector('.timeline-box'));
var statsBox = ReactDOMClient.createRoot(document.querySelector('.stats-box'));
var testimonialsBox = ReactDOMClient.createRoot(document.querySelector('.testimonials-box'));
var contact = ReactDOMClient.createRoot(document.querySelector('#contact'));
var footer = ReactDOMClient.createRoot(document.querySelector('#footer'));

navigation.render(<Navigation />);
skillsBox.render(<Skills />);
latestWorkBox.render(<Works />);
timelineBox.render(<TimelineBox />);
statsBox.render(<ProgressBars />);
testimonialsBox.render(<TestimonialsWrapper />);
contact.render(<Contact />);
footer.render(<Footer />);

Testimonials();