import Hero from '@/components/sections/Hero'
import Vision from '@/components/sections/Vision'
import ProgramHighlights from '@/components/sections/ProgramHighlights'
import Timeline from '@/components/sections/Timeline'
import CallToAction from '@/components/sections/CallToAction'

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