"use client"

import { motion, useMotionValue, useTransform, PanInfo } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react"
import { useState, useRef, useEffect } from "react"

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
  const scrollRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const cardWidth = 400
  const gap = 24

  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: index * (cardWidth + gap),
        behavior: "smooth",
      })
    }
    setCurrentIndex(index)
  }

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % testimonials.length
    setCurrentIndex(newIndex)
    if (!isMobile) {
      scrollToIndex(newIndex)
    }
  }

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
    if (!isMobile) {
      scrollToIndex(newIndex)
    }
  }

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const offset = info.offset.x
    const velocity = info.velocity.x
    
    // Threshold for swipe detection
    const threshold = 50
    
    if (Math.abs(offset) > threshold || Math.abs(velocity) > 500) {
      if (offset > 0 || velocity > 0) {
        prevSlide()
      } else {
        nextSlide()
      }
    }
  }

  const handleDesktopDrag = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (scrollRef.current) {
      const currentScroll = scrollRef.current.scrollLeft
      const newScroll = currentScroll - info.delta.x
      scrollRef.current.scrollLeft = newScroll
    }
  }

  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[1350px] px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center md:text-left"
        >
          <h2 className="text-3xl font-bold text-[#001C53] md:text-4xl lg:text-5xl font-[Montserrat]">
            Trusted by 300+
            <br />
            Entrepreneurs $45M+ in 0%
            <br />
            Interest Funding Secured
          </h2>
        </motion.div>

        {/* Desktop: Horizontal scroll with drag */}
        <div className="hidden md:block">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 cursor-grab active:cursor-grabbing select-none"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDrag={handleDesktopDrag}
            whileDrag={{ cursor: "grabbing" }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="w-[389px] h-[522px] flex-shrink-0 rounded-2xl bg-[#001C53] p-6 text-white"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="mb-4 flex justify-between items-center gap-2">
                  <h3 className="font-bold text-[22px] font-[Montserrat]">{testimonial.name}</h3>
                  {testimonial.verified && (
                    <div className="flex items-center bg-[#D9D9D924] p-1 rounded-[100px] gap-1">
                      <CheckCircle className="h-4 w-4 text-[#39BF00]" />
                      <span className="text-[12px] text-[#39BF00] font-[Montserrat]">Verified</span>
                    </div>
                  )}
                </div>
                <p className="mb-6 text-sm leading-relaxed font-[Montserrat]">{testimonial.text}</p>
                <Button className="rounded-full bg-[#39BF00] px-6 py-2 text-sm font-semibold text-white hover:bg-[#2ea600] font-[Montserrat] transition-colors">
                  Continue Reading
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Desktop Navigation Controls */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  className={`h-2 w-8 rounded-full transition-colors ${
                    Math.floor(currentIndex) === index ? "bg-[#39BF00]" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="rounded-full bg-gray-100 p-3 text-[#001C53] hover:bg-gray-200 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextSlide}
                className="rounded-full bg-[#39BF00] p-3 text-white hover:bg-[#2ea600] transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile: Swipeable single card */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="w-full flex-shrink-0 px-2"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="rounded-2xl bg-[#001C53] p-6 text-white">
                    <div className="mb-4 flex items-center gap-2">
                      <h3 className="font-semibold text-lg font-[Montserrat]">{testimonial.name}</h3>
                      {testimonial.verified && (
                        <div className="flex items-center gap-1">
                          <CheckCircle className="h-4 w-4 text-[#39BF00]" />
                          <span className="text-sm text-[#39BF00] font-[Montserrat]">Verified</span>
                        </div>
                      )}
                    </div>
                    <p className="mb-6 text-sm leading-relaxed font-[Montserrat]">{testimonial.text}</p>
                    <Button className="rounded-full bg-[#39BF00] px-6 py-2 text-sm font-semibold text-white hover:bg-[#2ea600] font-[Montserrat] transition-colors">
                      Continue Reading
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Mobile Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors backdrop-blur-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile Dots indicator */}
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-[#39BF00]" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Swipe indicator */}
          {/* <div className="mt-4 text-center">
            <p className="text-sm text-gray-500 font-[Montserrat]">← Swipe to see more reviews →</p>
          </div> */}
        </div>
      </div>
    </section>
  )
}