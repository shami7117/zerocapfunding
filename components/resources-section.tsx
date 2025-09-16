"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRouter } from "next/navigation"

export function ResourcesSection() {
  const router=useRouter();
  const resources = [
    {
      id: 1,
      title: "5 Proven Ways to Secure $50K-$250K in 0% Interest Business Funding",
      image: "/men1.png",
      alt: "Businessman holding money showing funding success",
    },
    {
      id: 2,
      title: "How Smart Entrepreneurs Use OPM (Other People's Money) to Scale Fast",
      image: "/men2.png",
      alt: "Professional man working on laptop in modern office",
    },
    {
      id: 3,
      title: "7 Common Mistakes That Kill Your Chances of Getting Funded",
      image: "/women.png",
      alt: "Stressed businesswoman with laptop showing funding challenges",
    },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="mx-auto max-w-[1350px] px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12"
        >
          <h2 className="text-[40px] md:text-[44px] lg:text-[46px] font-bold text-[#001C53] font-montserrat leading-tight">
            Discover Strategies,
            <br />
            Insights & Success Stories
          </h2>

          <Button onClick={()=>{router.push('/resource')}} className="rounded-[100px]  bg-[#39BF00] hover:bg-[#2ead49] text-white px-8 py-6 text-[24px] font-semibold font-montserrat shadow-sm w-fit">
            Access to all resources
          </Button>
        </motion.div>

        {/* Resource Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-lg mb-2">
                <Image
                  src={resource.image || "/placeholder.svg"}
                  alt={resource.alt}
                  width={388}
                  height={258}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Title */}
              <h3 className="text-[20px] md:text-[24px] font-bold text-[#001C53] font-montserrat leading-[31px] group-hover:text-[#39BF00] transition-colors duration-300">
                {resource.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
