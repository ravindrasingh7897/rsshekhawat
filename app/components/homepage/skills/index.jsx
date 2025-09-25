// @flow strict
'use client';

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import { useState, useEffect, lazy, Suspense } from "react";

// Lazy load the Marquee component
const Marquee = lazy(() => import("react-fast-marquee"));

// Loading component for Marquee
const MarqueeLoader = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-500"></div>
  </div>
);

function Skills() {
  const [isClient, setIsClient] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px',
      }
    );

    const skillsElement = document.getElementById('skills');
    if (skillsElement) {
      observer.observe(skillsElement);
    }

    return () => {
      if (skillsElement) {
        observer.unobserve(skillsElement);
      }
    };
  }, []);

  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-violet-500 dark:via-gray-700 dark:to-gray-700"></span>
          <span className="bg-gradient-to-r from-violet-500 to-purple-600 dark:from-gray-800 dark:to-gray-800 w-fit text-white dark:text-white p-3 px-6 text-xl rounded-xl font-semibold shadow-lg">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-gradient-to-l from-transparent via-purple-600 to-purple-600 dark:via-gray-700 dark:to-gray-700"></span>
        </div>
      </div>

      <div className="w-full my-12">
        {/* Always render the container, but conditionally render Marquee */}
        <div className="min-h-[200px] flex items-center justify-center">
          {isClient && isVisible ? (
            <Suspense fallback={<MarqueeLoader />}>
              <Marquee
                gradient={false}
                speed={80}
                pauseOnHover={true}
                pauseOnClick={true}
                delay={0}
                play={true}
                direction="left"
              >
                {skillsData.map((skill, id) => (
                  <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
                    key={id}>
                    <div className="h-full w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                      <div className="flex -translate-y-[1px] justify-center">
                        <div className="w-3/4">
                          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center gap-3 p-6">
                        <div className="h-8 sm:h-10">
                          <Image
                            src={skillsImage(skill)?.src}
                            alt={skill}
                            width={40}
                            height={40}
                            className="h-full w-auto rounded-lg"
                            loading="lazy"
                          />
                        </div>
                        <p className="text-gray-800 dark:text-white text-sm sm:text-lg">
                          {skill}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Marquee>
            </Suspense>
          ) : (
            <MarqueeLoader />
          )}
        </div>
      </div>
    </div>
  );
}

export default Skills;