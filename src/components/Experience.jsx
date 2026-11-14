import React from 'react';
import { experiences } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, Building2, ChevronRight } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative border-t border-slate-800/80 bg-[#0a0f1d]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Work Experience & Engineering Roles
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            From deploying production Computer Vision pipelines at Hubcom.co to infrastructure reliability at PEMRA.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-8 top-3 bottom-3 w-0.5 bg-gradient-to-b from-blue-600 via-indigo-600 to-slate-800" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-12 sm:pl-20 group">
                
                {/* Timeline Icon Node */}
                <div
                  className={`absolute left-1.5 sm:left-5.5 top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                    exp.current
                      ? 'bg-blue-600 border-blue-300 shadow-lg shadow-blue-500/50 scale-110'
                      : 'bg-slate-900 border-slate-700 group-hover:border-blue-400'
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full ${exp.current ? 'bg-white animate-ping' : 'bg-slate-400'}`} />
                </div>

                {/* Experience Card */}
                <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 group-hover:border-blue-500/40 transition-all shadow-xl space-y-4">
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Current Role
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-3 text-sm text-slate-300 mt-1 flex-wrap">
                        <span className="font-semibold text-blue-400 flex items-center gap-1.5">
                          <Building2 className="w-4 h-4" />
                          {exp.company}
                        </span>
                        <span className="text-slate-400 font-mono text-xs">• {exp.companyType}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end gap-1 text-xs font-mono text-slate-400">
                      <div className="flex items-center gap-1.5 bg-slate-900/90 px-2.5 py-1 rounded-md border border-slate-800">
                        <Calendar className="w-3.5 h-3.5 text-blue-400" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bullet Highlights */}
                  <div className="space-y-2.5 pt-1">
                    {exp.highlights.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                        <ChevronRight className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack badges */}
                  <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-slate-400 mr-1 uppercase">Tech:</span>
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-900/90 text-blue-300 border border-slate-700/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
