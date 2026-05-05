import { motion } from "motion/react";

const members = [
  {
    name: "Qiankai Zhao",
    role: "System Architect & Lead Engineer",
    desc: "Robot wiring, overall assembly, structural 3D design. Expert in mechanical logic and project coordination.",
    photo: "./figures/team/qiankaizhao.jpg",
    workPhoto: "./figures/team/zhao.jpg"
  },
  {
    name: "Jiahao Liu",
    role: "Software Engineer & UI Designer",
    desc: "Arduino core programming, hardware debugging, web application architecture. Bridges silicon and software.",
    photo: "./figures/team/jiahaoliu.png",
    workPhoto: "./figures/team/liu.jpg"
  },
  {
    name: "Yuzhi He",
    role: "Mechanical Designer & Frontend Dev",
    desc: "Precise 3D component modeling, hardware installation, user interface implementation.",
    photo: "./figures/team/yuzhihe.jpg",
    workPhoto: "./figures/team/he.jpg"
  },
  {
    name: "Taiming Hu",
    role: "Algorithm Specialist & Media Director",
    desc: "Software logic debugging, code optimization, technical promotional media production.",
    photo: "./figures/team/taiminghu.jpg",
    workPhoto: "./figures/team/hu.jpg"
  },
  {
    name: "Yu Han",
    role: "Hardware Integration & Design Lead",
    desc: "Robotic arm and gripper construction, storage structure design, technical presentation strategy.",
    photo: "./figures/team/yuhan.jpg",
    workPhoto: "./figures/team/han.jpg"
  },
  {
    name: "Shenbo Zhou",
    role: "Control Systems & Visual Designer",
    desc: "Robotic arm code optimization, hardware field installation, corporate visual communication.",
    photo: "./figures/team/shenbozhou.jpg",
    workPhoto: "./figures/team/zhou.jpg"
  }
];

// Eyebrow label style
const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[11px] font-bold tracking-[1.5px] text-apple-muted uppercase text-center mb-4">{children}</p>
);

// Section heading style
const Heading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-apple-text tracking-tight text-center">{children}</h2>
);

// Body text style
const Body = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[15px] text-apple-muted leading-relaxed text-center">{children}</p>
);

export function RobotTeam() {
  return (
    <section className="bg-white min-h-screen">
      {/* Hero with Team Photo */}
      <div className="relative h-[85vh] overflow-hidden">
        <img
          src="./figures/team/teamphotowithcar.jpg"
          alt="Byte to Bin Team"
          className="absolute inset-0 w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="relative h-full flex flex-col justify-end px-10 pb-20 items-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold tracking-[2px] text-white/60 uppercase mb-4"
          >
            Byte to Bin · First Generation
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none mb-6"
          >
            The Collective.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/70 max-w-xl font-light text-center"
          >
            Six minds, one machine. Hardware geeks and software experts united in pursuit of mechanical excellence.
          </motion.p>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="py-24 px-10 border-b border-apple-border">
        <div className="max-w-3xl mx-auto text-center">
          <Eyebrow>Corporate Mission</Eyebrow>
          <Heading>Redefining mechanical reach<br />through algorithms.</Heading>
          <div className="mt-8">
            <Body>We believe that excellence in mechanical execution should not just stop at hardware stacking — it must be driven through sophisticated algorithms, transforming digital logic into real-world physical power.</Body>
          </div>
        </div>
      </div>

      {/* Team Grid */}
      <div className="py-32 px-10 bg-apple-bg">
        <div className="max-w-4xl mx-auto text-center">
          <Eyebrow>The Team</Eyebrow>
          <Heading>Meet the Engineers</Heading>
          <p className="text-[13px] text-apple-muted uppercase tracking-wider mt-3">06 Members · First Generation</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-16">
            {members.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="group text-center"
              >
                <div className="aspect-[3/4] rounded-xl overflow-hidden mb-4 bg-white border border-apple-border group-hover:border-apple-text/30 transition-all duration-500">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-[15px] font-bold text-apple-text tracking-tight group-hover:text-apple-blue transition-colors">
                  {member.name}
                </h3>
                <p className="text-[11px] text-apple-muted uppercase tracking-wider mt-1">
                  {member.role.split(' & ')[0]}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Member Cards */}
      <div className="py-32 px-10 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <Eyebrow>Roles & Responsibilities</Eyebrow>
          <Heading>Meet the Team</Heading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {members.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ scale: 1.03, zIndex: 10 }}
                className="group cursor-pointer"
              >
                <div className="relative bg-apple-bg rounded-2xl overflow-hidden border border-apple-border transition-all duration-500 group-hover:border-apple-text/50 group-hover:shadow-xl">
                  {/* Work photo - shows on hover */}
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={member.workPhoto}
                      alt={member.name}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  {/* Info overlay at bottom */}
                  <div className="p-6 text-left">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg overflow-hidden border border-apple-border flex-shrink-0">
                        <img
                          src={member.photo}
                          alt={member.name}
                          className="w-full h-full object-cover object-top"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <h3 className="text-[15px] font-bold text-apple-text tracking-tight">
                          {member.name}
                        </h3>
                        <p className="text-[11px] text-apple-muted uppercase tracking-wider">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="py-24 px-10 bg-white border-t border-apple-border">
        <div className="max-w-4xl mx-auto text-center">
          <Eyebrow>Behind the Build</Eyebrow>
          <Heading>See It in Action</Heading>
          <div className="mt-12 aspect-video rounded-2xl overflow-hidden bg-black">
            <video
              className="w-full h-full object-cover"
              controls
              preload="metadata"
              referrerPolicy="no-referrer"
            >
              <source src="./figures/team/v.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      {/* Contact Panel */}
      <div className="py-24 px-10 bg-apple-bg border-t border-apple-border">
        <div className="max-w-5xl mx-auto text-center">
          <Eyebrow>Establishment</Eyebrow>
          <Heading>Byte to Bin<br />Technology Co., Ltd.</Heading>
          <p className="text-[15px] text-apple-muted leading-relaxed mt-6 max-w-xl mx-auto">
            A pioneering force in perceptual intelligence systems, bridging the gap between theoretical algorithms and physical automation.
          </p>

          {/* Map */}
          <div className="mt-12 rounded-2xl overflow-hidden border border-apple-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35780.784232065955!2d-3.3968636513671973!3d55.90951550000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887c46af06eff31%3A0xea463bd59d93b226!2z6LWr55Ge55Om54m55aSn5a2m!5e0!3m2!1szh-CN!2sus!4v1777975684134!5m2!1szh-CN!2sus"
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-apple-border">
              <h4 className="text-[11px] font-bold uppercase tracking-[2px] text-apple-muted mb-3">Inquiries</h4>
              <a href="mailto:solutions@bytetobin.com" className="text-[15px] font-semibold text-apple-text hover:text-apple-blue transition-colors">
                solutions@bytetobin.com
              </a>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-apple-border">
              <h4 className="text-[11px] font-bold uppercase tracking-[2px] text-apple-muted mb-3">Location</h4>
              <p className="text-[15px] text-apple-text leading-relaxed">
                Heriot-Watt University<br />
                Edinburgh, Scotland
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
