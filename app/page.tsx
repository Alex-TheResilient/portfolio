import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import { WorkSection } from '@/components/sections/WorkSection';
import { EducationSection } from '@/components/sections/EducationSection';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Header />
      <div className="relative w-full">
        <HeroSection />
      </div>
      <div className="container mx-auto max-w-4xl">
        <div className="scroll-mt-8 space-y-8">
          <WorkSection />
          <EducationSection />
        </div>
      </div>
      {/* <div className="container mx-auto max-w-4xl">
        <div className="scroll-mt-8 space-y-8">
          
        </div>
      </div> */}
      {/* <EducationSection /> */}
      {/* <ProjectsSection /> */}
    </div>
  );
}
