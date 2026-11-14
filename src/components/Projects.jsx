import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { FolderGit2, ExternalLink, Sparkles, Cpu, CheckCircle2 } from 'lucide-react';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Computer Vision & Full Stack', 'AI & Computer Vision', 'Deep Learning', 'RAG & LLMs'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section id="projects" className="py-16 sm:py-20 relative border-t border-slate-800/80 bg-[#080d1a]">
      {/* Background glow orb */}
      <div className="absolute top-1/3 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12 space-y-2.5 sm:space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-[11px] sm:text-xs font-mono">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Featured Projects & Engineering Work
          </h2>
          <p className="text-slate-400 max-w-2xl text-xs sm:text-base px-2">
            Real-world computer vision systems, multimodal vector search engines, and full-stack AI web platforms.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 pt-4 sm:pt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25 scale-105'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-xl sm:rounded-2xl border border-slate-800 hover:border-blue-500/40 transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between group"
            >
              
              {/* Card Header & Content */}
              <div className="p-5 sm:p-8 space-y-3 sm:space-y-4">
                
                {/* Meta Row */}
                <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-2">
                  <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-mono font-medium bg-blue-500/15 text-blue-300 border border-blue-500/25 w-fit">
                    {project.category}
                  </span>
                  
                  {project.metrics && (
                    <span className="text-[11px] sm:text-xs font-mono text-slate-300 flex items-center gap-1.5 bg-slate-900/90 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md border border-slate-800 w-fit">
                      <Cpu className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-400" />
                      {project.metrics}
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-lg sm:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs font-mono text-blue-400 mt-0.5">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Key Bullet Highlights */}
                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                    Technical Implementation:
                  </span>
                  {project.highlights.map((point, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Card Footer: Tech Tags & Links */}
              <div className="px-5 py-3.5 sm:px-8 sm:py-4 bg-slate-900/60 border-t border-slate-800 space-y-3 sm:space-y-4">
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-xs font-mono rounded bg-slate-800/80 text-slate-300 border border-slate-700/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center justify-between pt-1 sm:pt-2 text-xs">
                  <span className="text-slate-400 font-mono flex items-center gap-1 text-[11px] sm:text-xs">
                    <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                    Verified Project
                  </span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Discuss Architecture
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
