import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent, useTransform } from 'framer-motion';
import { experiences } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, Building2, ChevronRight } from 'lucide-react';

export default function Experience() {
  const timelineRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scroll position through the entire timeline section
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end 70%"]
  });

  // Smooth spring physics for responsive up & down line movement
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 30,
    restDelta: 0.001
  });

  // Track live scroll value to activate dots as the beam passes through them
  useMotionValueEvent(smoothProgress, "change", (latest) => {
    setScrollProgress(latest);
  });

  // Bottom endpoint glow opacity as the line finishes reaching the very bottom
  const endpointOpacity = useTransform(smoothProgress, [0.92, 1], [0.2, 1]);
  const endpointScale = useTransform(smoothProgress, [0.92, 1], [0.7, 1.2]);

  return (
    <section id="experience" className="py-16 sm:py-24 relative border-t border-slate-800/80 bg-[#0a0f1d] overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-20 space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-[11px] sm:text-xs font-mono shadow-sm">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER JOURNEY</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Work Experience & Engineering Roles
          </h2>
          <p className="text-slate-400 max-w-2xl text-xs sm:text-base px-2">
            From deploying real-world Computer Vision pipelines at Hubcom.co to infrastructure reliability at PEMRA.
          </p>
        </div>

        {/* Experience Timeline Container */}
        <div ref={timelineRef} className="relative max-w-4xl mx-auto pb-4">
          
          {/* Full-Height Static Background Track Line */}
          <div className="absolute left-4 sm:left-10 -translate-x-1/2 top-6 sm:top-8 bottom-2 w-[3px] bg-slate-800/90 rounded-full pointer-events-none" />

          {/* Dynamic Animated Scroll Line */}
          <motion.div
            style={{
              scaleY: smoothProgress,
              transformOrigin: 'top center',
            }}
            className="absolute left-4 sm:left-10 -translate-x-1/2 top-6 sm:top-8 bottom-2 w-[3px] bg-gradient-to-b from-blue-500 via-indigo-500 to-cyan-400 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.85)] z-10 pointer-events-none"
          />

          {/* Bottom Endpoint Node at the end of the line */}
          <div className="absolute left-4 sm:left-10 -translate-x-1/2 bottom-2 z-10 pointer-events-none">
            <motion.div
              style={{
                opacity: endpointOpacity,
                scale: endpointScale,
              }}
              className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]"
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-10 sm:space-y-16">
            {experiences.map((exp, idx) => {
              const threshold = idx === 0 ? 0.05 : 0.55;
              const isReached = scrollProgress >= threshold;

              return (
                <div key={idx} className="relative pl-10 sm:pl-24 group">
                  
                  {/* Timeline Dot Node (Mathematically centered with line on all screens) */}
                  <div className="absolute left-4 sm:left-10 -translate-x-1/2 top-5 sm:top-7 z-20 flex items-center justify-center">
                    {/* Outer Glow Ring */}
                    <div
                      className={`w-7 h-7 sm:w-10 sm:h-10 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                        isReached
                          ? 'bg-[#0f1b35] border-blue-400 shadow-[0_0_20px_rgba(37,99,235,0.7)] scale-110'
                          : 'bg-slate-900 border-slate-700/80 shadow-none scale-95'
                      }`}
                    >
                      {/* Active Pulse Ring */}
                      {isReached && exp.current && (
                        <span className="absolute inset-0 rounded-full border border-blue-400 animate-ping opacity-75" />
                      )}

                      {/* Inner Core Dot */}
                      <div
                        className={`w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full transition-all duration-500 ${
                          isReached
                            ? 'bg-gradient-to-tr from-blue-400 to-cyan-300 shadow-sm shadow-blue-200 scale-100'
                            : 'bg-slate-600 scale-75'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Experience Card */}
                  <div
                    className={`glass-panel p-4 sm:p-8 rounded-xl sm:rounded-2xl border transition-all duration-500 shadow-xl space-y-3 sm:space-y-4 ${
                      isReached
                        ? 'border-blue-500/35 bg-[#0f172a]/90 shadow-blue-500/5'
                        : 'border-slate-800 bg-[#0f172a]/70 group-hover:border-slate-700'
                    }`}
                  >
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3 sm:pb-4">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-base sm:text-xl font-bold text-white group-hover:text-blue-300 transition-colors leading-snug">
                            {exp.role}
                          </h3>
                          {exp.current && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 flex items-center gap-1.5 shrink-0">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              Current Role
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-300 mt-1 flex-wrap">
                          <span className="font-semibold text-blue-400 flex items-center gap-1.5">
                            <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                            {exp.company}
                          </span>
                          <span className="text-slate-400 font-mono text-[11px] sm:text-xs">• {exp.companyType}</span>
                        </div>
                      </div>

                      <div className="flex flex-row sm:flex-col sm:items-end justify-between sm:justify-start gap-1 text-[11px] sm:text-xs font-mono text-slate-400 pt-1 sm:pt-0">
                        <div className="flex items-center gap-1.5 bg-slate-900/90 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md border border-slate-800">
                          <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-400 shrink-0" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-400">
                          <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Bullet Highlights */}
                    <div className="space-y-2 pt-1">
                      {exp.highlights.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                          <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech stack badges */}
                    <div className="pt-3 sm:pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-1.5 sm:gap-2">
                      <span className="text-[10px] sm:text-xs font-mono text-slate-400 mr-1 uppercase">Tech:</span>
                      {exp.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 text-[10px] sm:text-xs font-mono rounded-md bg-slate-900/90 text-blue-300 border border-slate-700/80"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
