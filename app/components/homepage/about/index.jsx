// @flow strict

import { personalData } from "@/utils/data/personal-data";
import { getAssetPath } from "@/utils/asset-path";
import Image from "next/image";


function AboutSection() {
  return (
    <div id="about" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src={getAssetPath("/section.svg")}
        alt="Section Background"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
        quality={60}
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-violet-500 dark:via-gray-700 dark:to-gray-700"></span>
          <span className="bg-gradient-to-r from-violet-500 to-purple-600 dark:from-gray-800 dark:to-gray-800 w-fit text-white dark:text-white p-3 px-6 text-xl rounded-xl font-semibold shadow-lg">
            Who I Am
          </span>
          <span className="w-24 h-[2px] bg-gradient-to-l from-transparent via-purple-600 to-purple-600 dark:via-gray-700 dark:to-gray-700"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Text Content */}
        <div className="order-2 lg:order-1 space-y-6">
          <div className="space-y-4">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
              Hello! I&apos;m Ravindra Singh Shekhawat
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Full-Stack Web Developer & Computer Science Student
            </p>
          </div>
          
          <div className="space-y-4 text-gray-800 dark:text-gray-200">
            <p className="text-base lg:text-lg leading-relaxed">
              I&apos;m a final-year Computer Science student at LNMIIT, Jaipur, and a Full-Stack Web Developer with hands-on experience in building production-ready applications.
            </p>
            
            <p className="text-base lg:text-lg leading-relaxed">
              I have worked on projects ranging from a Learning Management System with secure authentication, DRM video streaming, and Razorpay integration, to real-time polling apps and tour booking platforms.
            </p>
            
            <p className="text-base lg:text-lg leading-relaxed">
              Skilled in the MERN stack, REST APIs, and modern UI libraries, I focus on creating scalable, user-friendly solutions. With internship experience as both a full-stack and front-end engineer, I bring strong problem-solving, deployment expertise, and team collaboration skills to every project.
            </p>
          </div>

          {/* Key Skills/Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              <span className="text-gray-700 dark:text-gray-300">MERN Stack Developer</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              <span className="text-gray-700 dark:text-gray-300">Problem Solver</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              <span className="text-gray-700 dark:text-gray-300">Team Player</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              <span className="text-gray-700 dark:text-gray-300">Quick Learner</span>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center order-1 lg:order-2">
          <div className="relative">
            {/* Decorative background */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
            
            {/* Main image */}
            <div className="relative">
              <Image
                src={personalData.profile}
                width={320}
                height={320}
                alt="Ravindra Singh Shekhawat"
                className="rounded-2xl transition-all duration-500 hover:scale-105 cursor-pointer shadow-xl"
                priority
                quality={85}
              />
              
              {/* Optional overlay gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Floating elements for decoration */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-60 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;