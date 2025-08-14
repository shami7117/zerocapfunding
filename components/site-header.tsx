"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BarChart3 } from "lucide-react"
import Image from "next/image"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex h-22 max-w-[1350px] items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" aria-label="Zerocap Funding Home">
          <Image alt="logo" src={'/logo.png'} width={200} height={120}/>
        </Link>

        {/* Nav */}
        <nav className="hidden items-center gap-8 text-[15px] font-semibold text-[#0B2B4A] md:flex">
          <Link href="#" className="transition-colors hover:text-[#39BF00]">
            How it works?
          </Link>
          <Link href="#" className="transition-colors hover:text-[#39BF00]">
            About Us
          </Link>
          <Link href="#" className="transition-colors hover:text-[#39BF00]">
            Testimonials
          </Link>
          <Link href="#" className="transition-colors hover:text-[#39BF00]">
            Resources
          </Link>
        </nav>

        {/* CTA */}
        <div className="ml-auto md:ml-0">
          <Button className="rounded-full font-semibold text-[15px] bg-[#39BF00] px-6 py-5 text-white hover:bg-[#2ead49]" size="lg">
            Get in touch
          </Button>
        </div>
      </div>
    </header>
  )
}
