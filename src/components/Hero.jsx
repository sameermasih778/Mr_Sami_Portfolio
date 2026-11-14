import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowRight, Sparkles, Terminal, Cpu, ExternalLink } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Ambient Corporate Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Intro & Headline */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Chip */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-blue-500/30 text-blue-300 text-xs font-mono shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>AI / Computer Vision & Full-Stack Engineer</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Hello, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-300">
                {personalInfo.name}
              </span>
              .
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              Engineering <span className="text-blue-400 font-semibold">real-world Computer Vision models</span>, automated video analytics pipelines, and <span className="text-indigo-400 font-semibold">modern full-stack web platforms</span> with React, Node.js & FastAPI.
            </p>

            <p className="text-sm text-slate-400 max-w-xl leading-relaxed">
              Currently an <strong className="text-white">AI & Machine Learning Engineer Intern at Hubcom.co</strong>. Turning deep learning research into resilient, high-speed production systems.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-200 hover:text-white hover:border-blue-500/50 hover:bg-slate-800 transition-all"
              >
                <span>Hire / Contact Sami</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-slate-400 hover:text-blue-400 hover:bg-slate-900 transition-colors"
                title="View LinkedIn Profile"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
            </div>

            {/* Quick Skills Badges */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
              <span className="text-xs uppercase font-mono tracking-wider text-slate-400 mr-2">Core Stack:</span>
              {['YOLO & YOLOE', 'OpenCV', 'PyTorch', 'React.js', 'FastAPI', 'Ollama & LLMs', 'Tailwind CSS'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-900/80 border border-slate-800 text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>

          {/* Right Column: Interactive Terminal & Live CV Simulator */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl glass-panel p-1 glow-cobalt border border-slate-700/80 shadow-2xl">
              
              {/* Terminal Window Chrome */}
              <div className="bg-[#0b1324] rounded-t-xl px-4 py-3 flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-blue-400" />
                  <span>sami@hubcom-ai-analytics:~</span>
                </div>
                <div className="w-4" />
              </div>

              {/* Terminal Body */}
              <div className="p-5 font-mono text-xs sm:text-sm space-y-3 bg-[#070d1a]/95 rounded-b-xl overflow-x-auto text-slate-300">
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="text-emerald-400 font-bold">➜</span>
                  <span className="text-blue-400">~/projects/vision-analytics</span>
                  <span className="text-white">$ python -m pipeline.run</span>
                </div>

                <div className="space-y-1.5 text-slate-400 pt-1 border-t border-slate-800">
                  <div className="flex items-center justify-between">
                    <span className="text-blue-400">[INIT]</span>
                    <span className="text-slate-300">Loading YOLOv8 + OpenCV Pipeline</span>
                    <span className="text-emerald-400 font-semibold">[READY]</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-indigo-400">[EMBED]</span>
                    <span className="text-slate-300">CLIP Multimodal Vectorizer</span>
                    <span className="text-emerald-400 font-semibold">[512-dim]</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sky-400">[MODEL]</span>
                    <span className="text-slate-300">Qwen3-VL through Ollama</span>
                    <span className="text-emerald-400 font-semibold">[ACTIVE]</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-300">[SERVER]</span>
                    <span className="text-slate-300">FastAPI WebSocket Endpoint</span>
                    <span className="text-emerald-400 font-semibold">ws://0.0.0.0:8000</span>
                  </div>
                </div>

                <div className="p-3 bg-slate-900/90 rounded-lg border border-blue-500/20 text-xs space-y-1 mt-3">
                  <div className="text-blue-300 font-semibold flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-blue-400" />
                    Real-time Inference Snapshot:
                  </div>
                  <p className="text-white">
                    Event Detected: <span className="text-blue-400 font-medium">Activity Tracking & Hazard Alert</span>
                  </p>
                  <p className="text-slate-400">
                    Confidence: <span className="text-blue-300 font-bold">98.4%</span> • Latency: <span className="text-indigo-300">12.6ms</span> • Stream: <span className="text-emerald-400 font-semibold">Live 60fps</span>
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Vision Pipeline Operational
                  </span>
                  <span className="text-slate-400 font-mono">Islamabad, PK</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {personalInfo.stats.map((stat, i) => (
            <div
              key={i}
              className="p-4 rounded-xl glass-panel border border-slate-800 hover:border-blue-500/40 transition-all text-center group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-200 group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-mono mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
