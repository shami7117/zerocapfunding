"use client"

import { motion, useAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "Carla Coach",
    verified: true,
    text: "When I first heard about ZeroCap Funding, I was skeptical. But after speaking with their team and getting $150,000 in 0% interest funding, they also guided me on how to use the money wisely. Today I have a team of 5 and doubled my revenue. I had just six months left. These guys didn't disappoint me. ZeroCap has truly become part of my growth story.",
  },
  {
    name: "Michelle L",
    verified: true,
    text: "I run a small salon and didn't think I'd qualify for any kind of funding. ZeroCap's team proved me wrong. I got $50k in 0% funding. Upgraded my salon, hired two more stylists, and doubled our monthly bookings. The process was simple — and the team stuck with me through every challenge.",
  },
  {
    name: "Daniel M",
    verified: true,
    text: "I always thought funding was only for tech startups — until I discovered ZeroCap. They got me with 0% interest. I used it to build my brand, launch new products, and my coaching program. I hit my first $10k month within just 6 months. The support they give you after funding is what really sets them apart from everyone else.",
  },
  {
    name: "Sarah K",
    verified: true,
    text: "ZeroCap changed everything for my e-commerce business. I was struggling with inventory and cash flow. Their 0% interest funding gave me the breathing room I needed. Now I'm doing 3x my previous revenue and expanding to new markets. The team's ongoing support has been invaluable.",
  },
  {
    name: "Marcus T",
    verified: true,
    text: "As a restaurant owner, the pandemic hit us hard. ZeroCap's funding helped us pivot to delivery and upgrade our kitchen. The 0% interest meant we could focus on growth instead of debt payments. We're now profitable again and planning our second location.",
  },
  {
    name: "Lisa R",
    verified: true,
    text: "I thought my consulting business was too small for funding. ZeroCap proved me wrong with $75k in 0% interest funding. I hired two consultants, invested in marketing, and tripled my client base. The application process was surprisingly smooth and fast.",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const controls = useAnimation()

  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Desktop marquee animation
  useEffect(() => {
    if (!isMobile) {
      const startAnimation = async () => {
        await controls.start({
          x: [0, -2400], // Adjust based on total width of cards
          transition: {
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }
        })
      }
      startAnimation()
    }
  }, [controls, isMobile])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  const TestimonialCard = ({ testimonial, index }: { testimonial: any; index: number }) => (
    <motion.div 
      key={index} 
      className="w-[389px] h-[522px] flex-shrink-0 rounded-2xl bg-[#001C53] p-6 text-white mx-3"
    >
      <div className="mb-4 flex justify-between items-center gap-2">
        <h3 className="font-bold text-[22px] font-montserrat">{testimonial.name}</h3>
        {testimonial.verified && (
          <motion.div 
            className="flex items-center bg-[#D9D9D924] p-1 rounded-[100px] gap-1"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            <CheckCircle className="h-4 w-4 text-[#39BF00]" />
            <span className="text-[12px] text-[#39BF00] font-montserrat">Verified</span>
          </motion.div>
        )}
      </div>
      <p className="mb-6 text-sm leading-relaxed font-montserrat">{testimonial.text}</p>
      <Button className="rounded-full bg-[#39BF00] px-6 py-2 text-sm font-semibold text-white hover:bg-[#2ea600] font-montserrat transition-all duration-300 hover:shadow-lg hover:shadow-[#39BF00]/25">
        Continue Reading
      </Button>
    </motion.div>
  )

  return (
    <section className="bg-white font-montserrat py-12 overflow-hidden">
      <div className="mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-12 mx-auto max-w-[1350px] px-6 text-center md:text-left"
        >
          <h2 className="text-3xl font-bold text-[#001C53] md:text-4xl lg:text-5xl font-montserrat">
            Trusted by 300+
            <br />
            Entrepreneurs $45M+ in 0%
            <br />
            Interest Funding Secured
          </h2>
        </motion.div>

        {/* Desktop: Custom Marquee with Framer Motion */}
        <div className="hidden md:block">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="overflow-hidden"
          >
            <motion.div 
              className="flex items-center py-4"
              animate={controls}
            >
              {/* Triple the testimonials for seamless infinite scroll */}
              {testimonials.concat(testimonials).concat(testimonials).map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} index={index} />
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile: Single card with navigation */}
        <div className="md:hidden">
          <div className="relative">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 300, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -300, scale: 0.8 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30,
                opacity: { duration: 0.2 }
              }}
              className="px-2"
            >
              <div className="rounded-2xl bg-[#001C53] p-6 text-white relative overflow-hidden">
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#001C53] via-[#002B7A] to-[#001C53] opacity-50" />
                
                <div className="relative z-10">
                  <div className="mb-4 flex items-center gap-2">
                    <h3 className="font-semibold text-lg font-montserrat">{testimonials[currentIndex].name}</h3>
                    {testimonials[currentIndex].verified && (
                      <motion.div 
                        className="flex items-center bg-[#D9D9D924] p-1 rounded-[100px] gap-1"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.3, type: "spring" }}
                      >
                        <CheckCircle className="h-4 w-4 text-[#39BF00]" />
                        <span className="text-sm text-[#39BF00] font-montserrat">Verified</span>
                      </motion.div>
                    )}
                  </div>
                  <motion.p 
                    className="mb-6 text-sm leading-relaxed font-montserrat"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    {testimonials[currentIndex].text}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Button className="rounded-full bg-[#39BF00] px-6 py-2 text-sm font-semibold text-white hover:bg-[#2ea600] font-montserrat transition-all duration-300 hover:shadow-lg hover:shadow-[#39BF00]/25 hover:scale-105">
                      Continue Reading
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Mobile Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-[-16px]  top-1/2 -translate-y-1/2 rounded-full bg-white/10 backdrop-blur-md p-3 text-white hover:bg-white/20 transition-all duration-300 border border-white/20 z-20"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-[-16px] top-1/2 -translate-y-1/2 rounded-full bg-white/10 backdrop-blur-md p-3 text-white hover:bg-white/20 transition-all duration-300 border border-white/20 z-20"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile Dots indicator */}
          <div className="mt-8 flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative transition-all duration-300 ${
                  index === currentIndex ? "w-8 h-3" : "w-3 h-3"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              >
                <div 
                  className={`w-full h-full rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-[#39BF00]" : "bg-gray-300"
                  }`}
                />
                {index === currentIndex && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-[#39BF00]/30"
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}