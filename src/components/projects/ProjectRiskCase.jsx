import React, { useState } from 'react';
import { ArrowRight, ExternalLink, BarChart3 } from 'lucide-react';

export default function ProjectRiskCase({ project, onOpenModal }) {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    { name: 'Debt-to-Income Ratio (DTI)', impact: '+0.342', direction: 'risk_up', val: 78 },
    { name: 'Revolving Line Utilization', impact: '+0.218', direction: 'risk_up', val: 56 },
    { name: 'Payment History Consistency', impact: '-0.289', direction: 'risk_down', val: 68 },
    { name: 'Annual Verified Income', impact: '-0.194', direction: 'risk_down', val: 48 },
    { name: 'Credit Inquiries (Last 6M)', impact: '+0.112', direction: 'risk_up', val: 32 }
  ];

  return (
    <article aria-label={project.title} className="py-16 border-b border-[#1C1C22]">
      {/* Editorial Header */}
      <div className="flex flex-wrap items-baseline justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-[#818CF8] uppercase tracking-widest">[PROJECT 04 // MACHINE LEARNING]</span>
          <span className="px-2 py-0.5 text-[10px] font-mono bg-[#18181F] text-[#818CF8] border border-[#272734] rounded">
            BENCHMARKED MODEL
          </span>
        </div>
        <div className="text-xs font-mono text-[#656570]">TIMELINE: 2023 — 2024 • IIT JODHPUR</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Editorial Narrative (5 cols) */}
        <div className="lg:col-span-5">
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

        {/* Right SHAP Waterfall Visualizer (7 cols) */}
        <div className="lg:col-span-7">
          <div className="border border-[#272730] bg-[#111114] rounded-sm overflow-hidden shadow-2xl p-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-[#1C1C22] mb-6">
              <div className="flex items-center gap-2 text-xs font-mono text-[#F4F4F2]">
                <BarChart3 size={15} className="text-[#818CF8]" />
                <span>SHAP TREE-EXPLAINER FEATURE ATTRIBUTION</span>
              </div>
              <span className="text-[11px] font-mono text-emerald-400">ROC-AUC: 0.942</span>
            </div>

            <div className="space-y-4 font-mono text-xs mb-6">
              {features.map((feat, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setSelectedFeature(feat)}
                  className="cursor-pointer group"
                >
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-[#F4F4F2] group-hover:text-[#818CF8] transition-colors">{feat.name}</span>
                    <span className={feat.direction === 'risk_up' ? 'text-rose-400' : 'text-emerald-400'}>
                      {feat.impact} SHAP
                    </span>
                  </div>
                  <div className="w-full h-2 bg-[#0C0C0E] rounded-full overflow-hidden flex">
                    <div
                      style={{ width: `${feat.val}%` }}
                      className={`h-full transition-all duration-500 ${
                        feat.direction === 'risk_up' ? 'bg-rose-500/80' : 'bg-emerald-500/80'
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-[#08080A] border border-[#1C1C24] rounded text-xs font-mono text-[#9E9EA8] flex items-center justify-between">
              <div>
                <span className="text-[#656570]">INFERENCE TIME: </span>
                <span className="text-[#F4F4F2] font-semibold">1.8ms (FastAPI REST)</span>
              </div>
              <div className="text-[11px] text-[#818CF8]">
                HOVER FOR ATTRIBUTION DETAILS
              </div>
            </div>

          </div>
        </div>

      </div>
    </article>
  );
}
