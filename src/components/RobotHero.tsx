import { motion } from "motion/react";

/**
 * RobotHero - minimalism product launch section.
 */
export function RobotHero() {
  return (
    <section className="relative w-full bg-white overflow-hidden pt-28">
      <div className="flex flex-col items-center justify-center min-h-[90vh] px-10 pb-20 text-center">
        {/* Eyebrow label */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[11px] font-bold tracking-[1.5px] text-apple-muted uppercase mb-4"
        >
          Byte to Bin · First Generation
        </motion.p>
 
        {/* Main headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-8xl font-bold text-apple-text mb-6 tracking-tighter leading-none"
        >
          RoboSort-M1
        </motion.h1>
 
        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-apple-muted max-w-xl mb-16 leading-relaxed font-light"
        >
          Autonomous. Precise. Intelligent. Redefining mechanical reach through algorithms with the first-generation robotic sorting platform.
        </motion.p>
 
        {/* Robot image — full product photograph */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative w-full max-w-3xl mx-auto"
        >
          <img
            src="/figures/1.png"
            alt="RoboSort-M1 — Byte to Bin Autonomous Sorting Robot"
            className="w-full object-contain drop-shadow-2xl"
            style={{ maxHeight: '560px' }}
            referrerPolicy="no-referrer"
          />
        </motion.div>
 
        {/* Stats strip */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 flex flex-wrap justify-center gap-12 md:gap-20"
        >
          {[
            { value: '4-DOF', label: 'Precision Arm' },
            { value: '6 Core', label: 'Modules' },
            { value: 'Fully Auto', label: 'Zero Intervention' },
            { value: 'Closed-Loop', label: 'Grasp · Sort · Return' },
          ].map((s, i) => (
            <div key={i} className="text-center group">
              <div className="text-2xl md:text-3xl font-bold text-apple-text tracking-tight group-hover:text-apple-blue transition-colors">
                {s.value}
              </div>
              <div className="text-[11px] text-apple-muted mt-2 tracking-widest uppercase font-semibold">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
 
      {/* Bottom divider */}
      <div className="w-full h-px bg-apple-border" />
    </section>
  );
}
