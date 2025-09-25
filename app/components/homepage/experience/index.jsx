"use client";
// @flow strict

import { experiences } from '@/utils/data/experience';
import { getAssetPath } from '@/utils/asset-path';
import Image from 'next/image';
import { BsPersonWorkspace } from "react-icons/bs";
import { HiOutlineAcademicCap } from "react-icons/hi";
import experience from '../../../assets/lottie/code.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

function Experience() {
  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src={getAssetPath("/section.svg")}
        alt="Section Background"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
        quality={60}
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-violet-500 dark:via-gray-700 dark:to-gray-700"></span>
          <span className="bg-gradient-to-r from-violet-500 to-purple-600 dark:from-gray-800 dark:to-gray-800 w-fit text-white dark:text-white p-3 px-6 text-xl rounded-xl font-semibold shadow-lg">
            Experiences
          </span>
          <span className="w-24 h-[2px] bg-gradient-to-l from-transparent via-purple-600 to-purple-600 dark:via-gray-700 dark:to-gray-700"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gray-300 dark:bg-[#16f2b3] opacity-60 dark:opacity-30"></div>
            
            <div className="flex flex-col gap-6">
              {
                experiences.map((experience, index) => (
                  <div key={experience.id} className="relative flex items-start group">
                    <div className="absolute left-6 top-8 w-4 h-4 bg-violet-500 dark:bg-[#16f2b3] rounded-full border-4 border-white dark:border-[#0d1224] z-10 group-hover:scale-125 transition-all duration-300"></div>
                    
                    <div className="ml-16 w-full">
                      <GlowCard identifier={`experience-${experience.id}`}>
                        <div className="p-3 relative hover:scale-[1.02] transition-all duration-300">
                          <Image
                            src={getAssetPath("/blur-23.svg")}
                            alt="Blur Effect"
                            width={1080}
                            height={200}
                            className="absolute bottom-0 opacity-80"
                            loading="lazy"
                            quality={50}
                          />
                          <div className="flex justify-center">
                            <p className="text-xs sm:text-sm text-violet-600 dark:text-[#16f2b3]">
                              {experience.duration}
                            </p>
                          </div>
                          <div className="px-3 py-5">
                            {/* Main content area */}
                            <div className="flex items-center gap-x-4 sm:gap-x-8 mb-4">
                              <div className="text-violet-500 transition-all duration-300 hover:scale-125 flex-shrink-0">
                                <BsPersonWorkspace size={28} className="sm:w-9 sm:h-9" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm sm:text-base lg:text-xl mb-1 sm:mb-2 font-medium uppercase text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-[#16f2b3] transition-colors duration-300 break-words">
                                  {experience.title}
                                </p>
                                <p className="text-xs sm:text-sm lg:text-base text-gray-700 dark:text-white break-words">
                                  {experience.company}
                                </p>
                              </div>
                            </div>
                            
                            {/* Certificate Button - Full width on mobile, right-aligned on larger screens */}
                            {experience.certificate && (
                              <div className="flex justify-center sm:justify-end relative z-20">
                                <button 
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    console.log('Button clicked, opening:', experience.certificate);
                                    window.open(experience.certificate, '_blank', 'noopener,noreferrer');
                                  }}
                                  className="flex items-center gap-2 bg-violet-500 hover:bg-violet-600 dark:bg-[#16f2b3] dark:hover:bg-[#0dd9aa] text-white dark:text-[#0d1224] px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto justify-center sm:justify-start cursor-pointer border-none relative z-30 pointer-events-auto"
                                  style={{ zIndex: 9999 }}
                                >
                                  <HiOutlineAcademicCap size={16} />
                                  <span className="hidden sm:inline">Certificate</span>
                                  <span className="sm:hidden">View Certificate</span>
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      </GlowCard>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;