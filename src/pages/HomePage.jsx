import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, Terminal, Cpu, Check, Activity, ArrowRight } from 'lucide-react';
import { profile } from '../data/profile.js';
import { projects } from '../data/projects.js';

export default function HomePage({ onOpenProject, onShowToast }) {
  const navigate = useNavigate();

  // Telemetry feed tab state
  const [activeFeedTab, setActiveFeedTab] = useState('live');

  // Request access form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    digest: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Simulated live feed events
  const [events, setEvents] = useState([
    { time: '22:41:07', event: 'prompt injection, api-7', verdict: 'blocked', color: 'text-zinc-400' },
    { time: '22:41:09', event: 'token scales, cdx-2', verdict: 'blocked', color: 'text-zinc-400' },
    { time: '22:41:22', event: 'sedil pattern, sl-risk', verdict: 'escalated', color: 'text-[#3E2CF0]' },
    { time: '22:41:35', event: 'scheme drift, model-tr', verdict: 'patched', color: 'text-emerald-400' },
    { time: '22:41:50', event: 'retry storm, api-3', verdict: 'throttled', color: 'text-amber-400' }
  ]);

  // Periodic simulated live pulse
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
      const newItems = [
        { time: timeStr, event: 'gradient check, layer-34', verdict: 'verified', color: 'text-emerald-400' },
        { time: timeStr, event: 'inference batch, nlp-9', verdict: '4.1ms', color: 'text-[#3E2CF0]' },
        { time: timeStr, event: 'tensor parity, node-04', verdict: 'synchronized', color: 'text-zinc-300' }
      ];
      const randomEvent = newItems[Math.floor(Math.random() * newItems.length)];
      setEvents((prev) => [randomEvent, ...prev.slice(0, 4)]);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.email) {
      onShowToast?.({ type: 'error', message: 'Please provide a valid contact email.' });
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onShowToast?.({
        type: 'success',
        message: `Transmission received. Dispatched to marksrv047@gmail.com for ${formData.email}`
      });
      setFormData({ fullName: '', email: '', digest: false });
    }, 900);
  };

  return (
    <div className="relative min-h-screen">
      {/* ------------------------------------------------------------- */}
      {/* HERO SECTION: Split Layout with Inverted Bone Column */}
      {/* ------------------------------------------------------------- */}
      <section className="relative border-b border-[#1F1F24] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            
            {/* Left Column: Bold Headline & Telemetry Metrics */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-8 py-2">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#85858B] uppercase">
                  <span className="w-2 h-2 rounded-full bg-[#3E2CF0] animate-pulse"></span>
                  <span>Sentinel Telemetry // IIT JODHPUR</span>
                </div>

                <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#F0F0EE] leading-[1.05]">
                  Threats read in <br />
                  <span className="text-white">one bit.</span>
                </h1>

                <p className="text-sm text-[#85858B] leading-relaxed max-w-sm pt-2">
                  Raster Sentinel scores every prompt, call, and commit the moment it happens, then acts before the pattern completes. No dashboards to babysit. One verdict at a time.
                </p>
              </div>

              {/* Live Metric Counters */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-[#1F1F24]">
                <div>
                  <div className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-tight">
                    31,406
                  </div>
                  <div className="text-[11px] font-mono text-[#85858B] mt-1">
                    events scored in the last hour
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-tight">
                    99.2%
                  </div>
                  <div className="text-[11px] font-mono text-[#85858B] mt-1">
                    resolved without waking a human
                  </div>
                </div>
              </div>
            </div>

            {/* Center Column: The Inverted Bone Column */}
            <div className="lg:col-span-5 bg-[#E9E7E1] text-[#0B0B0C] rounded-lg p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
              {/* Background dither stipple pattern on bone */}
              <div className="absolute inset-0 bg-bone-dither opacity-30 pointer-events-none"></div>

              {/* Dither Portrait Art */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-full max-w-[280px] sm:max-w-[320px] aspect-[3/4] rounded overflow-hidden border border-[#0B0B0C]/20 bg-white/40 shadow-sm relative">
                  <img
                    src="/assets/sentinel_portrait.jpg"
                    alt="Raster Sentinel 1-Bit AI Portrait"
                    className="w-full h-full object-cover grayscale contrast-125"
                  />
                  <div className="absolute bottom-2 left-2 font-mono text-[9px] bg-[#0B0B0C] text-[#E9E7E1] px-1.5 py-0.5 rounded uppercase">
                    1-BIT RASTER EYE
                  </div>
                </div>

                <div className="mt-6 text-center space-y-1">
                  <div className="text-xl sm:text-2xl font-bold tracking-tight text-[#0B0B0C]">
                    Seen before it strikes.
                  </div>
                  <div className="text-xs font-mono text-[#4A4A4E]">
                    One bit is enough. Flat ink, bone column, ultramarine action.
                  </div>
                </div>
              </div>

              {/* Action Buttons inside Bone Column */}
              <div className="relative z-10 mt-8 space-y-2.5">
                <Link
                  to="/projects"
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded bg-[#3E2CF0] hover:bg-[#3220D8] text-white text-xs font-semibold tracking-wide transition-all shadow-md shadow-[#3E2CF0]/25 active:scale-[0.98]"
                >
                  <span>Start monitoring</span>
                </Link>

                <Link
                  to="/about"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-6 rounded border border-[#0B0B0C]/40 hover:border-[#0B0B0C] hover:bg-[#0B0B0C]/5 text-[#0B0B0C] text-xs font-semibold tracking-wide transition-colors"
                >
                  <span>About the system</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Disciplines & Telemetry Stack */}
            <div className="lg:col-span-3 flex flex-col justify-between py-2 space-y-8">
              {/* Disciplines list */}
              <div className="space-y-1">
                {profile.disciplines.map((item) => (
                  <div
                    key={item.name}
                    className={`text-2xl sm:text-3xl font-extrabold tracking-tight transition-all ${
                      item.active
                        ? 'text-white translate-x-1'
                        : 'text-[#52525B] hover:text-[#85858B]'
                    }`}
                  >
                    {item.name}
                  </div>
                ))}
              </div>

              {/* Telemetry live data table */}
              <div className="space-y-2 font-mono text-xs border-t border-[#1F1F24] pt-6">
                <div className="flex items-center justify-between py-1 border-b border-[#1F1F24]/60">
                  <span className="text-[#85858B]">signals live</span>
                  <span className="text-[#F0F0EE] font-medium">{profile.telemetry.signalsLive}</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-[#1F1F24]/60">
                  <span className="text-[#85858B]">models active</span>
                  <span className="text-[#F0F0EE] font-medium">{profile.telemetry.modelsActive}</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-[#1F1F24]/60">
                  <span className="text-[#85858B]">median verdict</span>
                  <span className="text-[#3E2CF0] font-semibold">{profile.telemetry.medianVerdict}</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-[#85858B]">precision index</span>
                  <span className="text-emerald-400 font-semibold">{profile.telemetry.precisionIndex}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 2: The console is the contract */}
      {/* ------------------------------------------------------------- */}
      <section className="border-b border-[#1F1F24] py-12 lg:py-16 bg-[#080809]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Headline */}
            <div className="lg:col-span-5 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F0F0EE]">
                The console is the contract.
              </h2>
              <p className="text-sm text-[#85858B] leading-relaxed">
                Every block, escalation, and rollback is written to the feed the instant it happens. What you read here is the same record your auditors receive, byte for byte.
              </p>
              <div className="pt-2">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#111113] hover:bg-[#1A1A1E] border border-[#1F1F24] text-xs font-mono text-[#F0F0EE] transition-colors"
                >
                  <span>View live coverage</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#3E2CF0]" />
                </Link>
              </div>
            </div>

            {/* Right Telemetry Terminal Table */}
            <div className="lg:col-span-7 bg-[#111113] border border-[#1F1F24] rounded-lg overflow-hidden">
              {/* Tab Header */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#1F1F24] bg-[#161619] text-xs font-mono">
                <div className="flex items-center gap-4">
                  {['live', 'rules', 'models'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveFeedTab(tab)}
                      className={`capitalize transition-colors ${
                        activeFeedTab === tab ? 'text-white font-semibold' : 'text-[#85858B] hover:text-[#D4D4D8]'
                      }`}
                    >
                      {tab === 'live' ? 'Live feed' : tab}
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-[#3E2CF0]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3E2CF0] animate-ping"></span>
                  <span>SYNCED</span>
                </div>
              </div>

              {/* Feed Content */}
              <div className="p-4 space-y-2.5 font-mono text-xs">
                {activeFeedTab === 'live' && (
                  events.map((ev, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between py-1 border-b border-[#1A1A1E] last:border-0 hover:bg-[#16161A] px-2 rounded transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-[#52525B] text-[11px]">{ev.time}</span>
                        <span className="text-[#D4D4D8]">{ev.event}</span>
                      </div>
                      <span className={`uppercase text-[11px] font-semibold ${ev.color}`}>
                        {ev.verdict}
                      </span>
                    </div>
                  ))
                )}

                {activeFeedTab === 'rules' && (
                  <div className="space-y-2 text-[#A1A1AA]">
                    <div className="flex justify-between py-1 border-b border-[#1A1A1E]">
                      <span>RULE 01: Zero-Trust Weight Attestation</span>
                      <span className="text-emerald-400">ENFORCED</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#1A1A1E]">
                      <span>RULE 02: Maximum In-Flight Jitter &lt; 1.2ms</span>
                      <span className="text-emerald-400">COMPLIANT</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>RULE 03: Adversarial Input Sanitization</span>
                      <span className="text-[#3E2CF0]">ACTIVE (GPU)</span>
                    </div>
                  </div>
                )}

                {activeFeedTab === 'models' && (
                  <div className="space-y-2 text-[#A1A1AA]">
                    <div className="flex justify-between py-1 border-b border-[#1A1A1E]">
                      <span>sentinel-npu-int8</span>
                      <span className="text-white">CUDA // 4.2ms</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#1A1A1E]">
                      <span>raster-halftone-vision</span>
                      <span className="text-white">WebGL // 140 FPS</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>risk-gradient-ensemble</span>
                      <span className="text-white">SHAP // 1.8ms</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 3: Coverage from silicon to operator */}
      {/* ------------------------------------------------------------- */}
      <section className="py-14 lg:py-20 border-b border-[#1F1F24]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F0F0EE]">
              Coverage from silicon to operator.
            </h2>
            <p className="text-sm text-[#85858B] mt-1">
              End-to-end telemetry across physical edge silicon and human verification dispatch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Card 1: Hardware Attestation */}
            <div
              onClick={() => onOpenProject?.(projects[0])}
              className="group cursor-pointer rounded-lg bg-[#111113] border border-[#1F1F24] hover:border-[#3E2CF0]/60 transition-all duration-200 overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[16/9] bg-black overflow-hidden">
                <img
                  src="/assets/circuit_hardware.jpg"
                  alt="Hardware attestation circuit"
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                />
                <button
                  className="absolute bottom-3 right-3 p-1.5 rounded bg-black/80 border border-white/20 text-white group-hover:bg-[#3E2CF0] group-hover:border-[#3E2CF0] transition-colors"
                  aria-label="Expand case study"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              <div className="p-6 space-y-2 flex-1">
                <h3 className="text-lg font-bold text-[#F0F0EE] group-hover:text-white transition-colors">
                  Hardware attestation
                </h3>
                <p className="text-xs text-[#85858B] leading-relaxed">
                  Every node proves its boot chain before it serves a single token. Unverified silicon never joins the fleet.
                </p>
                <div className="pt-2 flex items-center gap-2 text-[11px] font-mono text-[#3E2CF0]">
                  <span>INSPECT CASE STUDY</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            {/* Card 2: Operator Review */}
            <div
              onClick={() => onOpenProject?.(projects[2])}
              className="group cursor-pointer rounded-lg bg-[#111113] border border-[#1F1F24] hover:border-[#3E2CF0]/60 transition-all duration-200 overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[16/9] bg-black overflow-hidden">
                <img
                  src="/assets/operator_silhouette.jpg"
                  alt="Operator review profile"
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                />
                <button
                  className="absolute bottom-3 right-3 p-1.5 rounded bg-black/80 border border-white/20 text-white group-hover:bg-[#3E2CF0] group-hover:border-[#3E2CF0] transition-colors"
                  aria-label="Expand case study"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              <div className="p-6 space-y-2 flex-1">
                <h3 className="text-lg font-bold text-[#F0F0EE] group-hover:text-white transition-colors">
                  Operator review
                </h3>
                <p className="text-xs text-[#85858B] leading-relaxed">
                  Escalations land with a person in under a minute, full context attached, decision logged.
                </p>
                <div className="pt-2 flex items-center gap-2 text-[11px] font-mono text-[#3E2CF0]">
                  <span>INSPECT CASE STUDY</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 4: Request Access / Contact */}
      {/* ------------------------------------------------------------- */}
      <section className="py-14 lg:py-20 bg-[#080809]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3 mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F0F0EE]">
              Request access.
            </h2>
            <p className="text-sm text-[#85858B]">
              Tell us where Sentinel will stand watch. We reply within one business day to all prospective clients &amp; employers.
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div>
              <label htmlFor="fullname" className="block text-xs font-mono text-[#85858B] mb-1.5">
                Fullname
              </label>
              <input
                id="fullname"
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="Ada Lovelace"
                className="w-full px-4 py-2.5 rounded bg-[#111113] border border-[#1F1F24] focus:border-[#3E2CF0] focus:ring-1 focus:ring-[#3E2CF0] text-sm text-[#F0F0EE] placeholder-[#52525B] font-mono transition-colors focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="workemail" className="block text-xs font-mono text-[#85858B] mb-1.5">
                Work email
              </label>
              <input
                id="workemail"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="operator@company.com"
                className="w-full px-4 py-2.5 rounded bg-[#111113] border border-[#1F1F24] focus:border-[#3E2CF0] focus:ring-1 focus:ring-[#3E2CF0] text-sm text-[#F0F0EE] placeholder-[#52525B] font-mono transition-colors focus:outline-none"
              />
              <p className="text-[11px] font-mono text-[#3E2CF0] mt-1.5">
                Target Operator: marksrv047@gmail.com
              </p>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <input
                id="weekly-digest"
                type="checkbox"
                checked={formData.digest}
                onChange={(e) => setFormData({ ...formData, digest: e.target.checked })}
                className="w-4 h-4 rounded bg-[#111113] border-[#1F1F24] text-[#3E2CF0] focus:ring-[#3E2CF0] focus:ring-offset-0 focus:ring-1 cursor-pointer"
              />
              <label htmlFor="weekly-digest" className="text-xs font-mono text-[#85858B] cursor-pointer">
                Send technical telemetry &amp; project updates
              </label>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2.5 rounded bg-[#3E2CF0] hover:bg-[#3220D8] disabled:opacity-50 text-white text-xs font-semibold tracking-wide transition-all shadow-md shadow-[#3E2CF0]/30 active:scale-95"
              >
                {isSubmitting ? 'Transmitting...' : 'Request access'}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
