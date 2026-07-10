import Head from 'next/head';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Experts from '../components/home/Experts';
import WhyVedara from '../components/home/WhyVedara';
import Reviews from '../components/home/Reviews';
import HomeHealthcare from '../components/home/HomeHealthcare';
import About from '../components/home/About';
import Conditions from '../components/home/Conditions';
import Journal from '../components/home/Journal';
import FAQ from '../components/home/FAQ';
import Location from '../components/home/Location';

import CTA from '../components/home/CTA';
import { 
  homeFaqs, 
  homeJournal, 
  homeLocation, 
  homeCTA,
  homeHero,
  homeServices,
  homeAbout,
  homeConditions,
  homeExperts,
  homeWhyVedara,
  homeReviews,
  homeHealthcare,
 
} from '../data/homeData';

export default function Home() {
  return (
    <>
      <Head>
        <title>Vedara Care | Holistic Healthcare in JVC, Dubai</title>
        <meta name="description" content="DHA-licensed healthcare clinic in JVC Dubai offering Ayurveda, physiotherapy, dermatology, home healthcare, and wellness treatments." />
      </Head>
      <Hero {...homeHero} />
      <Services {...homeServices} />
      <About {...homeAbout} />
      <Conditions {...homeConditions} />
      <Experts {...homeExperts} />
      <WhyVedara {...homeWhyVedara} />
      <Reviews {...homeReviews} />
      <HomeHealthcare {...homeHealthcare} />
      <Location {...homeLocation} />
      <Journal {...homeJournal} />
      <FAQ {...homeFaqs} />
      <CTA {...homeCTA} />
    </>
  );
}
