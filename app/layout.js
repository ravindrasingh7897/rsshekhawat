import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import ImagePreloader from "./components/image-preloader";
import Navbar from "./components/navbar";
import { ThemeProvider } from "./components/theme-provider";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ravindra Singh Shekhawat - Full Stack Developer",
  description: "Experienced Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Creating exceptional digital experiences with cutting-edge solutions.",
  keywords: "Full Stack Developer, React Developer, Next.js, Node.js, JavaScript, TypeScript, Web Developer, Software Engineer, Ravindra Singh Shekhawat",
  authors: [{ name: "Ravindra Singh Shekhawat" }],
  creator: "Ravindra Singh Shekhawat",
  publisher: "Ravindra Singh Shekhawat",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://your-domain.com'), // Replace with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Ravindra Singh Shekhawat - Full Stack Developer",
    description: "Experienced Full Stack Developer creating exceptional digital experiences with modern web technologies.",
    url: 'https://your-domain.com', // Replace with your actual domain
    siteName: 'Ravindra Singh Shekhawat Portfolio',
    images: [
      {
        url: '/og-image.png', // Add this image to your public folder
        width: 1200,
        height: 630,
        alt: 'Ravindra Singh Shekhawat - Full Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ravindra Singh Shekhawat - Full Stack Developer",
    description: "Experienced Full Stack Developer creating exceptional digital experiences.",
    images: ['/og-image.png'], // Same image as OpenGraph
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/hero.svg" as="image" />
        <link rel="preload" href="/section.svg" as="image" />
        <link rel="preload" href="/blur-23.svg" as="image" />
        
        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#6366f1" />
        <meta name="msapplication-TileColor" content="#6366f1" />
        
        {/* Structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Ravindra Singh Shekhawat",
              "jobTitle": "Full Stack Developer",
              "url": "https://your-domain.com", // Replace with your domain
              "sameAs": [
                "https://github.com/yourusername", // Replace with your social links
                "https://linkedin.com/in/yourusername",
                "https://twitter.com/yourusername"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              },
              "knowsAbout": [
                "JavaScript",
                "React",
                "Next.js",
                "Node.js",
                "Full Stack Development",
                "UI/UX Design"
              ]
            })
          }}
        />
        
        {/* Theme initialization script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.setAttribute('data-theme', theme);
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
        
        {/* Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider>
          <ImagePreloader />
          <ToastContainer />
          <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-gray-800 dark:text-white">
            <Navbar />
            {children}
            <ScrollToTop />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
