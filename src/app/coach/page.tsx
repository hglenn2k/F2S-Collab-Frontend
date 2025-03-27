import React from 'react';
import Head from 'next/head';
import CoachHero from '@/components/coach/Hero';
import InitiativeDescription from '@/components/coach/InitiativeDescription';
import JobDescription from '@/components/coach/JobDescription';
import Benefits from '@/components/coach/Benefits';
import Qualifications from '@/components/coach/Qualifications';
import CallToAction from '@/components/coach/CallToAction';
import { UmamiAnalytics } from '@/components/UmamiAnalytics';

export default function CoachPage() {
    return (
        <>
            <Head>
                <title>Become a Coach</title>
                <meta name="description" content="Learn about becoming a coach for our initiative" />
                <UmamiAnalytics />
            </Head>
            <main className="min-h-screen">
                <CoachHero />
                <InitiativeDescription />
                <JobDescription />
                <Benefits />
                <Qualifications />
                <CallToAction />
            </main>
        </>
    );
}