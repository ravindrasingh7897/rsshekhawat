'use client';

import { useEffect } from 'react';
import { getAssetPath } from '@/utils/asset-path';

const ImagePreloader = () => {
  useEffect(() => {
    // Preload critical background images
    const imagesToPreload = [
      getAssetPath('/hero.svg'),
      getAssetPath('/section.svg'),
      getAssetPath('/blur-23.svg'),
      getAssetPath('/profile.png'),
      getAssetPath('/image/hp.png'),
      getAssetPath('/image/mp.png'),
      getAssetPath('/image/th.png'),
      getAssetPath('/image/ct.png')
    ];

    imagesToPreload.forEach((imageSrc) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = imageSrc;
      document.head.appendChild(link);
    });

    return () => {
      // Cleanup preload links on unmount
      const preloadLinks = document.querySelectorAll('link[rel="preload"][as="image"]');
      preloadLinks.forEach(link => {
        if (imagesToPreload.includes(link.href)) {
          document.head.removeChild(link);
        }
      });
    };
  }, []);

  return null; // This component doesn't render anything
};

export default ImagePreloader;