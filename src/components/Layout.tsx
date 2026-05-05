import { motion } from "motion/react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-10 py-5 bg-white/80 backdrop-blur-xl border-b border-apple-border transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-bold tracking-tight text-apple-text text-lg">ROBO.CORE</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {["Overview", "Technology", "Specs", "Support"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className={`text-[13px] font-medium transition-colors ${item === 'Overview' ? 'text-apple-text' : 'text-apple-muted hover:text-apple-text'}`}
            >
              {item}
            </a>
          ))}
        </div>

        <button className="bg-apple-text px-5 py-2 text-[12px] font-semibold text-white rounded-full hover:bg-apple-muted transition-all">
          Order Now
        </button>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-white border-t border-apple-border pt-24 pb-12 px-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Mission */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="https://static.step1.dev/01e940865853981d53afa6ed3a99b246"
                alt="Byte to Bin"
                className="w-10 h-10 object-contain ring-1 ring-apple-border rounded-full p-0.5"
                referrerPolicy="no-referrer"
              />
              <span className="text-[14px] font-bold text-apple-text uppercase tracking-tight">Byte to Bin</span>
            </div>
            <p className="text-[18px] md:text-[22px] font-medium text-apple-text tracking-tight max-w-sm mb-6 leading-tight">
              Redefining mechanical reach <br /> through algorithms.
            </p>
            <p className="text-[13px] text-apple-muted max-w-md leading-relaxed">
              We are pioneers in perceptual intelligence and automated sorting, driving mechanical execution through sophisticated algorithms to transform digital logic into real-world solutions.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-bold text-apple-text uppercase tracking-[2px] mb-6">Headquarters</h4>
            <p className="text-[13px] text-apple-muted leading-relaxed font-medium">
              Byte to Bin Technology Co., Ltd.<br />
              Edinburgh Research Park<br />
              Suite 12B, Pentland Building<br />
              EH14 4AP, United Kingdom
            </p>
          </div>

          {/* Direct */}
          <div>
            <h4 className="text-[11px] font-bold text-apple-text uppercase tracking-[2px] mb-6">Connect</h4>
            <div className="space-y-4">
              <div className="group">
                <p className="text-[10px] text-apple-tertiary uppercase font-bold mb-1">Email inquiries</p>
                <a href="mailto:solutions@bytetobin.com" className="text-[13px] text-apple-muted hover:text-apple-blue transition-colors">
                  solutions@bytetobin.com
                </a>
              </div>
              <div className="group">
                <p className="text-[10px] text-apple-tertiary uppercase font-bold mb-1">Direct Line</p>
                <p className="text-[13px] text-apple-muted">+44 (0) 131 496 0888</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-apple-border gap-6">
          <p className="text-[11px] text-apple-tertiary font-medium">
            &copy; 2026 RoboSort-M1 · Byte to Bin Technology Co., Ltd. All rights reserved.
          </p>
          <div className="flex gap-8">
            <span className="text-[11px] text-apple-tertiary font-medium cursor-default hover:text-apple-text transition-colors">Privacy Policy</span>
            <span className="text-[11px] text-apple-tertiary font-medium cursor-default hover:text-apple-text transition-colors">Terms of Sale</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
