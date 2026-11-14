import React from 'react';
import { skillCategories } from '../data/portfolioData';
import { Cpu, Brain, Layout, Server } from 'lucide-react';

export default function Skills() {
  const iconMap = {
    Brain: Brain,
    Layout: Layout,
    Server: Server,
    Cpu: Cpu,
  };

  const categoryAccents = [
    'from-blue-600 to-indigo-600',
    'from-indigo-600 to-sky-600',
    'from-sky-600 to-blue-700',
    'from-blue-700 to-slate-800',
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 relative border-t border-slate-800/80 bg-[#0a0f1d]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16 space-y-2.5 sm:space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-[11px] sm:text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL EXPERTISE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Skills & Technology Stack
          </h2>
          <p className="text-slate-400 max-w-2xl text-xs sm:text-base px-2">
            A comprehensive overview of tools, frameworks, and architectures across AI and Full-Stack Engineering.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories.map((cat, idx) => {
            const Icon = iconMap[cat.icon] || Cpu;
            const accent = categoryAccents[idx % categoryAccents.length];
            return (
              <div
                key={idx}
                className="glass-panel p-5 sm:p-8 rounded-xl sm:rounded-2xl border border-slate-800 hover:border-blue-500/40 transition-all shadow-xl space-y-4 sm:space-y-6"
              >
                {/* Header */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr ${accent} flex items-center justify-center text-white shadow-lg shadow-blue-500/20 shrink-0`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white">{cat.title}</h3>
                    <p className="text-[11px] sm:text-xs text-blue-400 font-mono">Specialized Competencies</p>
                  </div>
                </div>

                {/* Skills Chips */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 pt-1 sm:pt-2">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/30 transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:scale-125 transition-transform" />
                        <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-blue-300 border border-slate-700/80">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Dual Stack Callout */}
        <div className="mt-8 sm:mt-12 p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-blue-950/40 border border-blue-500/25 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-white font-bold text-sm sm:text-lg">
              Full-Cycle AI Product Development
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
              From dataset preparation and model inference in PyTorch/YOLO/OpenCV to high-speed backend serving in FastAPI and interactive frontends in React & Tailwind CSS.
            </p>
          </div>
          <a
            href="#projects"
            className="w-full sm:w-auto text-center px-5 py-2.5 rounded-xl bg-blue-600/15 text-blue-300 border border-blue-500/30 hover:bg-blue-600/25 text-xs sm:text-sm font-mono whitespace-nowrap transition-colors"
          >
            See in Action →
          </a>
        </div>

      </div>
    </section>
  );
}
