import { motion } from "motion/react";

const specCategories = [
  {
    title: 'Mechanical Manipulator System',
    specs: [
      { name: 'Degrees of Freedom', value: '4-DOF Arm + Terminal Gripper' },
      { name: 'Total Dimensions', value: 'Approx. 187 × 146 × 430 mm' },
      { name: 'Total Weight', value: 'Approx. 742 g' },
      { name: 'Primary Material', value: 'Aluminium Alloy / Metal' },
      { name: 'Gripper Range', value: '0–55 mm' },
      { name: 'Payload Capacity', value: '≤ 300 g' },
      { name: 'Design Focus', value: 'High precision transport' },
    ]
  },
  {
    title: 'Servo Actuation System',
    specs: [
      { name: 'Working Voltage', value: '5–8.4 V' },
      { name: 'Control Protocol', value: 'PWM (Pulse Width Modulation)' },
      { name: 'Control Cycle', value: '20 ms' },
      { name: 'Maximum Rotation', value: '0–270°' },
      { name: 'Output Torque', value: 'Approx. 15 kg·cm' },
      { name: 'Control Precision', value: 'Approx. 0.3°' },
      { name: 'Feedback Method', value: 'Closed-loop position sensing' },
    ]
  },
  {
    title: 'Chassis Drive System',
    specs: [
      { name: 'Drive Configuration', value: 'Twin-Drive + Caster Support' },
      { name: 'Chassis Width', value: '< 15 cm' },
      { name: 'Rated Voltage', value: '12 V' },
      { name: 'Rated Current', value: '0.36 A (Stall: 3.2 A)' },
      { name: 'Reduction Ratio', value: '1:28' },
      { name: 'No-load Speed', value: '370 ± 12 rpm' },
      { name: 'Rated Torque', value: '1 kgf·cm (Stall: 4.5 kgf·cm)' },
    ]
  },
  {
    title: 'System Logic & Power',
    specs: [
      { name: 'Control Platform', value: 'Arduino ecosystem' },
      { name: 'Debug Interface', value: 'UART Serial / Programmatic' },
      { name: 'Power Supply', value: 'Independent High-Capacity Li-Po' },
      { name: 'Operational Flow', value: 'Grasp · Transport · Place' },
      { name: 'Sync Level', value: 'Fully Integrated Firmware' },
      { name: 'Task Management', value: 'Millisecond-level scheduling' },
      { name: 'Expansion', value: 'VCC/GND/Signal pin-outs' },
    ]
  }
];

export function RobotSpecs() {
  return (
    <section id="specs" className="bg-white py-32 px-10">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 text-center"
        >
          <p className="text-[11px] font-bold tracking-[1.5px] text-apple-muted uppercase mb-4">First Generation Technical Core</p>
          <h2 className="text-5xl md:text-6xl font-bold text-apple-text tracking-tight">System Specifications</h2>
        </motion.div>

        {/* Specs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-16 mb-32">
          {specCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
            >
              <h3 className="text-[11px] font-bold text-apple-text uppercase tracking-[1.5px] mb-6 pb-2 border-b border-apple-border">
                {cat.title}
              </h3>
              <div className="divide-y divide-apple-border">
                {cat.specs.map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-4 group">
                    <span className="text-[13px] text-apple-muted font-medium transition-colors group-hover:text-apple-text whitespace-nowrap mr-4">
                      {item.name}
                    </span>
                    <span className="text-[13px] font-semibold text-apple-text text-right">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
