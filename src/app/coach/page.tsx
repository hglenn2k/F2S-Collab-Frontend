import React from 'react';
import CoachHero from '@/components/coach/Hero';
import InitiativeDescription from '@/components/coach/InitiativeDescription';
import JobDescription from '@/components/coach/JobDescription';
import Benefits from '@/components/coach/Benefits';
import Qualifications from '@/components/coach/Qualifications';
import CallToAction from '@/components/coach/CallToAction';

export default function CoachPage() {
  return (
    <main className="min-h-screen">
      <CoachHero />
      <InitiativeDescription />
      <JobDescription />
      <Benefits />
      <Qualifications />
      <CallToAction />
    </main>
  );
}