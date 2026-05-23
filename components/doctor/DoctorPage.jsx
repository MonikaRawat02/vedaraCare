import React from 'react';
import DoctorHero from './DoctorHero';
import DoctorProfileSummary from './DoctorProfileSummary';
import DoctorCredentials from './DoctorCredentials';
import DoctorSpecialties from './DoctorSpecialties';
import DoctorConsultation from './DoctorConsultation';
import Reviews from '../home/Reviews';
import DoctorLanguagesSchedule from './DoctorLanguagesSchedule';
import DoctorFAQ from './DoctorFAQ';
import TreatmentLocation from '../ayurveda/TreatmentLocation';
import DoctorCTA from './DoctorCTA';
import DoctorOtherPractitioners from './DoctorOtherPractitioners';
import DoctorArticles from './DoctorArticles';

import { drPriyaNair } from '../../data/doctorData';

const DoctorPage = ({ doctorData = drPriyaNair }) => {
  return (
    <>
      <DoctorHero doctor={doctorData} />
      <DoctorProfileSummary doctor={doctorData} />
      <DoctorCredentials doctor={doctorData} />
      <DoctorSpecialties doctor={doctorData} />
      <DoctorConsultation doctor={doctorData} />
      <Reviews doctor={doctorData} />
      <DoctorLanguagesSchedule doctor={doctorData} />
      <DoctorFAQ doctor={doctorData} />
      <TreatmentLocation {...doctorData.location} />
      <DoctorCTA doctor={doctorData} />
      <DoctorOtherPractitioners />
      <DoctorArticles doctor={doctorData} />
    </>
  );
};

export default DoctorPage;
