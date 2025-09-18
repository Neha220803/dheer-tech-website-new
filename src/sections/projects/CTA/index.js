"use client";

import React from "react";
import { motion } from "framer-motion";

const ProjectCTAComp = () => {
  return (
    <div className="bg-neutral-700">
      <section className="py-20 px-6 bg-gradient-to-br rounded-b-4xl bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-primary-400 to-primary-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-primary-300 to-primary-200 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 ">
            <div className="flex items-center justify-center">
              {/* Content Side - Centered */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-4xl"
              >
                <div className="inline-flex items-center bg-gradient-to-r from-primary-100 to-primary-50 text-primary-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  Business Solutions
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Are you worried about
                  <span className="block bg-gradient-to-r from-primary-500 to-primary-400 bg-clip-text text-transparent">
                    your business?
                  </span>
                </h2>

                <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
                  Transform your challenges into opportunities with our proven
                  expertise. Join successful businesses who chose excellence.
                </p>

                {/* Rating section */}
                <div className="flex items-center justify-center mb-10 space-x-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-6 h-6 text-yellow-400 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-gray-900">
                    <span className="text-2xl font-bold text-yellow-500">
                      4.9/5
                    </span>
                    <span className="text-gray-600 ml-2">
                      average from reviews on
                    </span>
                    <span className="font-semibold text-primary-600 ml-1">
                      Google
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:from-primary-600 hover:to-primary-700"
                  >
                    Get a Quote
                  </motion.button>
                </div>

                {/* Trust indicators */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    Free Consultation
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    24/7 Support
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1200 120"
            className="w-full h-auto fill-current text-primary-100 opacity-50"
          >
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
          </svg>
        </div>
      </section>
    </div>
  );
};

export default ProjectCTAComp;
