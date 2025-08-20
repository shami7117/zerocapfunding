"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"
import Image from "next/image"

const accordionData = [
  {
    id: "qualification",
    title: "1. Qualification",
    content:
      "We assess your business eligibility through our streamlined qualification process. Our team reviews your business fundamentals to determine the best funding options available for your specific situation.",
    image: "/qualification.png",
  },
  {
    id: "application",
    title: "2. Application",
    content:
      "Complete our simple application process designed to gather essential information about your business. Our user-friendly interface makes it easy to submit all required documentation quickly and securely.",
    image: "/application.png",
  },
  {
    id: "growth",
    title: "3. Growth",
    content:
      "Once approved, we help you implement growth strategies with your new funding. Our expert team provides guidance on how to maximize your investment for sustainable business expansion.",
    image: "/growth1.png",
  },
  {
    id: "scaling",
    title: "4. Scaling",
    content:
      "Scale your business operations with confidence using our ongoing support and additional funding opportunities. We're committed to your long-term success and continued growth.",
    image: "/scaling.png",
  },
]

export function ProcessAccordionSection() {
  const [activeItem, setActiveItem] = useState<string>("qualification")

  const toggleItem = (itemId: string) => {
    setActiveItem(activeItem === itemId ? "" : itemId)
  }

  return (
    <section className="bg-[#001C53] py-12">
      <div className="mx-auto max-w-[1350px] px-6">
        <div className="grid items-start gap-2 md:grid-cols-2">
          {/* Left side - Accordion */}
          <div className="space-y-4 h-full overflow-x-hidden overflow-y-auto">
            {accordionData.map((item) => (
              <motion.div key={item.id} className="border-b border-white/20" initial={false}>
                <button
                  onClick={() => toggleItem(item.id)}
                  className="flex w-full items-center justify-between py-6 text-left"
                >
                  <h3 className="text-xl font-semibold text-white font-montserrat">{item.title}</h3>
                  <motion.div
                    animate={{ rotate: activeItem === item.id ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <Plus className="h-6 w-6 text-white" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {activeItem === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6">
                        <p className="text-white/80 font-montserrat leading-relaxed">{item.content}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Right side - Dynamic Image */}
          <div className="flex h-full justify-center">
            <motion.div
              key={activeItem}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full max-w-[515px]"
            >
              {activeItem && (
                <div className="rounded-2xl bg-[#001C53] p-8">
                  <Image
                    src={
                      accordionData.find((item) => item.id === activeItem)?.image || "/qualification-process.png"
                    }
                    alt={`${activeItem} process`}
                    width={515}
                    height={515}
                    className="h-full w-full rounded-lg"
                  />
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
