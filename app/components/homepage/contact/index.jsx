// @flow strict
'use client';
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { HiOutlinePaperAirplane } from "react-icons/hi2";
import { useState } from 'react';

function ContactSection() {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleEmailClick = async (e) => {
    e.preventDefault();
    console.log('Email button clicked'); // Debug log
    
    try {
      // Copy email to clipboard
      await navigator.clipboard.writeText(personalData.email);
      console.log('Email copied to clipboard'); // Debug log
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 3000);
      
      // Try to open mailto after a small delay
      setTimeout(() => {
        const mailtoLink = `mailto:${personalData.email}?subject=Project%20Inquiry&body=Hi%20Ravindra,%0D%0A%0D%0AI'm%20interested%20in%20discussing%20a%20project%20with%20you.%0D%0A%0D%0ABest%20regards`;
        window.open(mailtoLink);
      }, 100);
      
    } catch (err) {
      console.error('Failed to copy email:', err);
      // Fallback: just try to open mailto
      const mailtoLink = `mailto:${personalData.email}?subject=Project%20Inquiry&body=Hi%20Ravindra,%0D%0A%0D%0AI'm%20interested%20in%20discussing%20a%20project%20with%20you.%0D%0A%0D%0ABest%20regards`;
      window.open(mailtoLink);
    }
  };
  return (
    <div id="contact" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-violet-500 dark:via-gray-700 dark:to-gray-700"></span>
          <span className="bg-gradient-to-r from-violet-500 to-purple-600 dark:from-gray-800 dark:to-gray-800 w-fit text-white dark:text-white p-3 px-6 text-xl rounded-xl font-semibold shadow-lg">
            Contact
          </span>
          <span className="w-24 h-[2px] bg-gradient-to-l from-transparent via-purple-600 to-purple-600 dark:via-gray-700 dark:to-gray-700"></span>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Let&apos;s Work Together
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Ready to bring your ideas to life? I&apos;m always excited to discuss new opportunities and creative projects.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Contact Info Cards */}
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Get In Touch</h3>
              
              <div className="flex-1 flex flex-col justify-between space-y-6">
                {/* Email Card */}
                <div className="group relative overflow-hidden flex-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-none transition-all duration-300"></div>
                  <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 group-hover:shadow-2xl h-full flex items-center">
                    <div className="flex items-center gap-4 w-full">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-xl text-white group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                        <MdAlternateEmail size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h4>
                        <p className="text-gray-600 dark:text-gray-300">{personalData.email}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="group relative overflow-hidden flex-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl blur-xl group-hover:blur-none transition-all duration-300"></div>
                  <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-green-400 dark:hover:border-green-500 transition-all duration-300 group-hover:shadow-2xl h-full flex items-center">
                    <div className="flex items-center gap-4 w-full">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-3 rounded-xl text-white group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                        <IoMdCall size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Phone</h4>
                        <p className="text-gray-600 dark:text-gray-300">{personalData.phone}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Location Card */}
                <div className="group relative overflow-hidden flex-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl group-hover:blur-none transition-all duration-300"></div>
                  <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-300 group-hover:shadow-2xl h-full flex items-center">
                    <div className="flex items-center gap-4 w-full">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-3 rounded-xl text-white group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                        <CiLocationOn size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Location</h4>
                        <p className="text-gray-600 dark:text-gray-300">{personalData.address}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col">
              <div className="bg-violet-100 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 border-2 border-violet-300 dark:border-gray-700 rounded-3xl p-8 lg:p-12 h-full flex flex-col justify-center shadow-xl dark:shadow-none">
                <div className="text-center flex-1 flex flex-col justify-center">
                  <div className="bg-gradient-to-r from-violet-500 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse shadow-lg">
                    <HiOutlinePaperAirplane size={32} className="text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Ready to Start a Project?
                  </h3>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                    I&apos;m currently available for freelance work and full-time opportunities. 
                    Let&apos;s discuss how we can bring your vision to life.
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                    <button 
                      type="button"
                      onClick={handleEmailClick}
                      className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-violet-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 relative cursor-pointer"
                    >
                      <MdAlternateEmail size={20} />
                      <span>{emailCopied ? 'Email Copied!' : 'Send Email'}</span>
                      {emailCopied && (
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap z-10">
                          📧 {personalData.email} copied!
                        </div>
                      )}
                    </button>
                    
                    <Link 
                      href={personalData.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center"
                    >
                      View Resume
                    </Link>
                  </div>

                  {/* Social Links */}
                  <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Connect with me</p>
                    <div className="flex justify-center gap-4">
                      <Link target="_blank" href={personalData.github} className="group">
                        <div className="bg-gray-200 dark:bg-gray-700 p-3 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-300 group-hover:scale-110">
                          <IoLogoGithub size={24} className="text-gray-700 dark:text-gray-300 group-hover:text-white" />
                        </div>
                      </Link>
                      
                      <Link target="_blank" href={personalData.linkedIn} className="group">
                        <div className="bg-gray-200 dark:bg-gray-700 p-3 rounded-xl hover:bg-blue-600 transition-all duration-300 group-hover:scale-110">
                          <BiLogoLinkedin size={24} className="text-gray-700 dark:text-gray-300 group-hover:text-white" />
                        </div>
                      </Link>
                      
                      <Link target="_blank" href={personalData.twitter} className="group">
                        <div className="bg-gray-200 dark:bg-gray-700 p-3 rounded-xl hover:bg-gray-900 transition-all duration-300 group-hover:scale-110">
                          <FaXTwitter size={24} className="text-gray-700 dark:text-gray-300 group-hover:text-white" />
                        </div>
                      </Link>
                      
                      <Link target="_blank" href={personalData.facebook} className="group">
                        <div className="bg-gray-200 dark:bg-gray-700 p-3 rounded-xl hover:bg-blue-600 transition-all duration-300 group-hover:scale-110">
                          <FaFacebook size={24} className="text-gray-700 dark:text-gray-300 group-hover:text-white" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;