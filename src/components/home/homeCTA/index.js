import React from "react";
import { motion } from "framer-motion";

const TrophyCTA = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br  relative overflow-hidden rounded-2xl">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                🏆 Secure Solutions
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Ready to Build
                <span className="bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
                  {" "}
                  Big?
                </span>
              </h2>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                Join the champions who chose excellence. Let's create something
                extraordinary together and claim your victory in the digital
                world.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:from-amber-600 hover:to-yellow-600"
                >
                  Conatct Us Now
                </motion.button>
              </div>

              <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Free Consultation
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  24/7 Support
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  100% Satisfaction
                </div>
              </div>
            </motion.div>

            {/* Trophy Image Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Glowing background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full blur-2xl opacity-30 scale-110 animate-pulse"></div>

                {/* Trophy container with floating animation */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-10"
                >
                  <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-full shadow-2xl">
                    <img
                      src="/assets/images/home/security-icon.svg"
                      alt="Champion Trophy"
                      className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain filter drop-shadow-lg"
                    />
                  </div>
                </motion.div>

                {/* Floating particles */}
                <div
                  className="absolute top-10 left-10 w-3 h-3 bg-yellow-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                  className="absolute top-20 right-10 w-2 h-2 bg-amber-400 rounded-full animate-bounce"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute bottom-20 left-5 w-4 h-4 bg-orange-400 rounded-full animate-bounce"
                  style={{ animationDelay: "1.5s" }}
                ></div>

                {/* Success metrics floating badges */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="absolute -top-5 -left-5 bg-white rounded-xl shadow-lg p-3 border border-amber-200"
                >
                  <div className="text-2xl font-bold text-amber-600">75+</div>
                  <div className="text-xs text-gray-600">Projects Done</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute -bottom-5 -right-5 bg-white rounded-xl shadow-lg p-3 border border-amber-200"
                >
                  <div className="text-2xl font-bold text-amber-600">6+</div>
                  <div className="text-xs text-gray-600">Years Experience</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          className="w-full h-auto fill-current text-amber-100 opacity-50"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default TrophyCTA;
