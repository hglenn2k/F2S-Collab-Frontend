import Hero from '@/components/home/Hero'
import Vision from '@/components/home/Vision'
import ProgramHighlights from '@/components/home/ProgramHighlights'
import Timeline from '@/components/home/Timeline'
import CallToAction from '@/components/home/CallToAction'
import { UmamiAnalytics } from '@/components/UmamiAnalytics'
import Head from 'next/head'

export default function Home() {
    return (
        <>
            <Head>
                <title>AZF2S Collaborative Homepage</title>
                <meta name="description" content="Learn about the Arizona Farm to School Collaborative" />
                <UmamiAnalytics />
            </Head>
            <main className="min-h-screen">
                <Hero />
                <Vision />
                <ProgramHighlights />
                <Timeline />
                <CallToAction />
            </main>
        </>
    );
}