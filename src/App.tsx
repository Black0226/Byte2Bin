/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  createRootRoute, 
  createRoute, 
  createRouter, 
  RouterProvider, 
  Outlet 
} from '@tanstack/react-router';
import { RobotNav } from './components/RobotNav';
import { Footer } from './components/Layout';
import { RobotHero } from './components/RobotHero';
import { RobotFeatures } from './components/RobotFeatures';
import { RobotSpecs } from './components/RobotSpecs';
import { RobotWorkflow } from './components/RobotWorkflow';
import { RobotTeam } from './components/RobotTeam';
import { motion } from 'motion/react';

// --- Route Components ---

function Root() {
  return (
    <>
      <RobotNav />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

function Overview() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <RobotHero />
      <RobotFeatures />
      <RobotWorkflow />
    </motion.div>
  );
}

function Design() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-apple-bg min-h-screen pt-32"
    >
      {/* Header */}
      <section className="px-10 mb-20 max-w-6xl mx-auto text-center">
        <p className="text-[10px] font-semibold tracking-[3px] text-apple-blue uppercase mb-5">Architecture & Technical Core</p>
        <h1 className="text-6xl md:text-8xl font-bold text-apple-text tracking-tight mb-8 leading-none">
          Form Follows Function.
        </h1>
        <p className="text-lg md:text-xl text-apple-muted max-w-xl mx-auto leading-relaxed font-light">
          Design at Byte to Bin — mechanical logic of sorting and digital logic of recognition in absolute harmony.
        </p>
      </section>

      {/* Hero Integration */}
      <section className="px-10 mb-20 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 text-center">
            <img
              src="./figures/design/Assembly.png"
              alt="RoboSort-M1 Assembly"
              className="w-full h-auto object-contain drop-shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <p className="text-xs text-apple-muted mt-3 tracking-widest uppercase">Assembly</p>
          </div>
          <div className="w-full md:w-1/2 text-center">
            <img
              src="./figures/design/CAD.png"
              alt="RoboSort-M1 CAD"
              className="w-full h-auto object-contain"
              referrerPolicy="no-referrer"
            />
            <p className="text-xs text-apple-muted mt-3 tracking-widest uppercase">CAD Design</p>
          </div>
        </div>
      </section>

      {/* Design Card Component */}
      {[
        {
          id: 'drive',
          label: '01 / Drive System',
          title: 'High-Stability Chassis',
          desc: 'The MOD-01 chassis is optimized for low center of gravity and high torque distribution. Using 4-wheel DC gear motors, the system maintains precise trajectory adherence even during complex sorting maneuvers.',
          list: ['8-Channel IR Array Integration', 'High-Traction Rubber Tyres', 'Reinforced Acrylic Baseplate'],
          img1: './figures/design/8ch-line-sensor.png',
          img2: './figures/design/chassis-photo.jpg',
          imgLabel1: '8-Channel IR Array',
          imgLabel2: 'Chassis Module',
          img2Cover: true,
          reverse: false,
        },
        {
          id: 'perception',
          label: '02 / Obstacle Avoidance',
          title: 'Arena Awareness',
          desc: 'The HC-SR04 ultrasonic module scans the 180° frontal arc and feeds distance data into the FSM for real-time obstacle detection and path adjustment.',
          img1: './figures/design/ultrasonic-front.png',
          img2: './figures/design/ultrasonic-sensor.png',
          imgLabel1: 'Ultrasonic Detection',
          imgLabel2: 'HC-SR04 Module',
          img1Cover: true,
          reverse: true,
        },
        {
          id: 'vision',
          label: '03 / Color Recognition',
          title: 'Color Detection System',
          desc: 'The color sensor identifies target objects by detecting color attributes. Combined with the gripper, it enables precise pick-and-place operations for sorted items.',
          img1: './figures/design/color-sensor.png',
          img2: './figures/design/sensor-gripper.png',
          imgLabel1: 'Color Sensor',
          imgLabel2: 'Sensor Gripper',
          img2Cover: true,
          reverse: false,
        },
        {
          id: 'arm',
          label: '04 / Robotic Arm',
          title: '4-DOF Kinematic Core',
          desc: 'Our custom-engineered robotic arm utilizes inverse kinematic calculations to achieve sub-centimeter accuracy. The 4-DOF configuration provides the optimal balance between freedom of movement and servo torque efficiency.',
          armImg: './figures/design/robotic-arm.png',
          armDesignImg: './figures/design/robotic-arm-design.png',
          gripperImg: './figures/design/gripper.png',
          gripperDesignImg: './figures/design/gripper-design.png',
          reverse: null,
        },
        {
          id: 'control',
          label: '05 / Bluetooth Remote',
          title: 'Bidirectional Communication',
          desc: 'Real-time wireless control enables interactive debugging and manual override. Monitor telemetry data, sensor readings, and system status directly from your computer while sending precise motion commands.',
          list: ['Serial Port Profile (SPP)', 'Real-time Data Streaming', 'Interactive Command Interface'],
          img1: './figures/design/bluetooth-pc.png',
          imgLabel1: 'Bluetooth Module',
          algoImg: './figures/design/algorithm-flow-1.png',
          algoLabel: 'Algorithm Flowchart',
          reverse: false,
        },
        {
          id: 'sorting',
          label: '06 / Multi-Task Sorting',
          title: 'Batch Storage & Classification',
          desc: 'On-board 9-slot cargo deck accommodates up to 9+ objects simultaneously with integrated color detection and multi-category batching capability. Intelligent path planning coordinates sequential pick-and-place operations across multiple sorting bins with sub-centimeter precision.',
          img1: './figures/design/storage-slot.png',
          imgLabel1: 'Storage Slot',
          algoImg: './figures/design/algorithm-flow-2.png',
          algoLabel: 'Algorithm Flowchart',
          reverse: true,
        },
      ].map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="scroll-mt-32 px-10 mb-8 max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0.6, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.7 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ scale: 1.02, shadow: '0 20px 40px -10px rgba(0, 0, 0, 0.12)' }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 lg:p-16 shadow-sm hover:shadow-xl transition-shadow duration-500"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
            >
              {section.reverse === null ? (
                /* Center layout for gallery */
                <div className="text-center mb-8">
                  <p className="text-[10px] font-bold tracking-[3px] text-apple-blue uppercase mb-4">{section.label}</p>
                  <h2 className="text-2xl lg:text-3xl font-bold text-apple-text mb-4 tracking-tight">{section.title}</h2>
                  <p className="text-base text-apple-muted leading-relaxed max-w-lg mx-auto">{section.desc}</p>
                </div>
              ) : (
                <div className={`flex flex-col lg:flex-row items-center gap-12 ${section.reverse ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="w-full lg:w-2/5">
                    <p className="text-[10px] font-bold tracking-[3px] text-apple-blue uppercase mb-4">{section.label}</p>
                    <h2 className="text-2xl lg:text-3xl font-bold text-apple-text mb-4 tracking-tight whitespace-nowrap">{section.title}</h2>
                    <p className="text-base text-apple-muted leading-relaxed mb-6">{section.desc}</p>
                    {section.list && (
                      <ul className="space-y-2">
                        {section.list.map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-[12px] text-apple-text font-medium">
                            <div className="w-1.5 h-1.5 bg-apple-blue rounded-full flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    {section.colors && (
                      <div className="flex gap-3">
                        {section.colors.map((color) => (
                          <div key={color} className="w-9 h-9 rounded-full border border-apple-border flex items-center justify-center text-[11px] font-bold text-apple-text">
                            {color}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="w-full lg:w-3/5 grid grid-cols-2 gap-8 items-center">
                    <div className="text-center flex flex-col items-center">
                      <div className="w-full h-48 overflow-hidden rounded-xl bg-apple-bg flex items-center justify-center">
                        <img src={section.img1} alt={section.imgLabel1} className={section.img1Cover ? 'w-full h-full object-cover' : 'h-full w-auto object-contain'} referrerPolicy="no-referrer" />
                      </div>
                      <p className="text-xs text-apple-muted mt-2 tracking-wide uppercase">{section.imgLabel1}</p>
                    </div>
                    {section.algoImg ? (
                      <div className="text-center flex flex-col items-center">
                        <div className="w-full h-48 overflow-hidden rounded-xl bg-apple-bg flex items-center justify-center">
                          <img src={section.algoImg} alt={section.algoLabel} className="h-full w-auto object-contain" referrerPolicy="no-referrer" />
                        </div>
                        <p className="text-xs text-apple-muted mt-2 tracking-wide uppercase">{section.algoLabel}</p>
                      </div>
                    ) : section.img2 ? (
                      <div className="text-center flex flex-col items-center">
                        <div className="w-full h-48 overflow-hidden rounded-xl bg-apple-bg flex items-center justify-center">
                          <img src={section.img2} alt={section.imgLabel2} className={section.img2Cover ? 'w-full h-full object-cover' : 'h-full w-auto object-contain'} referrerPolicy="no-referrer" />
                        </div>
                        <p className="text-xs text-apple-muted mt-2 tracking-wide uppercase">{section.imgLabel2}</p>
                      </div>
                    ) : null}
                  </div>
                </div>
              )}
              {section.armImg && (
                <div className="mt-10 grid grid-cols-4 gap-6">
                  <div className="flex flex-col items-center">
                    <img src={section.armImg} alt="Robotic Arm" className="w-full aspect-square object-contain" referrerPolicy="no-referrer" />
                    <p className="mt-3 text-sm text-apple-muted font-medium tracking-wide uppercase">Robotic Arm</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src={section.armDesignImg} alt="Robotic Arm Design" className="w-full aspect-square object-contain" referrerPolicy="no-referrer" />
                    <p className="mt-3 text-sm text-apple-muted font-medium tracking-wide uppercase">Mechanical Design</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src={section.gripperImg} alt="Gripper" className="w-full aspect-square object-contain" referrerPolicy="no-referrer" />
                    <p className="mt-3 text-sm text-apple-muted font-medium tracking-wide uppercase">Gripper</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src={section.gripperDesignImg} alt="Gripper Design" className="w-full aspect-square object-contain" referrerPolicy="no-referrer" />
                    <p className="mt-3 text-sm text-apple-muted font-medium tracking-wide uppercase">Kinematic Design</p>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        </section>
      ))}
    </motion.div>
  );
}

function Specs() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <RobotSpecs />
    </motion.div>
  );
}

function Team() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <RobotTeam />
    </motion.div>
  );
}

// --- Route Definitions ---

const rootRoute = createRootRoute({
  component: Root,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Overview,
});

const designRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/design',
  component: Design,
});

const specsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/specs',
  component: Specs,
});

const teamRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/team',
  component: Team,
});

const routeTree = rootRoute.addChildren([indexRoute, designRoute, specsRoute, teamRoute]);

const router = createRouter({ routeTree, basepath: '/Byte2Bin' });

export default function App() {
  return <RouterProvider router={router} />;
}


