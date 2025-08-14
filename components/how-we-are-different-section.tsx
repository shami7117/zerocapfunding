"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Phone, Video, MoreVertical, ArrowLeft } from "lucide-react"
import Image from "next/image"

export function HowWeAreDifferentSection() {
  return (
    <section className="bg-[#001C53] py-12 ">
      <div className="mx-auto max-w-[1350px] px-6">
        <div className="grid items-start gap-12 md:grid-cols-2">
          {/* Left column: content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="font-montserrat"
          >
            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-[40px]  font-bold text-white md:text-[48px] leading-relaxed md:leading-[66px]"
            >
              How we are <span className="inline-block rounded-full bg-[#39BF00] px-4  text-white">different</span>
            </motion.h2>

            {/* Mission statement */}
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-6 text-[24px] font-medium leading-relaxed md:leading-[44px] text-white md:text-[32px]"
            >
              Your success is our mission
            </motion.h3>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }} 
              className="mt-4 text-[24px] leading-relaxed font-medium text-white/90 md:leading-[44px] md:text-[32px]"
            >
              We guide you through every stage of
              <br />
              your journey, from funding to growth.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <Button
                className="rounded-full bg-[#39BF00] px-8 py-6 text-[24px] font-semibold text-white hover:bg-[#2ea600] shadow-lg font-montserrat"
                size="lg"
              >
                Check if you qualify
              </Button>
            </motion.div>
          </motion.div>

          {/* Right column: phone mockup with chat interface */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
           <Image src={"/review.png"} alt="Review" width={400} height={400} />  
          </motion.div>
        </div>
      </div>
    </section>
  )
}
