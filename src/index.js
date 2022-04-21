import ReactDOM from "react-dom";
import * as ReactDOMClient from 'react-dom/client';
import Header from "./sections/Header";
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";
import Skills from "./sections/Skills";
import Stats from "./sections/Stats";
import Timelines from "./sections/Timelines";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

import testimonials from './testimonials';
import './css/style.css';

export default function App() {
    return <>
        <Header />
        <About />
        <Portfolio />
        <Skills />
        <Stats />
        <Timelines />
        <Testimonials />
        <Contact />
        <Footer />
    </>
}

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(<App />);

testimonials();