import { Button } from "@/components/ui/button"
import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="bg-[#001C53] text-white">
      {/* Top CTA section */}
      <div className="mx-auto max-w-[1350px] px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <h2 className="text-[38px] font-bold text-center md:text-left md:text-[46px]">
            See how much funding
            <br />
            you qualify for?
          </h2>
          <button className="rounded-[100px] bg-[#39BF00] px-8 py-2 text-[24px] font-semibold text-white hover:bg-[#2ead49] shadow-sm">
            Start application
          </button>
        </div>
      </div>

      {/* Divider line */}
      <div className="mx-auto max-w-[1350px] px-6">
        <div className="h-px bg-white/20"></div>
      </div>

      {/* Bottom section with logo and links */}
      <div className="mx-auto max-w-[1350px] px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Logo and description */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/footerlogo.png"
                alt="ZeroCap Funding"
                width={160}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed text-[#FFFFFF] max-w-sm">
              We help entrepreneurs access the capital they need, launch with confidence, and scale with clarity,
              building long-term partnerships that drive lasting growth.
            </p>
          </div>

          {/* Navigation links */}
          <div className="grid grid-cols-2 gap-8 md:col-span-1 lg:col-span-2">
            {/* First column */}
            <div>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-sm text-[#FFFFFF] hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-[#FFFFFF] hover:text-white transition-colors">
                    How it works?
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-[#FFFFFF] hover:text-white transition-colors">
                    About us
                  </a>
                </li>
              </ul>
            </div>

            {/* Second column */}
            <div>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-sm text-[#FFFFFF] hover:text-white transition-colors">
                    Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-[#FFFFFF] hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-[#FFFFFF] hover:text-white transition-colors">
                    Application
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy" className="text-sm text-[#FFFFFF] hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms-and-conditions" className="text-sm text-[#FFFFFF] hover:text-white transition-colors">
                    Terms and Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
