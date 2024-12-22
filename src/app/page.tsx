import Hero from '@/components/sections/Hero'
import Vision from '@/components/sections/Vision'
import Retreat from '@/components/sections/Retreat'
import ProgramHighlights from '@/components/sections/ProgramHighlights'
import Timeline from '@/components/sections/Timeline'
import TeamBuilding from '@/components/sections/TeamBuilding'
import Resources from '@/components/sections/Resources'
import CallToAction from '@/components/sections/CallToAction'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Vision />
      <ProgramHighlights />
      <Retreat />
      <Timeline />
      <TeamBuilding />
      <Resources />
      <CallToAction />
    </main>
  );
}