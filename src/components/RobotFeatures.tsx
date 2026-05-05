import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";

/**
 * RobotFeatures - Clean Minimalism style feature section.
 * Grid with 1px borders and refined typography.
 */
const features = [
  {
    num: '01',
    title: 'Line Following',
    desc: 'An 8-channel infrared sensor array detects the guide line in real time, enabling the car to follow preset paths accurately through curves and intersections.',
    link: '/design',
    hash: 'drive',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 12c0-4 3-7 9-7s9 3 9 7M3 12c0 4 3 7 9 7s9-3 9-7" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Obstacle Avoidance',
    desc: 'A front-mounted ultrasonic module continuously scans for obstacles. When detected, the car halts and autonomously navigates around the obstruction to continue its mission.',
    link: '/design',
    hash: 'perception',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Color Recognition',
    desc: 'Equipped with an industrial color sensor, the system locks onto target zones in real time, providing key decision data for automated sorting.',
    link: '/design',
    hash: 'vision',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Robotic Arm Sorting',
    desc: 'A 4-DOF servo arm achieves millimeter-level pick-and-place precision, executing a full autonomous closed-loop operation cycle.',
    link: '/design',
    hash: 'arm',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Bluetooth Remote',
    desc: 'Real-time bidirectional communication via Bluetooth. Monitor sensor data and send motion commands directly from your computer for manual override or debugging.',
    link: '/design',
    hash: 'control',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Multi-Task Sorting',
    desc: 'On-board storage accommodates up to 9+ objects simultaneously. Real-time color recognition and intelligent path planning enable precise batch sorting across multiple categories.',
    link: '/design',
    hash: 'sorting',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.137a48.354 48.354 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.801 0A2.251 2.251 0 0113.5 2.25H5c-.325 0-.502.28-.502.5v5.75c0 .325.28.5.502.5h8.5a2.25 2.25 0 002.25-2.25v-5.75a2.25 2.25 0 00-2.25-2.25H5.25z" />
      </svg>
    ),
  },
];

export function RobotFeatures() {
  return (
    <section id="overview" className="bg-apple-bg py-32 px-10">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-[11px] font-bold tracking-[1.5px] text-apple-muted uppercase mb-4">First Generation</p>
          <h2 className="text-4xl md:text-[42px] font-bold text-apple-text tracking-tight">Technical Core Capabilities</h2>
        </motion.div>

        {/* Feature grid with 1px border gap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-apple-border border border-apple-border">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="bg-white p-10 flex flex-col h-full group"
            >
              <div className="text-apple-muted mb-8 group-hover:text-apple-text transition-colors duration-300">
                {f.icon}
              </div>
              <div className="text-[12px] text-apple-tertiary font-mono mb-3">{f.num}</div>
              <h3 className="text-apple-text font-bold text-[17px] mb-3 leading-tight">
                {f.title}
              </h3>
              <p className="text-apple-muted text-sm leading-[1.5] mb-8 flex-grow">
                {f.desc}
              </p>
              <Link 
                to={f.link}
                hash={f.hash}
                className="mt-auto text-apple-blue font-semibold text-[13px] hover:underline flex items-center gap-1"
              >
                Learn more <span>&rarr;</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
