import { personalData } from "@/utils/data/personal-data";
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Critical components - load immediately
import HeroSection from "./components/homepage/hero-section";

// Performance monitoring
import { observePerformance, preloadCriticalResources } from '@/utils/performance';
import PerformanceMonitor from './components/performance-monitor';

// Non-critical components - lazy load
const AboutSection = dynamic(() => import("./components/homepage/about"), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-500"></div></div>
});

const Experience = dynamic(() => import("./components/homepage/experience"), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-500"></div></div>
});

const Skills = dynamic(() => import("./components/homepage/skills"), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-500"></div></div>
});

const Projects = dynamic(() => import("./components/homepage/projects"), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-500"></div></div>
});

const Education = dynamic(() => import("./components/homepage/education"), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-500"></div></div>
});

const Achievements = dynamic(() => import("./components/homepage/achievements"), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-500"></div></div>
});

const ContactSection = dynamic(() => import("./components/homepage/contact"), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-500"></div></div>
});

export default async function Home() {
  return (
    <div suppressHydrationWarning>
      {/* Performance monitoring */}
      <PerformanceMonitor />
      
      {/* Critical above-the-fold content */}
      <HeroSection />
      
      {/* Lazy loaded sections */}
      <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-500"></div></div>}>
        <AboutSection />
      </Suspense>
      
      <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-500"></div></div>}>
        <Experience />
      </Suspense>
      
      <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-500"></div></div>}>
        <Skills />
      </Suspense>
      
      <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-500"></div></div>}>
        <Projects />
      </Suspense>
      
      <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-500"></div></div>}>
        <Education />
      </Suspense>
      
      <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-500"></div></div>}>
        <Achievements />
      </Suspense>
      
      <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-500"></div></div>}>
        <ContactSection />
      </Suspense>
    </div>
  );
};