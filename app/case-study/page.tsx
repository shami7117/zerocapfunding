"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const CaseStudiesPage: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const caseStudies = [
    {
      id: 1,
      title: "Landed his first client in 60 days & makes $9k/mo",
      name: "Andrew",
      revenue: "$9k/mo",
      description: "How we helped Andrew $9,432 month with his AI Arbitrage Agency",
      details: "Financial advisor escapes $2M 'profitable prison,' builds $10k/month AI agency in 60 days using partnerships and community support.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face"
    },
    {
      id: 2,
      title: "From 9-5 to $20,000/mo with AI tools",
      name: "Alex",
      revenue: "$20,000/mo",
      description: "How we helped Alex to escape corporate 9 to 5 ($20k/mo)",
      details: "A corporate sales pro escaped the 9-to-5 and built a $20k/month AI agency from scratch. Here's the blueprint he used.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop&crop=face"
    },
    {
      id: 3,
      title: "He 3X'd his business in 90 days with AI",
      name: "Steven",
      revenue: "3X Growth",
      description: "How we helped Steven 3X'd his business in 90 days with AI",
      details: "In just 3 months. Here's how he used AI to innovate and scale.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=300&fit=crop&crop=face"
    },
    {
      id: 4,
      title: "She quit her job & now makes $50k/mo",
      name: "Stephanie",
      revenue: "$50k/mo",
      description: "How we helped Stephanie quit her job & now makes $50k/month with AI",
      details: "Built a scalable AI agency targeting painters with systematic client acquisition.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=300&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section 
        className="py-20 px-4 sm:px-6 lg:px-8"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            variants={fadeInUp}
          >
            Our growth{' '}
            <span className="text-[#39BF00]">case studies</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            We could have written a clever subheading here... but there's no need 
            when you have partners like we do!
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={fadeInUp}
          >
            <button className="bg-[#39BF00] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#32a300] transition-colors duration-300 flex items-center gap-2">
              Apply Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:border-[#39BF00] hover:text-[#39BF00] transition-colors duration-300">
              See Testimonials
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Disclaimer */}
      <motion.section 
        className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-gray-600 leading-relaxed">
            <strong>DISCLOSURE:</strong> In a survey of over 660 businesses with over 100 responding, business owners averaged $18,105 in monthly revenue after 
            implementing our system. All testimonials shown are real, but do not claim to represent typical results. Any success depends on many variables, which 
            are unique to each individual, including commitment and effort. Testimonial results are meant to demonstrate what the most dedicated students have 
            done and should not be considered average. AI Acquisition makes no guarantee of any financial gain from the use of its products.
          </p>
        </div>
      </motion.section>

      {/* Case Studies Grid */}
      <motion.section 
        className="py-20 px-4 sm:px-6 lg:px-8"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <motion.div
                key={study.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={study.image}
                    alt={`${study.name} - Success Story`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="text-2xl font-bold text-white bg-black/30 w-10 h-10 rounded-full flex items-center justify-center">A</div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full">
                    <span className="text-[#39BF00] font-bold">{study.revenue}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-bold mb-1 leading-tight">{study.title}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{study.description}</h4>
                  <p className="text-gray-600 mb-4">{study.details}</p>
                  
                  <button className="flex items-center text-[#39BF00] font-semibold hover:text-[#32a300] transition-colors duration-300">
                    Read case study
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
            <div className="flex-1">
              {/* <div className="text-2xl font-bold mb-2">A</div> */}
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Get Started With A Free Consultation
              </h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-[#39BF00]">
                  Access Our AI Business Playbook (Free)
                </h3>
                <p className="text-gray-300 mb-6 max-w-md">
                  Get the exact playbook we used to build our own AI-powered agency. Inside, you'll discover the strategies, 
                  tools, and workflows that helped us systemize growth.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-full border-1 border-solid border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#39BF00]"
                  />
                  <button className="bg-[#39BF00] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#32a300] transition-colors duration-300">
                    Get access
                  </button>
                </div>
              </div>
            </div>
            
            <div className="lg:ml-8">
              <button className="bg-[#39BF00] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#32a300] transition-colors duration-300 flex items-center gap-2">
                Apply Now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          
         
        </div>
      </motion.section>
    </div>
  );
};

export default CaseStudiesPage;