import Head from 'next/head';
import Link from 'next/link';
import { MessageCircle, Phone } from 'lucide-react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Experts from '../components/Experts';
import WhyVedara from '../components/WhyVedara';
import HomeHealthcare from '../components/HomeHealthcare';
import About from '../components/About';
import Conditions from '../components/Conditions';
import Journal from '../components/Journal';
import FAQ from '../components/FAQ';
import Location from '../components/Location';
import Insights from '../components/Insights';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <>
      <Head>
        <title>Vedara Care | Holistic Healthcare in JVC, Dubai</title>
        <meta name="description" content="DHA-licensed healthcare clinic in JVC Dubai offering Ayurveda, physiotherapy, dermatology, home healthcare, and wellness treatments." />
      </Head>

      <Hero />
      <Services />
      <About />
      <Conditions />
      <Experts />
      <WhyVedara />
      <HomeHealthcare />
      <Insights />
      <Location />
      <Journal />
      <FAQ />
      <CTA />
    </>
  );
}
