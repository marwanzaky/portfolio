import Head from 'next/head';

import Header from '../components/header';
import Services from '../components/services';
import Portfolio from '../components/portfolio';
import OpenSource from '../components/openSource';
import Timelines from '../components/timelines';
import Contact from '../components/contact';
import Footer from '../components/footer';

export default function Home() {
  return <div className='App'>
    <Head>
      <title>Hi, I'm Marwan</title>
      <meta name='description' content="I'm a software engineer, currently working as a full-time freelancer." />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Header />
    <Services />
    <Portfolio />
    <OpenSource />
    <Timelines />
    <Contact />
    <Footer />
  </div>
}
