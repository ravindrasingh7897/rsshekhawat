// Core Web Vitals monitoring
export function reportWebVitals(metric) {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Web Vitals:', metric);
  }

  // Send to analytics in production
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_category: 'Web Vitals',
      event_label: metric.id,
      non_interaction: true,
    });
  }

  // Send to other analytics services
  if (typeof window !== 'undefined') {
    // Example: Send to custom analytics
    const body = JSON.stringify(metric);
    const url = '/api/vitals';
    
    // Use sendBeacon if available
    if (navigator.sendBeacon) {
      navigator.sendBeacon(url, body);
    } else {
      fetch(url, { body, method: 'POST', keepalive: true });
    }
  }
}

// Performance observer for custom metrics
export function observePerformance() {
  if (typeof window === 'undefined') return;

  // Time to Interactive
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      // Log navigation timing
      if (entry.entryType === 'navigation') {
        const metrics = {
          dns: entry.domainLookupEnd - entry.domainLookupStart,
          connect: entry.connectEnd - entry.connectStart,
          ttfb: entry.responseStart - entry.requestStart,
          download: entry.responseEnd - entry.responseStart,
          dom: entry.domContentLoadedEventEnd - entry.responseEnd,
          load: entry.loadEventEnd - entry.loadEventStart,
        };
        
        console.log('Navigation Metrics:', metrics);
      }
    }
  });

  observer.observe({ entryTypes: ['navigation', 'resource', 'paint'] });
}

// Preload critical resources
export function preloadCriticalResources() {
  if (typeof window === 'undefined') return;

  const criticalResources = [
    '/hero.svg',
    '/profile.png',
    '/section.svg'
  ];

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.endsWith('.svg') ? 'image' : 'image';
    document.head.appendChild(link);
  });
}