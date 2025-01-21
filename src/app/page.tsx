import Hero from '@/components/home/Hero'
import Vision from '@/components/home/Vision'
import ProgramHighlights from '@/components/home/ProgramHighlights'
import Timeline from '@/components/home/Timeline'
import CallToAction from '@/components/home/CallToAction'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Vision />
      <ProgramHighlights />
      <Timeline />
      <CallToAction />
    </main>
  );
}