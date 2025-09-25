// @flow strict
import { educations } from '@/utils/data/educations';
import { getAssetPath } from '@/utils/asset-path';
import Image from 'next/image';
import { BsPersonWorkspace } from "react-icons/bs";
import lottieFile from '../../../assets/lottie/study.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

function Education() {
  return (
    <div id="education" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src={getAssetPath("/section.svg")}
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-violet-500 dark:via-gray-700 dark:to-gray-700"></span>
          <span className="bg-gradient-to-r from-violet-500 to-purple-600 dark:from-gray-800 dark:to-gray-800 w-fit text-white dark:text-white p-3 px-6 text-xl rounded-xl font-semibold shadow-lg">
            Educations
          </span>
          <span className="w-24 h-[2px] bg-gradient-to-l from-transparent via-purple-600 to-purple-600 dark:via-gray-700 dark:to-gray-700"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-3/4 h-3/4">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gray-300 dark:bg-[#16f2b3] opacity-60 dark:opacity-30"></div>
            
            <div className="flex flex-col gap-6">
              {
                educations.map((education, index) => (
                  <div key={education.id} className="relative flex items-start group">
                    <div className="absolute left-6 top-8 w-4 h-4 bg-violet-500 dark:bg-[#16f2b3] rounded-full border-4 border-white dark:border-[#0d1224] z-10 group-hover:scale-125 transition-all duration-300"></div>
                    
                    <div className="ml-16 w-full">
                      <GlowCard identifier={`education-${education.id}`}>
                        <div className="p-3 relative hover:scale-[1.02] transition-all duration-300">
                          <Image
                            src={getAssetPath("/blur-23.svg")}
                            alt="Hero"
                            width={1080}
                            height={200}
                            className="absolute bottom-0 opacity-80"
                          />
                          <div className="flex justify-center">
                            <p className="text-xs sm:text-sm text-violet-600 dark:text-[#16f2b3]">
                              {education.duration}
                            </p>
                          </div>
                          <div className="px-3 py-5">
                            <div className="flex items-center gap-x-4 sm:gap-x-8 mb-4">
                              <div className="text-violet-500 transition-all duration-300 hover:scale-125 flex-shrink-0">
                                <BsPersonWorkspace size={28} className="sm:w-9 sm:h-9" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm sm:text-base lg:text-xl mb-1 sm:mb-2 font-medium uppercase text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-[#16f2b3] transition-colors duration-300 break-words">
                                  {education.title}
                                </p>
                                <p className="text-xs sm:text-sm lg:text-base text-gray-700 dark:text-white break-words">
                                  {education.institution}
                                </p>
                              </div>
                            </div>
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

export default Education;