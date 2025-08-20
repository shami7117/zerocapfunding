"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function BusinessFundingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })



  return (
  <section ref={ref} className="bg-white py-12 font-sans">
      <div className="mx-auto max-w-[1350px] px-6">
        <div className="grid items-start gap-5 md:grid-cols-2">
          {/* Left column: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeOut", type: "tween" }}
            className="order-2 max-w-[535px] max-h-[708px] h-full md:order-1"
          >
            <div className="relative rounded-[10px] overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.15)]">
              <Image
                src="/opentowork.jpg"
                alt="Professional businessman with #OPENTOWORK overlay"
                width={464}
                height={708}
                className="h-full w-full object-cover"
              />
              {/* Gradient overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(0, 28, 83, 0) 38.94%, rgba(0, 28, 83, 0.8) 61.06%)',
                }}
              />
            </div>
          </motion.div>

          {/* Right column: Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            {/* Main headline */}
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, ease: "easeOut", type: "tween", delay: 0.2 }}
              className="text-[32px] leading-[1.1] font-extrabold text-[#001C53] md:text-[46px] md:leading-[1.05]"
            >
              We make getting{" "}
              <span className="inline-flex items-center rounded-full bg-[#39BF00] px-4 py-1 text-white">
                business funding
              </span>{" "}
              fast, easy, and stress-free
            </motion.h2>

            {/* First proven system section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, ease: "easeOut", type: "tween", delay: 0.4 }}
              className="mt-8"
            >
              <h3 className="text-xl font-bold text-[#001C53] mb-3">Proven system</h3>
              <p className="text-[20px] font-medium leading-[32px] text-[#001C53] ">
                There's no shortcut to funding, but our proven system helps business owners access $50K-$250K without
                tax returns, paystubs, or upfront costs — and it's already delivered millions in approved funding.
              </p>
            </motion.div>

            {/* Second proven system section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, ease: "easeOut", type: "tween", delay: 0.6 }}
              className="mt-6"
            >
              <h3 className="text-xl font-bold text-[#001C53] mb-3">Proven system</h3>
              <p className="text-[20px] font-medium leading-[32px] text-[#001C53] ">
                There's no shortcut to funding, but our proven system helps business owners access $50K-$250K without
                tax returns, paystubs, or upfront costs — and it's already delivered millions in approved funding.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, ease: "easeOut", type: "tween", delay: 0.8 }}
              className="mt-8"
            >
              <Button
                className="rounded-full bg-[#39BF00] px-7 py-6 text-[20px]  leading-[32px] font-semibold text-white hover:bg-[#2ead49] shadow-sm"
                size="lg"
              >
                Get in touch
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}