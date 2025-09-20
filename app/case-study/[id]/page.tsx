"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const CaseStudyDetailPage: React.FC = () => {
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

  const fadeInFromLeft = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  };

  const relatedCaseStudies = [
    {
      id: 1,
      title: "How Jared Improved His Life With An AI agent app",
      description: "From aspiring freelancer to $10k/month: How Jared went from zero to seven figures as a salesperson. Over one with traditional methods, he used our unified system to scale his business quickly. His journey from a regular $10-5 job to a high-revenue entrepreneur highlights the practical benefits of our solution.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face"
    },
    {
      id: 2,
      title: "How we helped Stephanie quit her job & now makes $50K/month with AI",
      description: "From struggling freelancer to $50k/month: How Stephanie built a scalable AI agency targeting partners with systematic client acquisition.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=300&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
    
      {/* Hero Section */}
      <motion.section 
        className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInFromLeft}>
              <div className="text-sm text-gray-600 mb-2">WINNER</div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                How we helped Mauricio close{' '}
                <span className="text-[#39BF00]">£194,000</span> in 5 months without case studies
              </h1>
              
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Key Topics</h3>
                <div className="space-y-2">
                  <div className="text-gray-700">Client Acquisition</div>
                  <div className="text-gray-700">Business Strategy</div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Website</h4>
                  <a href="#" className="text-[#39BF00] hover:underline">vincemarketingpartner.com</a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="relative"
              variants={fadeInUp}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=400&fit=crop&crop=face"
                  alt="Mauricio - Success Story"
                  width={600}
                  height={400}
                  className="object-cover w-full h-[400px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 cursor-pointer hover:bg-white/30 transition-colors">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>

                {/* Revenue highlight */}
                <div className="absolute bottom-6 left-6 bg-white px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">£194,000</div>
                  <div className="text-sm text-gray-600">in 5 months without case studies</div>
                </div>

                <div className="absolute top-6 left-6">
                  <div className="text-2xl font-bold text-white bg-black/30 w-10 h-10 rounded-full flex items-center justify-center">A</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Disclaimer */}
      <motion.section 
        className="py-6 px-4 sm:px-6 lg:px-8 bg-gray-100"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-gray-600 leading-relaxed text-center">
            <strong>DISCLAIMER:</strong> In a survey of over 700 businesses with over 90 responding, business owners averaged £15,382 in 
            monthly revenue after implementing our system. All testimonials shown are real, but do not claim to represent 
            typical results. Any success depends on many variables, which are unique to each individual, including commitment 
            and effort. Testimonial results are meant to demonstrate what the most dedicated students have done and should 
            not be considered average. AI Acquisition makes no guarantee of any financial gain from the use of its products.
          </p>
        </div>
      </motion.section>

      {/* Problem Section */}
      <motion.section 
        className="py-16 px-4 sm:px-6 lg:px-8"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Problem</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#39BF00] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Lack of prior marketing and agency experience</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#39BF00] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">No established client base or case studies</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#39BF00] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Unfamiliarity with sales and marketing strategies</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#39BF00] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Difficulty in targeting a specific niche market</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Solution Section */}
      <motion.section 
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Solution</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#39BF00] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Identify a target niche in the renewable and logistics sectors</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#39BF00] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Develop a clear value proposition and offer</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#39BF00] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Implement targeted marketing and sales strategies within the chosen niche</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#39BF00] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Establish relationships and partnerships to build credibility in the market rather than being viewed as a service provider</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#39BF00] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Follow the structured blueprint to gain clarity on the exact steps needed to succeed</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Results Section */}
      <motion.section 
        className="py-16 px-4 sm:px-6 lg:px-8"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Results</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#39BF00] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Closed £194,000 in deals within five months</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#39BF00] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Secured multiple high-value contracts with reputable clients</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#39BF00] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Established a sustainable business model with consistent income</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#39BF00] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Developed a clear and scalable business strategy</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* More Case Studies Section */}
      <motion.section 
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">More case studies</h2>
            <button className="bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300">
              Browse all case studies
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {relatedCaseStudies.map((study) => (
              <motion.div
                key={study.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
                variants={fadeInUp}
              >
                <div className="relative h-48">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{study.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-4">{study.description}</p>
                  
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
 
    </div>
  );
};

export default CaseStudyDetailPage; 










  {/* CTA Section */}
      // <motion.section 
      //   className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white"
      //   variants={fadeInUp}
      //   initial="initial"
      //   whileInView="animate"
      //   viewport={{ once: true }}
      // >
      //   <div className="max-w-4xl mx-auto">
      //     <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
      //       <div className="flex-1">
      //         {/* <div className="text-2xl font-bold mb-2">A</div> */}
      //         <h2 className="text-3xl sm:text-4xl font-bold mb-6">
      //           Get Started With A Free Consultation
      //         </h2>
              
      //         <div className="mb-8">
      //           <h3 className="text-xl font-semibold mb-4 text-[#39BF00]">
      //             Access Our AI Business Playbook (Free)
      //           </h3>
      //           <p className="text-gray-300 mb-6 max-w-md">
      //             Get the exact playbook we used to build our own AI-powered agency. Inside, you'll discover the strategies, 
      //             tools, and workflows that helped us systemize growth.
      //           </p>
                
      //           <div className="flex flex-col sm:flex-row gap-4 max-w-md">
      //             <input
      //               type="email"
      //               placeholder="Enter your email"
      //               className="flex-1 px-4 py-3 rounded-full border-1 border-solid border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#39BF00]"
      //             />
      //             <button className="bg-[#39BF00] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#32a300] transition-colors duration-300">
      //               Get access
      //             </button>
      //           </div>
      //         </div>
      //       </div>
            
      //       <div className="lg:ml-8">
      //         <button className="bg-[#39BF00] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#32a300] transition-colors duration-300 flex items-center gap-2">
      //           Apply Now
      //           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      //           </svg>
      //         </button>
      //       </div>
      //     </div>
          
         
      //   </div>
      // </motion.section>