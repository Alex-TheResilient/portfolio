import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Header />
      <div className="">
        <HeroSection />
      </div>
      {/* <AboutSection /> */}
      {/* <ProjectsSection /> */}
      {/* <ExperienceSection /> */}
    </div>
  );
}
