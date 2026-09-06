import React, { useState, useEffect } from 'react';
import { ArrowRight, ExternalLink, Activity, Radio, AlertTriangle, Shield } from 'lucide-react';

export default function ProjectOrchestratorCase({ project, onOpenModal }) {
  const [events, setEvents] = useState([
    { id: 'EVT-904', source: 'Thermal Sensor 04', risk: 'HIGH', status: 'DISPATCHED', latency: '42ms' },
    { id: 'EVT-903', source: 'Lidar Node 12', risk: 'LOW', status: 'DEDUPED', latency: '12ms' },
    { id: 'EVT-902', source: 'Optical Feed 08', risk: 'MED', status: 'DISPATCHED', latency: '38ms' }
  ]);

  const [counter, setCounter] = useState(905);

  const injectSimulatedEvent = () => {
    const sources = ['Acoustic Sensor 02', 'Telemetry Ingest 15', 'Boundary Radar 01', 'Thermal Sensor 09'];
    const risks = ['HIGH', 'MED', 'LOW'];
    const newRisk = risks[Math.floor(Math.random() * risks.length)];
    const newSource = sources[Math.floor(Math.random() * sources.length)];
    const newStatus = newRisk === 'LOW' ? 'DEDUPED' : 'DISPATCHED';
    const newLatency = `${Math.floor(Math.random() * 30 + 20)}ms`;

    const newEvt = {
      id: `EVT-${counter}`,
      source: newSource,
      risk: newRisk,
      status: newStatus,
      latency: newLatency
    };

    setCounter((prev) => prev + 1);
    setEvents((prev) => [newEvt, ...prev.slice(0, 3)]);
  };

  return (
    <article aria-label={project.title} className="py-16 border-b border-[#1C1C22]">
      {/* Editorial Header */}
      <div className="flex flex-wrap items-baseline justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-[#818CF8] uppercase tracking-widest">[PROJECT 03 // DISTRIBUTED SYSTEMS]</span>
          <span className="px-2 py-0.5 text-[10px] font-mono bg-[#18181F] text-emerald-400 border border-[#272734] rounded">
            PRODUCTION SYSTEM
          </span>
        </div>
        <div className="text-xs font-mono text-[#656570]">TIMELINE: 2024 • IIT JODHPUR</div>
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

        {/* Right Live Stream Queue Simulator (7 cols) */}
        <div className="lg:col-span-7">
          <div className="border border-[#272730] bg-[#111114] rounded-sm overflow-hidden shadow-2xl p-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-[#1C1C22] mb-6">
              <div className="flex items-center gap-2 text-xs font-mono text-[#F4F4F2]">
                <Activity size={15} className="text-emerald-400 animate-pulse" />
                <span>ASYNC REDIS STREAM DISPATCHER // 10,000 EVT/S</span>
              </div>
              <button
                onClick={injectSimulatedEvent}
                className="px-3 py-1 bg-[#1C1C24] hover:bg-[#272734] border border-[#2F2F3D] text-xs font-mono text-[#818CF8] rounded cursor-pointer transition-colors"
              >
                + Inject Anomaly
              </button>
            </div>

            <div className="space-y-3 font-mono text-xs mb-6">
              {events.map((evt) => (
                <div
                  key={evt.id}
                  className="p-3.5 bg-[#0C0C0E] border border-[#1F1F28] rounded flex flex-wrap items-center justify-between gap-2"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[#818CF8] font-semibold">{evt.id}</span>
                    <span className="text-[#F4F4F2]">{evt.source}</span>
                  </div>
                  <div className="flex items-center gap-4 text-[11px]">
                    <span
                      className={`px-2 py-0.5 rounded border ${
                        evt.risk === 'HIGH'
                          ? 'border-rose-900/60 bg-rose-950/40 text-rose-300'
                          : evt.risk === 'MED'
                          ? 'border-amber-900/60 bg-amber-950/40 text-amber-300'
                          : 'border-blue-900/60 bg-blue-950/40 text-blue-300'
                      }`}
                    >
                      RISK: {evt.risk}
                    </span>
                    <span
                      className={
                        evt.status === 'DISPATCHED' ? 'text-emerald-400' : 'text-[#656570]'
                      }
                    >
                      {evt.status} ({evt.latency})
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-[#08080A] border border-[#1C1C24] rounded grid grid-cols-3 gap-4 text-xs font-mono text-center">
              <div>
                <div className="text-[#656570] text-[10px]">SLIDING DEDUP RATIO</div>
                <div className="text-emerald-400 font-semibold mt-1">68.2% NOISE CUT</div>
              </div>
              <div>
                <div className="text-[#656570] text-[10px]">DISPATCH P99</div>
                <div className="text-[#F4F4F2] font-semibold mt-1">&lt; 48ms</div>
              </div>
              <div>
                <div className="text-[#656570] text-[10px]">TEST COVERAGE</div>
                <div className="text-[#818CF8] font-semibold mt-1">94% PYTEST</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </article>
  );
}
