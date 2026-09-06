import React, { useState } from 'react';
import DitherPortraitCanvas from '../canvas/DitherPortraitCanvas.jsx';
import { ArrowRight, ExternalLink, Binary, Sliders } from 'lucide-react';

export default function ProjectDitherCase({ project, onOpenModal }) {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <article aria-label={project.title} className="py-16 border-b border-[#1C1C22]">
      {/* Editorial Header */}
      <div className="flex flex-wrap items-baseline justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-[#818CF8] uppercase tracking-widest">[PROJECT 02 // COMPUTER VISION]</span>
          <span className="px-2 py-0.5 text-[10px] font-mono bg-[#18181F] text-[#818CF8] border border-[#272734] rounded">
            ACTIVE RESEARCH
          </span>
        </div>
        <div className="text-xs font-mono text-[#656570]">TIMELINE: 2024 • IIT JODHPUR</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Interactive 1-Bit Dither Canvas (6 Cols) */}
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="border border-[#272730] bg-[#111114] p-4 rounded-sm shadow-xl">
            <div className="mb-3 flex items-center justify-between text-xs font-mono text-[#9E9EA8]">
              <span className="flex items-center gap-1.5 text-[#F4F4F2]">
                <Binary size={14} className="text-[#818CF8]" />
                LIVE SPATIAL QUANTIZER
              </span>
              <span className="text-emerald-400">120+ FPS</span>
            </div>

            {/* Dither Canvas */}
            <DitherPortraitCanvas imageSrc={project.image} />

            <div className="mt-4 p-3 bg-[#0C0C0E] border border-[#1F1F26] rounded text-[11px] font-mono text-[#9E9EA8] space-y-1.5">
              <div className="text-[#656570]">FLOYD-STEINBERG CONVOLUTION KERNEL:</div>
              <div className="text-[#C7D2FE]">
                [ * , 7/16 ] <br />
                [ 3/16 , 5/16 , 1/16 ]
              </div>
            </div>
          </div>
        </div>

        {/* Right Editorial Storytelling (6 Cols) */}
        <div className="lg:col-span-6 order-1 lg:order-2">
          <h2 className="text-3xl sm:text-5xl font-bold font-display uppercase tracking-tight text-[#F4F4F0] mb-4">
            {project.title}
          </h2>

          <p className="text-lg text-[#9E9EA8] font-light leading-relaxed mb-6">
            {project.summary}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-mono bg-[#111114] border border-[#272730] text-[#C7D2FE] rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-3 border-y border-[#1C1C22] py-4 mb-8">
            {project.metrics.map((metric, i) => (
              <div key={i}>
                <div className="text-[11px] font-mono text-[#656570] uppercase">{metric.label}</div>
                <div className="text-base font-mono font-semibold text-[#F4F4F2] mt-1">{metric.value}</div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenModal(project)}
              className="px-6 py-3 bg-[#F4F4F0] hover:bg-white text-[#08080A] font-semibold text-xs font-mono uppercase tracking-wider rounded-sm flex items-center gap-2 cursor-pointer transition-colors"
            >
              <span>Read Full Case Study</span>
              <ArrowRight size={14} />
            </button>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-[#272730] hover:border-[#6366F1] bg-[#111114] text-[#9E9EA8] hover:text-white rounded-sm transition-colors"
              title="View Repository"
            >
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

      </div>
    </article>
  );
}
