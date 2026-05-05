import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const steps = [
  {
    num: '01',
    title: 'Depart from Start',
    desc: 'The robot positions itself at the start zone. After system startup, the sensors perform a self-check, and the drive program is autonomously activated by the control core.',
    img: './figures/overview/phase1-line-follow.png',
  },
  {
    num: '02',
    title: 'Follow the Line',
    desc: 'The car travels smoothly and autonomously along the guide line on the ground. The infrared sensor array corrects deviations in real time while maintaining obstacle detection.',
    img: './figures/overview/phase6-reset.png',
  },
  {
    num: '03',
    title: 'Reach Identification Zone',
    desc: 'The car stops precisely in front of the target object. The color sensor communicates with the control core to quickly lock onto the object\'s category attributes.',
    img: './figures/overview/phase3-classify.png',
  },
  {
    num: '04',
    title: 'Robotic Arm Grasp',
    desc: 'The controller calculates joint movements and drives the 5-DOF servo arm to execute millimeter-level precise positioning and smooth grasping of the object.',
    img: './figures/overview/phase2-grab.png',
  },
  {
    num: '05',
    title: 'Automated Sorting',
    desc: 'Based on the color identification results, the robotic arm precisely transports the object to one of the three preset sorting bins, completing the sorting action.',
    img: './figures/overview/phase4-stack.png',
  },
  {
    num: '06',
    title: 'Mission Complete',
    desc: 'After all sorting is finished, the robot autonomously returns to the starting point along the line-following path, completing a full smart logistics closed-loop cycle.',
    img: './figures/overview/phase5-sort-return.png',
  },
];

export function RobotWorkflow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="workflow" className="bg-apple-bg py-32 px-10">
      <div className="max-w-6xl mx-auto" ref={containerRef}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <p className="text-[11px] font-bold tracking-[3px] text-apple-muted uppercase mb-4">Operational Logic</p>
          <h2 className="text-4xl md:text-[42px] font-bold text-apple-text tracking-tight mb-6">Autonomous Operation Workflow</h2>
          <p className="text-[15px] text-apple-muted max-w-xl mx-auto leading-relaxed">
            From self-check startup to task return, six key steps are decided by algorithms, achieving truly unmanned operation.
          </p>
        </motion.div>

        {/* Steps as slender cards with vertical timeline */}
        <div className="relative pl-4 lg:pl-12">
          {/* Background line */}
          <div className="absolute lg:left-6 left-4 top-0 bottom-0 w-px bg-apple-border" />

          {/* Animated progress line */}
          <motion.div
            className="absolute lg:left-6 left-4 top-0 w-px bg-apple-text origin-top"
            style={{ scaleY: lineScaleY, height: '100%' }}
          />

          <div className="space-y-5">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0.5, y: 20, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ scale: 1.01, shadow: '0 10px 40px -10px rgba(0, 0, 0, 0.12)' }}
                className="relative flex items-center gap-6 lg:gap-12 bg-white/80 backdrop-blur-sm rounded-2xl px-8 lg:px-10 py-6 shadow-sm hover:shadow-lg transition-shadow duration-500 border border-apple-border/20"
              >
                {/* Active indicator dot on the line */}
                <motion.div
                  className="absolute -left-[13px] lg:-left-[17px] w-3.5 h-3.5 rounded-full bg-apple-text shadow-md"
                  initial={{ scale: 0.8, opacity: 0.5 }}
                  whileInView={{ scale: 1.3, opacity: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                />

                {/* Circle number */}
                <div className="relative z-10 flex-shrink-0 w-11 h-11 lg:w-13 lg:h-13 ml-2 lg:ml-4 bg-apple-text border-2 border-apple-text rounded-full flex items-center justify-center group-hover:bg-apple-blue group-hover:border-apple-blue transition-all duration-500 shadow-lg">
                  <span className="text-[12px] lg:text-[13px] font-bold text-white tracking-wide">
                    {step.num}
                  </span>
                </div>

                {/* Text Content */}
                <div className="flex-grow min-w-0 flex flex-col justify-center text-left ml-4 lg:ml-8">
                  <h3 className="text-[16px] lg:text-[18px] font-bold text-apple-text mb-2 tracking-tight group-hover:text-apple-blue transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-[13px] lg:text-[14px] text-apple-muted leading-[1.6]">
                    {step.desc}
                  </p>
                </div>

                {/* Spacer */}
                <div className="hidden lg:block w-[3%]" />

                {/* Step Image */}
                <div className="flex-shrink-0 hidden md:block">
                  <div className="w-[140px] h-[75px] lg:w-[180px] lg:h-[95px] rounded-2xl overflow-hidden border border-apple-border/40 group-hover:border-apple-text/50 transition-all duration-500 shadow-sm">
                    <img
                      src={step.img}
                      alt={step.title}
                      className="w-full h-full object-cover object-center"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}