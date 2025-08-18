import { useState, useEffect ,useRef} from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import MarqueeStrip from './marquee-strip';
import {SiteHeader} from './site-header';
import {Button} from './ui/button';

const pillTexts = [
  'Fast Approval',
  'No Collateral',
  'Flexible Terms',
];

export default function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
  

    // Load calendar script
    const calendarScript = document.createElement('script');
    calendarScript.src = 'https://link.msgsndr.com/js/form_embed.js';
    calendarScript.type = 'text/javascript';
    document.head.appendChild(calendarScript);

    // Try to play video with sound immediately
    const tryAutoplayWithSound = async () => {
      if (videoRef.current) {
        try {
          // First attempt: try unmuted autoplay directly
          videoRef.current.muted = false;
          await videoRef.current.play();
          console.log('Unmuted autoplay successful');
        } catch (error) {
          console.log('Unmuted autoplay failed, trying muted approach:', error);
          try {
            // Fallback: start muted and immediately try to unmute
            videoRef.current.muted = true;
            await videoRef.current.play();
            
            // Immediately pause and try to restart with sound
            videoRef.current.pause();
            videoRef.current.currentTime = 0; // Reset to beginning
            videoRef.current.muted = false;
            
            // Try to play with sound immediately
            await videoRef.current.play();
            console.log('Restarted with sound successfully');
          } catch (secondError) {
            console.log('All autoplay attempts failed:', secondError);
            // Final fallback: play muted and wait for user interaction
            if (videoRef.current) {
              videoRef.current.muted = true;
              videoRef.current.currentTime = 0;
              videoRef.current.play().catch(() => {});
            }
          }
        }
      }
    };

    // Add click listener to try unmuting on first user interaction
    const handleFirstInteraction = async () => {
      if (videoRef.current && videoRef.current.muted) {
        try {
          // Pause the video
          videoRef.current.pause();
          // Reset to beginning
          videoRef.current.currentTime = 0;
          // Unmute
          videoRef.current.muted = false;
          // Play with sound from the beginning
          await videoRef.current.play();
          console.log('Restarted with sound after user interaction');
        } catch (error) {
          console.log('Failed to restart with sound:', error);
          // If it fails, just unmute without restarting
          videoRef.current.muted = false;
        }
        // Remove the listener after first interaction
        document.removeEventListener('click', handleFirstInteraction);
        document.removeEventListener('touchstart', handleFirstInteraction);
        document.removeEventListener('keydown', handleFirstInteraction);
      }
    };

    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('touchstart', handleFirstInteraction);
    document.addEventListener('keydown', handleFirstInteraction);

    // Try autoplay with sound
    tryAutoplayWithSound();

    return () => {
      // Clean up scripts and event listeners
      const scripts = document.querySelectorAll('script[src="https://link.msgsndr.com/js/form_embed.js"]');
      scripts.forEach(script => script.remove());
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
    };
  }, []);

  const handleVideoClick = async () => {
    // Ensure video is unmuted and restart from beginning when user interacts with it
    if (videoRef.current) {
      try {
        const wasPlaying = !videoRef.current.paused;
        videoRef.current.pause();
        videoRef.current.currentTime = 0; // Reset to beginning
        videoRef.current.muted = false;
        await videoRef.current.play();
        console.log('Video restarted with sound from click');
      } catch (error) {
        console.log('Failed to restart video with sound:', error);
        // Fallback: just unmute without restarting
        videoRef.current.muted = false;
        if (videoRef.current.paused) {
          videoRef.current.play().catch(() => {});
        }
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) =>
        prevIndex === pillTexts.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-white font-[Montserrat]">
      <SiteHeader />
      <section className="relative">
        <div className="mx-auto max-w-[1350px] px-6 pt-8 pb-20 md:pt-12  md:pb-20">
          <div className="grid items-center gap-5 md:grid-cols-2">
            {/* Left column: copy */}
            <div>
              {/* Animated Pill */}
              <div className="inline-flex items-center justify-center rounded-full bg-[#39BF00] px-2 md:px-5  shadow-sm overflow-hidden w-full h-auto max-w-[270px] md:max-w-[371px] ">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentTextIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="text-[32px] md:text-[40px] font-semibold text-white whitespace-nowrap"
                  >
                    {pillTexts[currentTextIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
              {/* Headline */}
              <h1 className="mt-2 text-[36px] md:leading-[67px] text-left font-bold text-[#0B2B4A] md:text-[60px] ">
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
              <div className="mt-4 md:mt-8 flex items-center  justify-start">
                <Button
                  className="rounded-full bg-[#39BF00] px-7 py-6 text-base font-semibold text-white hover:bg-[#2ead49] shadow-sm"
                  size="lg"
                >
                  Get in touch
                </Button>
              </div>
            </div>
            {/* Right column: video card */}
            <div className="mx-auto h-full w-full max-w-[535px]">
              {/* <div className="rounded-[10px] bg-white shadow-[0_10px_25px_rgba(0,0,0,0.15)]">
                <Image
                  src={"/hero.png"}
                  alt="Founder video thumbnail"
                  width={1040}
                  height={600}
                  className="h-auto w-full rounded-[10px]"
                  priority
                />
              </div> */}
                <div className="rounded-[10px] bg-white shadow-[0_10px_25px_rgba(0,0,0,0.15)] w-full  mx-auto">
                  <div className="video-aspect-wrapper">
                    {/* <div className="video-muted-indicator" id="mutedIndicator">
                      🔇 Click anywhere to hear audio from start
                    </div> */}
                    <video 
                      ref={videoRef}
                      className="custom-video"
                      controls
                      autoPlay
                      muted // Start muted to ensure autoplay works
                      playsInline
                      preload="metadata"
                      poster=""
                      onClick={handleVideoClick}
                      onLoadedData={() => {
                        // Show muted indicator initially
                        const indicator = document.getElementById('mutedIndicator');
                        if (indicator && videoRef.current?.muted) {
                          indicator.classList.add('show');
                          // Hide after 3 seconds
                          setTimeout(() => {
                            indicator.classList.remove('show');
                          }, 3000);
                        }
                      }}
                      onVolumeChange={() => {
                        // Hide indicator when unmuted
                        const indicator = document.getElementById('mutedIndicator');
                        if (indicator && videoRef.current && !videoRef.current.muted) {
                          indicator.classList.remove('show');
                        }
                      }}
                      style={{
                        width: '100%',
                        maxWidth: '700px',
                        margin: '0 auto',
                        display: 'block',
                        borderRadius: '8px'
                      }}
                    >
                      <source 
                        src="https://storage.googleapis.com/msgsndr/xlHSgxItOx75weYBw7Sl/media/685eb15b9aefd6eb00987e60.mp4" 
                        type="video/mp4" 
                      />
                      Your browser does not support the video tag.
                    </video>
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
  );
}
