import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import PhysiotherapySpecializations from '../../components/ayurveda/PhysiotherapySpecializations';
import PhysiotherapyMechanism from '../../components/ayurveda/PhysiotherapyMechanism';
import { BackPainTreatmentPhases, BackPainIntegratedCare } from '../../components/ayurveda/BackPainAcuteAndPricing';
import SportsPhysiotherapyModalities from '../../components/ayurveda/SportsPhysiotherapyModalities';
import BackPainAcuteAndPricing from '../../components/ayurveda/BackPainAcuteAndPricing';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import PhysiotherapyTeam from '../../components/ayurveda/PhysiotherapyTeam';
import FAQ from '../../components/home/FAQ';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import {
  backPainPhysioHero,
  backPainPhysioIntro,
  backPainPhysioConditions,
  backPainPhysioMechanism,
  backPainPhysioPhases,
  backPainPhysioModalities,
  backPainPhysioIntegratedCare,
  backPainPhysioAcuteAndPricing,
  backPainPhysioReviews,
  backPainPhysioTeam,
  backPainPhysioFaqs,
  backPainPhysioLocation,
  backPainPhysioCTA,
  backPainPhysioRelatedPages
} from '../../data/backPainPhysioJvcData';

const BackPainPhysioJvc = () => {
  const currentDate = new Date().toISOString();
  
  return (
    <>
      <Head>
        <title>Back Pain Physiotherapy in JVC | Vedara Care Polyclinic</title>
        <meta name="description" content="Expert back pain physiotherapy at Vedara Care Polyclinic in Jumeirah Village Circle (JVC), Dubai. Manual therapy, McKenzie method, dry needling, and more. Book now for same-day appointments." />
        <meta property="og:title" content="Back Pain Physiotherapy in JVC | Vedara Care Polyclinic" />
        <meta property="og:description" content="Expert back pain physiotherapy at Vedara Care Polyclinic in Jumeirah Village Circle (JVC), Dubai. Manual therapy, McKenzie method, dry needling, and more. Book now for same-day appointments." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://vedaracare.ae/physiotherapy/back-pain-jvc" />
      </Head>
      <div className="back-pain-physiotherapy-page">
        <AyurvedaHero {...backPainPhysioHero} />
        <AyurvedaIntro {...backPainPhysioIntro} />
        <PhysiotherapySpecializations 
          bgColor={backPainPhysioConditions.bgColor}
          label={backPainPhysioConditions.label}
          title={backPainPhysioConditions.title}
          description={backPainPhysioConditions.description}
          types={backPainPhysioConditions.types}
          footer={backPainPhysioConditions.footer}
        />
        <PhysiotherapyMechanism 
          bgColor={backPainPhysioMechanism.bgColor}
          label={backPainPhysioMechanism.label}
          title={backPainPhysioMechanism.title}
          content={backPainPhysioMechanism.content}
          quote={backPainPhysioMechanism.quote}
          image={backPainPhysioMechanism.image}
          alt={backPainPhysioMechanism.alt}
        />
        <BackPainTreatmentPhases 
          bgColor={backPainPhysioPhases.bgColor}
          label={backPainPhysioPhases.label}
          title={backPainPhysioPhases.title}
          description={backPainPhysioPhases.description}
          phases={backPainPhysioPhases.phases}
          footer={backPainPhysioPhases.footer}
        />
        <SportsPhysiotherapyModalities
          label={backPainPhysioModalities.label}
          title={backPainPhysioModalities.title}
          modalities={backPainPhysioModalities.modalities}
        />
        <BackPainAcuteAndPricing data={backPainPhysioAcuteAndPricing} />
        <TreatmentReviews {...backPainPhysioReviews} />
        <PhysiotherapyTeam {...backPainPhysioTeam} />
        <FAQ {...backPainPhysioFaqs} />
        <TreatmentLocation {...backPainPhysioLocation} />
         <BackPainIntegratedCare 
          bgColor={backPainPhysioIntegratedCare.bgColor}
          label={backPainPhysioIntegratedCare.label}
          title={backPainPhysioIntegratedCare.title}
          paragraph1={backPainPhysioIntegratedCare.paragraph1}
          paragraph2={backPainPhysioIntegratedCare.paragraph2}
          noteTitle={backPainPhysioIntegratedCare.noteTitle}
          noteDescription={backPainPhysioIntegratedCare.noteDescription}
          linkText={backPainPhysioIntegratedCare.linkText}
        />
        <FinalCTA {...backPainPhysioCTA} />
        <RelatedPages {...backPainPhysioRelatedPages} />
      </div>
    </>
  );
};

export default BackPainPhysioJvc;
