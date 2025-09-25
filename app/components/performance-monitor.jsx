'use client';

import { useEffect } from 'react';
import { observePerformance, preloadCriticalResources, reportWebVitals } from '@/utils/performance';

export default function PerformanceMonitor() {
  useEffect(() => {
    // Start performance monitoring
    observePerformance();
    preloadCriticalResources();

    // Set up web vitals reporting
    if (typeof window !== 'undefined') {
      // Dynamic import of web-vitals for better performance
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(reportWebVitals);
        getFID(reportWebVitals);
        getFCP(reportWebVitals);
        getLCP(reportWebVitals);
        getTTFB(reportWebVitals);
      });
    }
  }, []);

  return null; // This component doesn't render anything
}