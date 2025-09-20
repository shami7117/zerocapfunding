"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0.0, 0.2, 1]
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: [0.4, 0.0, 0.2, 1]
      }
    }
  }

  const itemVariants = {
    closed: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        delay: 0.1
      }
    }
  }

  const navItems = [
    { href: "#", label: "How it works?" },
    { href: "/case-study", label: "Case Study" },
    { href: "#reviews", label: "Testimonials" },
    { href: "/resource", label: "Resources" }
  ]

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex h-18 max-w-[1350px] items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50" aria-label="Zerocap Funding Home">
          <Image alt="logo" src={'/logo.png'} width={200} height={80}/>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 text-[15px] font-semibold text-[#0B2B4A] md:flex">
          {navItems.map((item, index) => (
            <motion.div
              key={item.label}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href={item.href} 
                className="transition-colors hover:text-[#39BF00]"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
         <motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <a
    href="https://application.zerocapfunding.com/"
    // target="_blank"
    rel="noopener noreferrer"
  >
    <Button
      className="rounded-full cursor-pointer font-semibold text-[15px] bg-[#39BF00] px-6 py-5 text-white hover:bg-[#2ead49]"
      size="lg"
    >
      Get in touch
    </Button>
  </a>
</motion.div>

        </div>

        {/* Mobile Hamburger */}
        <motion.button
          className="md:hidden z-50 p-2"
          onClick={toggleMenu}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle menu"
        >
          <motion.div
            animate={isOpen ? "open" : "closed"}
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 }
            }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-[#0B2B4A]" />
            ) : (
              <Menu className="h-6 w-6 text-[#0B2B4A]" />
            )}
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            // variants={menuVariants}
            className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-100 overflow-hidden relative z-30"
          >
            <nav className="px-6 py-4 space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  custom={index}
                  className="block"
                >
                  <Link
                    href={item.href}
                    className="block py-2 text-[15px] font-semibold text-[#0B2B4A] transition-colors hover:text-[#39BF00] active:text-[#39BF00]"
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              
              {/* Mobile CTA */}
              <motion.div
                variants={itemVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="pt-4"
              >
                <a
                  href="https://application.zerocapfunding.com/"
                  rel="noopener noreferrer"
                  className="block"
                  onClick={toggleMenu}
                >
                  <Button 
                    className="w-full rounded-full font-semibold text-[15px] bg-[#39BF00] px-6 py-5 text-white hover:bg-[#2ead49]" 
                    size="lg"
                  >
                    Get in touch
                  </Button>
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-20 md:hidden"
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>
    </header>
  )
}