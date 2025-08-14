import { useState, useEffect } from 'react';
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
        <div className="mx-auto max-w-[1350px] px-6 pt-8 pb-16 md:pt-12 md:pb-20">
          <div className="grid items-center gap-5 md:grid-cols-2">
            {/* Left column: copy */}
            <div>
              {/* Animated Pill */}
              <div className="inline-flex items-center justify-center rounded-full bg-[#39BF00] px-5  shadow-sm overflow-hidden w-full h-auto max-w-[371px] ">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentTextIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="text-[40px] font-semibold text-white whitespace-nowrap"
                  >
                    {pillTexts[currentTextIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
              {/* Headline */}
              <h1 className="mt-2 text-[40px] md:leading-[67px] text-center md:text-left font-bold text-[#0B2B4A] md:text-[60px] ">
                {"We'll help you get"}
                <br />
                <span className="text-[#39BF00]">{"$50K-$250K"}</span>
                {" with"}
                <br />
                {"0% interest funding."}
              </h1>
              {/* Social proof */}
              <div className="mt-2 flex flex-col md:flex-row items-center gap-4">
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
              <div className="mt-8 flex items-center justify-center md:justify-start">
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
              <div className="rounded-[10px] bg-white shadow-[0_10px_25px_rgba(0,0,0,0.15)]">
                <Image
                  src={"/hero.png"}
                  alt="Founder video thumbnail"
                  width={1040}
                  height={600}
                  className="h-auto w-full rounded-[10px]"
                  priority
                />
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
