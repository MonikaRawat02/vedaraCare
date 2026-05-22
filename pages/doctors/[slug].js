import React from 'react';
import Head from 'next/head';
import DoctorPage from '@/components/doctor/DoctorPage';

export default function DoctorSlugPage() {
  return (
    <>
      <Head>
        <title>Dr. Priya Nair | Ayurvedic Doctor | Vedara Care Dubai</title>
        <meta name="description" content="Dr. Priya Nair - DHA-licensed Ayurvedic physician at Vedara Care Polyclinic in JVC, Dubai. Specializing in chronic pain, PCOS, migraine, and stress-related disorders." />
      </Head>
      <DoctorPage />
    </>
  );
}
