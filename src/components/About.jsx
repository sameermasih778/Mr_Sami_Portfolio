import React from 'react';
import { personalInfo, education } from '../data/portfolioData';
import { User, MapPin, Mail, Phone, GraduationCap, Award, Sparkles, Brain, Code, Rocket } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Brain,
      title: "Real-World Computer Vision",
      desc: "Specialized in YOLO/YOLOE tracking, activity recognition, video summarization, and gaze estimation pipelines."
    },
    {
      icon: Code,
      title: "Full-Stack Web Engineering",
      desc: "End-to-end development using React, Tailwind CSS, Node.js, Express, and FastAPI for real-time model interaction."
    },
    {
      icon: Rocket,
      title: "Semantic Search & RAG",
      desc: "Embedding extraction with CLIP/FAISS, multi-turn conversational agents with Ollama, and vector database retrieval."
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 relative border-t border-slate-800/80 bg-[#080d1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16 space-y-2.5 sm:space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-[11px] sm:text-xs font-mono">
            <User className="w-3.5 h-3.5" />
            <span>ABOUT MUHAMMAD SAMI</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Engineer by Passion, Problem Solver by Heart
          </h2>
          <p className="text-slate-400 max-w-2xl text-xs sm:text-base px-2">
            Bridging cutting-edge Artificial Intelligence with practical, high-throughput software systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
          
          {/* Left Column: Bio & Core Values */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <div className="glass-panel p-5 sm:p-8 rounded-xl sm:rounded-2xl space-y-3.5 sm:space-y-4 border border-slate-800 shadow-xl">
              <h3 className="text-lg sm:text-xl font-semibold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                Who I Am
              </h3>
              
              <p className="text-slate-300 leading-relaxed text-xs sm:text-base">
                I'm <strong className="text-white">Muhammad Sami</strong>, a Software Engineer dedicated to solving tangible, complex challenges through Computer Vision, Deep Learning, and full-stack web applications.
              </p>

              <p className="text-slate-300 leading-relaxed text-xs sm:text-base">
                Currently, I engineer computer vision and video analytics pipelines as an intern at <strong className="text-blue-400">Hubcom.co</strong> (a US-based company in Islamabad). My daily focus involves building real-time object tracking, complex activity recognition, and multimodal semantic search.
              </p>

              <p className="text-slate-300 leading-relaxed text-xs sm:text-base">
                I combine strong mathematical and machine learning foundations with hands-on full-stack engineering in React, Node.js, and FastAPI—allowing me to take an AI model from prototype directly to an interactive, user-facing product.
              </p>

              {/* Contact Snapshot Pills */}
              <div className="pt-3.5 sm:pt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-xs font-mono text-slate-300 border-t border-slate-800">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400 shrink-0" />
                  <span className="truncate">{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2 min-w-0">
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400 shrink-0" />
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-300 truncate">
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400 shrink-0" />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400 shrink-0" />
                  <span className="truncate">BS Software Engineering (2022-2026)</span>
                </div>
              </div>
            </div>

            {/* Core Capability Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {highlights.map((h, i) => {
                const Icon = h.icon;
                return (
                  <div key={i} className="p-3.5 sm:p-4 rounded-xl glass-panel border border-slate-800 space-y-1.5 sm:space-y-2">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <h4 className="text-xs sm:text-sm font-semibold text-white">{h.title}</h4>
                    <p className="text-[11px] sm:text-xs text-slate-400 leading-normal">{h.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Education & Academic Foundation */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            <div className="glass-panel p-5 sm:p-8 rounded-xl sm:rounded-2xl border border-slate-800 space-y-4 sm:space-y-6 shadow-xl">
              <div className="flex items-center justify-between">
                <h3 className="text-lg sm:text-xl font-semibold text-white flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400" />
                  Education
                </h3>
                <span className="text-[11px] sm:text-xs font-mono px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                  Degree
                </span>
              </div>

              {education.map((edu, idx) => (
                <div key={idx} className="space-y-2.5 sm:space-y-3 bg-slate-900/70 p-3.5 sm:p-4 rounded-xl border border-slate-800">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-2">
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-white">{edu.degree}</h4>
                      <p className="text-xs sm:text-sm text-blue-400 font-medium">{edu.institution}</p>
                    </div>
                    <span className="text-[10px] sm:text-xs font-mono text-slate-300 px-2 py-0.5 rounded bg-slate-800 border border-slate-700/60 w-fit">
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {edu.details}
                  </p>

                  <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800">
                    <span className="flex items-center gap-1.5 text-[11px] sm:text-xs">
                      <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-400 shrink-0" />
                      {edu.location}
                    </span>
                    <a
                      href={edu.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 hover:underline text-[11px] sm:text-xs"
                    >
                      Visit University
                    </a>
                  </div>
                </div>
              ))}

              <div className="p-3.5 sm:p-4 rounded-xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-blue-950/40 border border-blue-500/20 space-y-2">
                <div className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-blue-300 font-semibold flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
                  Language Proficiencies
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm text-white">
                  <span>English (Professional & Technical)</span>
                  <span className="font-mono text-[10px] sm:text-xs text-blue-300 bg-blue-500/15 px-2 py-0.5 rounded border border-blue-500/30">
                    C1 / C2 Advanced
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm text-white pt-1">
                  <span>Urdu (Native)</span>
                  <span className="font-mono text-[10px] sm:text-xs text-slate-300 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                    Native
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
