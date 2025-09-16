"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function GrowthMissionSection() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[1350px] px-6">
        <div className="grid items-start gap-12 md:grid-cols-2 lg:gap-16">
          {/* Left column: content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Headline */}
            <h2 className="font-montserrat text-[38px] font-bold leading-tight text-[#001C53] md:text-[40px] lg:text-[46px]">
              One Mission: Your Growth.
              <br />
              Now It's Your Turn.
            </h2>

            {/* Description */}
            <p className="font-montserrat text-[22px] font-semoibold text-[#001C53] md:text-[24px]">
              Take this short quiz to see how much you could get approved for (it takes less than 60 seconds).
            </p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <a
    href="https://application.zerocapfunding.com/"
    // target="_blank"
    rel="noopener noreferrer"
  >
    <Button
                className="rounded-full bg-[#39BF00] px-8 py-6 text-[24px] font-semibold text-white hover:bg-[#2ea600] shadow-lg font-montserrat"
                size="lg"
              >
                Check if you qualify
              </Button>
  </a>
            </motion.div>
          </motion.div>

          {/* Right column: team image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/growth.png"
                alt="Professional team collaborating around a table"
                width={568}
                height={438}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
