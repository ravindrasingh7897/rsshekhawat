// @flow strict
'use client';

import * as React from 'react';
import Image from 'next/image';

function ProjectCard({ project }) {
  const [showFullDescription, setShowFullDescription] = React.useState(false);
  
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const shortDescription = project.description.length > 150 
    ? project.description.substring(0, 150) + '...' 
    : project.description;

  return (
    <div className="from-gray-100 dark:from-[#0d1224] border-gray-300 dark:border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-gray-200 dark:to-[#0a0d37] w-full shadow-lg dark:shadow-none">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        
        <p className="text-center ml-3 text-violet-600 dark:text-[#16f2b3] text-base lg:text-xl">
          {project.name}
        </p>
      </div>
      
      <div className="overflow-hidden border-t-[2px] border-gray-400 dark:border-indigo-900 flex flex-col lg:flex-row">
        
        <div className="lg:w-1/3 w-full p-4 lg:p-6 flex items-center justify-center bg-gradient-to-br from-gray-50 dark:from-[#0a0b1e] to-gray-100 dark:to-[#16213e] border-r border-gray-300 dark:border-indigo-900/50">
          <div className="relative w-full h-48 lg:h-64 rounded-lg overflow-hidden group">
            {project.image ? (
              <>
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 33vw"
                  loading="lazy"
                  quality={75}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute inset-0 rounded-lg border border-violet-500/30 group-hover:border-violet-400/60 transition-colors duration-300" />
                
                
              </>
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 rounded-lg flex items-center justify-center border border-gray-300 dark:border-violet-500/20">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-r from-pink-500 to-violet-600 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-400 text-sm">Project Image</p>
                </div>
              </div>
            )}
          </div>
        </div>

                <div className="lg:w-2/3 w-full px-4 lg:px-8 py-4 lg:py-8 flex flex-col justify-between">
          {/* Project Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">About This Project</h3>
            <p className="text-gray-800 dark:text-white leading-relaxed text-sm lg:text-base">
              {showFullDescription ? project.description : shortDescription}
            </p>
            {project.description.length > 150 && (
              <button 
                onClick={toggleDescription}
                className="text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 underline mt-2 text-sm transition-colors duration-200 font-medium"
              >
                {showFullDescription ? 'Show Less' : 'Read More'}
              </button>
            )}
          </div>

          {/* Tools/Technologies */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-3 uppercase tracking-wider">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, i) => (
                <span 
                  key={i}
                  className="px-3 py-1 bg-gradient-to-r from-violet-100 to-pink-100 dark:from-violet-900/30 dark:to-pink-900/30 text-violet-800 dark:text-violet-200 text-xs rounded-full border border-violet-200 dark:border-violet-700/50 font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Project Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-3 uppercase tracking-wider">Project Links</h4>
            <div className="flex gap-4">
              {project.code && (
                <a 
                  href={project.code} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white rounded-lg transition-all duration-200 text-sm font-medium group"
                >
                  <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                  View Code
                </a>
              )}
              {project.demo && (
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 text-white rounded-lg transition-all duration-200 text-sm font-medium group"
                >
                  <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
              )}
              {!project.code && !project.demo && (
                <span className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white rounded-lg text-sm italic">
                  Coming Soon
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;