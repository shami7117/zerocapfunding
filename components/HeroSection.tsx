import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import MarqueeStrip from './marquee-strip';
import {Button} from './ui/button';

const pillTexts = [
  'Fast Approval',
  'No Collateral',
  'Flexible Terms',
];

export default function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    // Load Vidalytics script directly
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      (function (v, i, d, a, l, y, t, c, s) {
        y='_'+d.toLowerCase();c=d+'L';if(!v[d]){v[d]={};}if(!v[c]){v[c]={};}if(!v[y]){v[y]={};}var vl='Loader',vli=v[y][vl],vsl=v[c][vl + 'Script'],vlf=v[c][vl + 'Loaded'],ve='Embed';
        if (!vsl){vsl=function(u,cb){
          if(t){cb();return;}s=i.createElement("script");s.type="text/javascript";s.async=1;s.src=u;
          if(s.readyState){s.onreadystatechange=function(){if(s.readyState==="loaded"||s.readyState=="complete"){s.onreadystatechange=null;vlf=1;cb();}};}else{s.onload=function(){vlf=1;cb();};}
          i.getElementsByTagName("head")[0].appendChild(s);
        };}
        vsl(l+'loader.min.js',function(){if(!vli){var vlc=v[c][vl];vli=new vlc();}vli.loadScript(l+'player.min.js',function(){var vec=v[d][ve];t=new vec();t.run(a);});});
      })(window, document, 'Vidalytics', 'vidalytics_embed_85_LKud0q04SwH9p', 'https://fast.vidalytics.com/embeds/mTjNBMz0/85_LKud0q04SwH9p/');
    `;
    document.head.appendChild(script);

    // Simple styling observer
    const styleVideo = () => {
      setTimeout(() => {
        const videoWrapper = document.querySelector('.video-shadow-wrapper') as HTMLElement;
        if (videoWrapper) {
          videoWrapper.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
          videoWrapper.style.borderRadius = '10px';
          videoWrapper.style.overflow = 'hidden';
        }
      }, 3000);
    };

    styleVideo();

    return () => {
      // Clean up
      const scripts = document.querySelectorAll('script[src*="vidalytics"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) =>
        prevIndex === pillTexts.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Animation variants for vertical rotation
  const pillVariants = {
    initial: (direction: number) => ({
      y: direction > 0 ? 100 : -100,
      opacity: 0,
      rotateX: direction > 0 ? 90 : -90,
      scale: 0.8,
    }),
    animate: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      scale: 1,
    },
    exit: (direction: number) => ({
      y: direction > 0 ? -100 : 100,
      opacity: 0,
      rotateX: direction > 0 ? -90 : 90,
      scale: 0.8,
    }),
  };

  return (
    <>
      <style jsx global>{`
        /* Video wrapper shadow styles */
        .video-shadow-wrapper {
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15) !important;
          border-radius: 10px !important;
          overflow: hidden !important;
          background: #000 !important;
          position: relative !important;
          width: 100% !important;
          max-width: 535px !important;
          margin: 0 auto !important;
        }
        
        /* Video centering styles */
        .video-container {
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          width: 100% !important;
          margin: 0 auto !important;
        }
        
        .AutoPlayBox__wrapper {
          max-width: 535px !important;
          display: flex !important;
          justify-content: center !important;
          margin: 0 auto !important;
        }
        
        div.Tech__wrapper * {
          display: flex !important;
          justify-content: center !important;
          max-width: 535px !important;
        }
        
        div.Tech__wrapper {
          margin: 0 auto !important;
          display: flex !important;
          justify-content: center !important;
          max-width: 535px !important;
        }
        
        #vidalytics_embed_85_LKud0q04SwH9p {
          margin: 0 auto !important;
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          width: 100% !important;
          height: 100% !important;
          border-radius: 10px !important;
          overflow: hidden !important;
          max-width: 535px !important;
        }
        
        #vidalytics_embed_85_LKud0q04SwH9p > * {
          margin: 0 auto !important;
          border-radius: 10px !important;
        }
        
        /* Additional fallback styles */
        .vidalytics-wrapper {
          text-align: center !important;
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          width: 100% !important;
          max-width: 535px !important;
          margin: 0 auto !important;
        }
        
        .vidalytics-wrapper > * {
          margin: 0 auto !important;
        }
        
        /* Video element styles - comprehensive targeting */
        .video-shadow-wrapper video,
        .video-shadow-wrapper iframe,
        #vidalytics_embed_85_LKud0q04SwH9p video,
        #vidalytics_embed_85_LKud0q04SwH9p iframe,
        #vidalytics_embed_85_LKud0q04SwH9p div[style*="background"],
        #vidalytics_embed_85_LKud0q04SwH9p > div,
        #vidalytics_embed_85_LKud0q04SwH9p > div > div,
        #vidalytics_embed_85_LKud0q04SwH9p > div > div > div,
        .vidalytics-wrapper > div,
        .vidalytics-wrapper > div > div,
        [id^="vidalytics_"] video,
        [id^="vidalytics_"] iframe,
        [class*="vidalytics"] video,
        [class*="vidalytics"] iframe,
        [class*="video"] video,
        [class*="video"] iframe,
        [class*="player"] video,
        [class*="player"] iframe {
          border-radius: 10px !important;
          width: 100% !important;
          height: 100% !important;
        }
        
        /* Ensure the wrapper takes precedence for shadow */
        .video-shadow-wrapper {
          position: relative !important;
          z-index: 1 !important;
        }
        
        /* Override for text elements to remove any inherited styles */
        .video-shadow-wrapper span,
        .video-shadow-wrapper p,
        .video-shadow-wrapper h1,
        .video-shadow-wrapper h2,
        .video-shadow-wrapper h3,
        .video-shadow-wrapper h4,
        .video-shadow-wrapper h5,
        .video-shadow-wrapper h6,
        .video-shadow-wrapper button,
        .video-shadow-wrapper a,
        #vidalytics_embed_85_LKud0q04SwH9p span,
        #vidalytics_embed_85_LKud0q04SwH9p p,
        #vidalytics_embed_85_LKud0q04SwH9p h1,
        #vidalytics_embed_85_LKud0q04SwH9p h2,
        #vidalytics_embed_85_LKud0q04SwH9p h3,
        #vidalytics_embed_85_LKud0q04SwH9p h4,
        #vidalytics_embed_85_LKud0q04SwH9p h5,
        #vidalytics_embed_85_LKud0q04SwH9p h6,
        #vidalytics_embed_85_LKud0q04SwH9p button,
        #vidalytics_embed_85_LKud0q04SwH9p a {
          box-shadow: none !important;
        }
      `}</style>

      <main className="bg-white font-[Montserrat]">
        <section className="relative">
          <div className="mx-auto max-w-[1350px] px-6 pt-8 pb-20 md:pt-12 md:pb-20">
            <div className="grid items-center gap-5 md:grid-cols-2">
              {/* Left column: copy */}
              <div>
                {/* Animated Pill Container */}
                <div className="relative flex items-center justify-start w-full h-auto max-w-[270px] md:max-w-[371px] mb-2" style={{ height: '60px' }}>
                  <AnimatePresence mode="wait" custom={currentTextIndex}>
                    <motion.div
                      key={currentTextIndex}
                      custom={currentTextIndex % 2 === 0 ? 1 : -1}
                      variants={pillVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ 
                        duration: 0.7, 
                        ease: [0.23, 1, 0.32, 1],
                        type: "spring",
                        damping: 20,
                        stiffness: 100
                      }}
                      className="absolute inset-0 flex items-center justify-center rounded-full bg-[#39BF00] px-2 md:px-5 shadow-sm"
                      style={{
                        transformStyle: 'preserve-3d',
                        backfaceVisibility: 'hidden'
                      }}
                    >
                      <span className="text-[32px] md:text-[40px] font-semibold text-white whitespace-nowrap">
                        {pillTexts[currentTextIndex]}
                      </span>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Headline */}
                <h1 className="mt-2 text-[36px] md:leading-[67px] text-left font-bold text-[#0B2B4A] md:text-[60px]">
                  {"We'll help you get"}
                  <br />
                  <span className="text-[#39BF00]">{"$50K-$250K"}</span>
                  {" with"}
                  <br />
                  {"0% interest funding."}
                </h1>
                {/* Social proof */}
                <div className="mt-2 flex flex-col md:flex-row items-start md:items-center gap-4">
                  <div className="flex -space-x-3">
                    <Image
                      src={"/person1.png"}
                      alt="Happy customer 1"
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full border-2 border-white object-cover"
                    />
                    <Image
                      src={"/person2.png"}
                      alt="Happy customer 2"
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full border-2 border-white object-cover"
                    />
                    <Image
                      src={"/person3.png"}
                      alt="Happy customer 3"
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full border-2 border-white object-cover"
                    />
                  </div>
                  <p className="text-base font-semibold text-[#0B2B4A]">Hundreds of happy customers</p>
                </div>
                {/* CTA */}
                <div className="mt-4 md:mt-8 flex items-center justify-start">
                 
                     <a
                        href="https://application.zerocapfunding.com/"
                        // target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          className="rounded-full bg-[#39BF00] px-7 py-6 text-base font-semibold text-white hover:bg-[#2ead49] shadow-sm"
                    size="lg"
                        >
                          Get in touch
                        </Button>
                      </a>
                </div>
              </div>
              {/* Right column: Vidalytics VSL */}
              <div className="mx-auto h-full w-full max-w-[535px]">
                <div className="video-container">
                  <div className="vidalytics-wrapper w-full max-w-[535px] mx-auto">
                    {/* Outer shadow wrapper */}
                    <div className="video-shadow-wrapper w-full max-w-[535px] mx-auto">
                      <div 
                        id="vidalytics_embed_85_LKud0q04SwH9p" 
                        style={{
                          width: '100%',
                          maxWidth: '535px',
                          margin: '0 auto',
                          display: 'block',
                          position: 'relative',
                          paddingTop: '56.25%',
                          textAlign: 'center',
                          backgroundColor: 'transparent',
                          borderRadius: '10px',
                          minHeight: '300px'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom marquee */}
          <MarqueeStrip
            items={[
              { icon: '💸', text: '0% Interest Rates' },
              { icon: '📈', text: 'Zero Capital Investment' },
              { icon: '🚀', text: 'Scale Business' },
            ]}
          />
        </section>
      </main>
    </>
  );
}