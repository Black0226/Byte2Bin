import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-apple-bg pt-20">
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-[11px] font-semibold tracking-[1.5px] uppercase text-apple-muted mb-6">
            Next Generation Platform
          </p>
          <h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tight text-apple-text">
            RoboFlow <span className="text-apple-tertiary">X1</span>
          </h1>
          <p className="text-lg md:text-xl text-apple-muted max-w-2xl mx-auto mb-12 leading-relaxed">
            An intelligent modular robotic platform designed for complex sorting, 
            autonomous navigation, and precision manipulation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-3 bg-apple-text text-white font-semibold rounded-full text-sm hover:bg-apple-muted transition-colors">
              Explore Specifications
            </button>
            <button className="px-8 py-3 bg-transparent border border-apple-border text-apple-text font-semibold rounded-full text-sm hover:bg-apple-border transition-all">
              Watch Process
            </button>
          </div>
        </motion.div>
      </div>

      {/* Subtle Hardware Spec Display */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-0 w-full px-10"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-apple-border">
          {[
            { label: "DOF", val: "5-Axis" },
            { label: "Payload", val: "1.2kg" },
            { label: "Sensors", val: "8-CH IR" },
            { label: "Recognition", val: "AI-Vision" }
          ].map((spec, i) => (
            <div key={i}>
              <p className="text-[11px] text-apple-muted uppercase tracking-[1.5px] mb-1">{spec.label}</p>
              <p className="text-xl font-semibold tracking-tight text-apple-text">{spec.val}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
