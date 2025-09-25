// @flow strict
'use client';

import { personalData } from "@/utils/data/personal-data";
import { getAssetPath } from "@/utils/asset-path";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiCodeforces, SiLeetcode } from "react-icons/si";
import { useState, useEffect, useMemo } from "react";

function TypingEffect() {
  const designations = useMemo(() => ["Software Developer", "Coding Enthusiast", "Problem Solver", "Full Stack Developer"], []);
  const [currentDesignation, setCurrentDesignation] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [isMounted, setIsMounted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Add a small delay to ensure proper initialization
    const initTimer = setTimeout(() => {
      setHasStarted(true);
    }, 100);
    
    return () => clearTimeout(initTimer);
  }, []);

  useEffect(() => {
    if (!isMounted || !hasStarted) return;

    const handleTyping = () => {
      const current = designations[currentDesignation];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
        setTypingSpeed(50);
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentDesignation((prev) => (prev + 1) % designations.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentDesignation, designations, typingSpeed, isMounted, hasStarted]);

  return (
    <span className="bg-gradient-to-r from-pink-600 to-violet-600 dark:from-pink-500 dark:to-violet-500 bg-clip-text text-transparent">
      {isMounted ? currentText : designations[0]}
      <span className="animate-pulse text-gray-500 dark:text-gray-400">|</span>
    </span>
  );
}

function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedElements, setAnimatedElements] = useState({
    greeting: false,
    name: false,
    typing: false,
    intro: false,
    buttons: false,
    social: false
  });

  useEffect(() => {
    // Trigger the initial visibility
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Stagger each element with delays
    const timers = [
      setTimeout(() => setAnimatedElements(prev => ({ ...prev, greeting: true })), 200),
      setTimeout(() => setAnimatedElements(prev => ({ ...prev, name: true })), 500),
      setTimeout(() => setAnimatedElements(prev => ({ ...prev, typing: true })), 800),
      setTimeout(() => setAnimatedElements(prev => ({ ...prev, intro: true })), 1100),
      setTimeout(() => setAnimatedElements(prev => ({ ...prev, buttons: true })), 1400),
      setTimeout(() => setAnimatedElements(prev => ({ ...prev, social: true })), 1700),
    ];

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [isVisible]);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center py-4 lg:py-12 min-h-screen pt-20">
      <Image
        src={getAssetPath("/hero.svg")}
        alt="Hero Background"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
        priority
        quality={75}
      />

      <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center p-2">
          {/* Greeting */}
          <p className={`text-lg md:text-xl text-gray-900 dark:text-white mb-4 transition-all duration-700 ${
            animatedElements.greeting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Hello, I&apos;m
          </p>

          {/* Main Name */}
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-normal py-2 transition-all duration-700 ${
            animatedElements.name ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Ravindra Singh Shekhawat
          </h1>

          {/* Typing Effect */}
          <h2 className={`text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white mb-8 h-12 flex items-center justify-center transition-all duration-700 ${
            animatedElements.typing ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <TypingEffect />
          </h2>

          {/* Brief Introduction */}
          <p className={`text-base md:text-lg text-gray-800 dark:text-white max-w-2xl leading-relaxed mb-8 transition-all duration-700 ${
            animatedElements.intro ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            I craft exceptional digital experiences by blending creative design with cutting-edge technology. Passionate about building products that make a difference.
          </p>

          {/* Action Buttons */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 transition-all duration-700 ${
            animatedElements.buttons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <Link 
              href="#contact" 
              onClick={(e) => handleSmoothScroll(e, 'contact')}
              className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
            >
              <button className="px-6 py-3 md:px-8 md:py-4 bg-white dark:bg-black rounded-full border-none text-center text-sm font-medium uppercase tracking-wider text-gray-800 dark:text-white no-underline transition-all duration-200 ease-out md:font-semibold flex items-center gap-2 hover:gap-3">
                <span>Get In Touch</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link 
              href={personalData.resume}
              target="_blank"
              className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
            >
              <button className="px-6 py-3 md:px-8 md:py-4 bg-white dark:bg-black rounded-full border-none text-center text-sm font-medium uppercase tracking-wider text-gray-800 dark:text-white no-underline transition-all duration-200 ease-out md:font-semibold flex items-center gap-2 hover:gap-3">
                <MdDownload size={16} />
                <span>Download Resume</span>
              </button>
            </Link>
          </div>

          {/* Social Links */}
          <div className={`flex items-center justify-center gap-6 transition-all duration-700 ${
            animatedElements.social ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <Link
              href={personalData.github}
              target='_blank'
              className="transition-all text-gray-800 dark:text-white hover:text-pink-500 dark:hover:text-pink-400 hover:scale-110 duration-300"
            >
              <BsGithub size={24} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target='_blank'
              className="transition-all text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 hover:scale-110 duration-300"
            >
              <BsLinkedin size={24} />
            </Link>
            <Link
              href={personalData.twitter}
              target='_blank'
              className="transition-all text-gray-800 dark:text-white hover:text-blue-400 dark:hover:text-blue-300 hover:scale-110 duration-300"
            >
              <FaTwitterSquare size={24} />
            </Link>
            <Link
              href={personalData.leetcode}
              target='_blank'
              className="transition-all text-gray-800 dark:text-white hover:text-orange-500 dark:hover:text-orange-400 hover:scale-110 duration-300"
            >
              <SiLeetcode size={24} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;