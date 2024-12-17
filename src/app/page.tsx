import Hero from '@/components/sections/Hero'
import Vision from '@/components/sections/Vision'
import Retreat from '@/components/sections/Retreat'
import ProgramHighlights from '@/components/sections/ProgramHighlights'
import Timeline from '@/components/sections/Timeline'
import TeamBuilding from '@/components/sections/TeamBuilding'
import Resources from '@/components/sections/Resources'
import CTA from '@/components/sections/CTA'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Retreat />
      <ProgramHighlights />
      <Vision />
      <Timeline />
      <TeamBuilding />
      <Resources />
      <CTA />
    </main>
  );
}