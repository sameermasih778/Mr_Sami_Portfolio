import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowRight, Sparkles, Terminal, Cpu, ExternalLink } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-grid-pattern">
      {/* Ambient Corporate Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-4 sm:right-10 w-64 sm:w-80 h-64 sm:h-80 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-4 sm:left-10 w-60 sm:w-72 h-60 sm:h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Intro & Headline */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            
            {/* Status Chip */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 rounded-full bg-slate-900/90 border border-blue-500/30 text-blue-300 text-[11px] sm:text-xs font-mono shadow-sm max-w-full">
              <Sparkles className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span className="truncate">AI / Computer Vision & Full-Stack Engineer</span>
            </div>

            {/* Main Headline & Name (Optimized for Mobile Screens) */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.2] sm:leading-[1.15]">
              Hello, I'm{' '}
              <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-300 mt-1 sm:mt-0">
                {personalInfo.name}
              </span>
              
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              Engineering <span className="text-blue-400 font-semibold">real-world Computer Vision models</span>, automated video analytics pipelines, and <span className="text-indigo-400 font-semibold">modern full-stack web platforms</span> with React, Node.js & FastAPI.
            </p>

            <p className="text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed">
              Currently an <strong className="text-white">AI & Machine Learning Engineer Intern at Hubcom.co</strong>. Turning deep learning research into resilient, high-speed production systems.
            </p>

            {/* Action Buttons (Full width on mobile, inline on desktop) */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all text-sm sm:text-base"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-200 hover:text-white hover:border-blue-500/50 hover:bg-slate-800 transition-all text-sm sm:text-base"
              >
                <span>Hire / Contact Sami</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-slate-400 hover:text-blue-400 hover:bg-slate-900 border border-slate-800/80 sm:border-transparent transition-colors text-sm font-medium"
                title="View LinkedIn Profile"
              >
                <ExternalLink className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Quick Skills Badges */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span className="text-[11px] sm:text-xs uppercase font-mono tracking-wider text-slate-400 mr-1 sm:mr-2">Core:</span>
              {['YOLO / YOLOE', 'OpenCV', 'PyTorch', 'React.js', 'FastAPI', 'Ollama & LLMs', 'Tailwind CSS'].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-[11px] sm:text-xs font-mono rounded-md bg-slate-900/80 border border-slate-800 text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>

          {/* Right Column: Interactive Terminal & Live CV Simulator */}
          <div className="lg:col-span-5 mt-4 lg:mt-0">
            <div className="relative rounded-2xl glass-panel p-1 glow-cobalt border border-slate-700/80 shadow-2xl">
              
              {/* Terminal Window Chrome */}
              <div className="bg-[#0b1324] rounded-t-xl px-3.5 py-2.5 sm:px-4 sm:py-3 flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-mono text-slate-400 truncate max-w-[200px] sm:max-w-none">
                  <Terminal className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span className="truncate">sami@hubcom-ai-analytics:~</span>
                </div>
                <div className="w-4" />
              </div>

              {/* Terminal Body */}
              <div className="p-3.5 sm:p-5 font-mono text-[11px] sm:text-xs space-y-2.5 sm:space-y-3 bg-[#070d1a]/95 rounded-b-xl text-slate-300">
                <div className="flex items-center gap-2 text-slate-300 flex-wrap">
                  <span className="text-emerald-400 font-bold">➜</span>
                  <span className="text-blue-400">~/projects/vision-analytics</span>
                  <span className="text-white">$ python -m pipeline.run</span>
                </div>

                <div className="space-y-1.5 text-slate-400 pt-1 border-t border-slate-800 text-[10px] sm:text-xs">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-blue-400 shrink-0">[INIT]</span>
                    <span className="text-slate-300 truncate">YOLOv8 + OpenCV Pipeline</span>
                    <span className="text-emerald-400 font-semibold shrink-0">[READY]</span>
                  </div>
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-indigo-400 shrink-0">[EMBED]</span>
                    <span className="text-slate-300 truncate">CLIP Multimodal Vectorizer</span>
                    <span className="text-emerald-400 font-semibold shrink-0">[512-dim]</span>
                  </div>
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-sky-400 shrink-0">[MODEL]</span>
                    <span className="text-slate-300 truncate">Qwen3-VL through Ollama</span>
                    <span className="text-emerald-400 font-semibold shrink-0">[ACTIVE]</span>
                  </div>
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-blue-300 shrink-0">[SERVER]</span>
                    <span className="text-slate-300 truncate">FastAPI WebSocket</span>
                    <span className="text-emerald-400 font-semibold shrink-0">ws://:8000</span>
                  </div>
                </div>

                <div className="p-2.5 sm:p-3 bg-slate-900/90 rounded-lg border border-blue-500/20 text-[10px] sm:text-xs space-y-1 mt-2">
                  <div className="text-blue-300 font-semibold flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    Real-time Inference:
                  </div>
                  <p className="text-white truncate">
                    Event: <span className="text-blue-400 font-medium">Activity Tracking & Hazard Alert</span>
                  </p>
                  <p className="text-slate-400">
                    Conf: <span className="text-blue-300 font-bold">98.4%</span> • Latency: <span className="text-indigo-300">12.6ms</span> • <span className="text-emerald-400 font-semibold">Live 60fps</span>
                  </p>
                </div>

                <div className="pt-1.5 flex items-center justify-between text-[10px] sm:text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Pipeline Operational
                  </span>
                  <span className="text-slate-400 font-mono">Islamabad, PK</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Stats Row (2 columns on mobile, 4 columns on desktop) */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
          {personalInfo.stats.map((stat, i) => (
            <div
              key={i}
              className="p-3 sm:p-4 rounded-xl glass-panel border border-slate-800 hover:border-blue-500/40 transition-all text-center group"
            >
              <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-200 group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-mono mt-1 truncate">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
