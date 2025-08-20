"use client"

import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import MarqueeStrip from "@/components/marquee-strip"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import HeroSection from "@/components/HeroSection"
import { BusinessFundingSection } from "@/components/business-funding-section"
import { HowWeAreDifferentSection } from "@/components/how-we-are-different-section"
import  TestimonialsSection  from "@/components/testimonials-section"
import { GrowthMissionSection } from "@/components/growth-mission-section"
import { ProcessAccordionSection } from "@/components/process-accordion-section"
import { ResourcesSection } from "@/components/resources-section"
import { SiteFooter } from "@/components/site-footer"
const pillTexts = [
  "Small businesses",
  "Startups",
  "Entrepreneurs", 
  "Growing companies",
  "Local businesses"
]

export default function Page() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => 
        prevIndex === pillTexts.length - 1 ? 0 : prevIndex + 1
      )
    }, 3000) // Change text every 3 seconds

    return () => clearInterval(interval)
  }, [])
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <BusinessFundingSection />
      <HowWeAreDifferentSection />
      <TestimonialsSection />
      <GrowthMissionSection/>
      <ProcessAccordionSection />
      <ResourcesSection />
      <SiteFooter />
    </div>
  )
}