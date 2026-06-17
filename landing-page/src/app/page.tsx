"use client";

import { CheckCircle2, ArrowRight, ExternalLink } from "lucide-react";

export default function LandingPage() {
  const mailtoLink = "mailto:ajidahuntolulope@gmail.com?subject=Clinical%20AI%20Validation%20Inquiry";

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-neutral-300 font-sans selection:bg-teal-500/30">
      {/* 1. STICKY NAVIGATION */}
      <nav className="sticky top-0 z-50 bg-[#0f0f0f]/80 backdrop-blur-md border-b border-white/5 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="text-white font-bold tracking-tight text-lg">Tolulope Ajidahun, MD</span>
          <a
            href={mailtoLink}
            className="text-sm font-medium text-teal-400 hover:text-teal-300 transition-colors"
          >
            Get in touch
          </a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-16 pb-24 space-y-32">
        
        {/* 2. HERO SECTION */}
        <section className="flex flex-col-reverse md:flex-row gap-16 items-center pt-8">
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <span className="text-teal-500 font-semibold tracking-wider text-sm uppercase">
                CLINICIAN • AI EVALUATOR • USMLE QUALIFIED
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
                Clinical judgment for AI systems that matter.
              </h1>
            </div>
            <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-2xl">
              I evaluate AI through the lens of real clinical practice. Algorithm soundness, safety, bias, accuracy claims—I catch what pure data scientists miss because I've diagnosed real patients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={mailtoLink}
                className="inline-flex items-center justify-center bg-teal-500 hover:bg-teal-400 text-[#0f0f0f] font-bold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
              >
                Book consultation
              </a>
              <a
                href="#work"
                className="inline-flex items-center justify-center bg-transparent border border-white/20 hover:border-white/50 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300"
              >
                View work samples
              </a>
            </div>
          </div>
          <div className="w-full md:w-[400px] flex-shrink-0 relative">
            {/* Gradient border & Headshot */}
            <div className="relative p-1 rounded-3xl bg-gradient-to-tr from-teal-500/80 via-white/10 to-transparent">
              <img
                src="https://drive.google.com/uc?export=view&id=1GNf2_LSA5XAlU1YuDo7DhWntfEjz6mKK"
                alt="Tolulope Ajidahun, MD"
                className="rounded-[22px] w-full aspect-[4/5] object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              />
              {/* Credential Badge */}
              <div className="absolute -bottom-6 -left-6 bg-neutral-900 border border-white/10 p-4 rounded-2xl shadow-xl backdrop-blur-md hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-teal-500 rounded-full animate-pulse" />
                  <span className="text-white font-medium text-sm">Active Clinician</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. CREDENTIALS GRID */}
        <section className="border-y border-white/10 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="pt-4 md:pt-0 md:px-6 first:pl-0">
              <h4 className="text-teal-500 text-xs font-bold tracking-widest uppercase mb-2">QUALIFICATION</h4>
              <p className="text-white font-semibold text-lg mb-1">MBChB</p>
              <p className="text-neutral-500 text-sm">Olabisi Onabanjo University (2023)</p>
            </div>
            <div className="pt-4 md:pt-0 md:px-6">
              <h4 className="text-teal-500 text-xs font-bold tracking-widest uppercase mb-2">CERTIFICATION</h4>
              <p className="text-white font-semibold text-lg mb-1">Mental Health First Responder</p>
              <p className="text-neutral-500 text-sm">Supervised clinical training</p>
            </div>
            <div className="pt-4 md:pt-0 md:px-6">
              <h4 className="text-teal-500 text-xs font-bold tracking-widest uppercase mb-2">EXAM</h4>
              <p className="text-white font-semibold text-lg mb-1">USMLE Qualified</p>
              <p className="text-neutral-500 text-sm">Step 2 in progress</p>
            </div>
            <div className="pt-4 md:pt-0 md:px-6 border-transparent">
              <h4 className="text-teal-500 text-xs font-bold tracking-widest uppercase mb-2">PRACTICE</h4>
              <p className="text-white font-semibold text-lg mb-1">Active Clinician</p>
              <p className="text-neutral-500 text-sm">Telemedicine + psychiatry</p>
            </div>
          </div>
        </section>

        {/* 4. SERVICES SECTION */}
        <section className="space-y-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-white tracking-tight mb-4">Core Services</h2>
            <p className="text-neutral-400 text-lg">Freelance medical validation, clinical AI evaluation, and health consulting. All projects quote-based.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Service 1 */}
            <div className="group relative bg-neutral-900 rounded-2xl border border-white/5 hover:border-teal-500 transition-colors flex flex-col overflow-hidden cursor-default min-h-[260px]">
              <div className="p-8 flex-1 relative">
                <h3 className="text-xl font-bold text-white mb-4 relative z-10">Clinical AI Validation</h3>
                <div className="relative">
                  <div className="absolute inset-0 transition-all duration-300 opacity-100 group-hover:opacity-0">
                    <p className="text-neutral-400 leading-relaxed">Algorithm safety, accuracy claims, and clinical soundness review for AI/health tech companies.</p>
                  </div>
                  <div className="absolute inset-0 transition-all duration-300 opacity-0 group-hover:opacity-100 flex flex-col justify-between h-[150px]">
                    <ul className="space-y-2.5">
                      {['Algorithm evaluation & failure mode analysis', 'Safety & bias assessment', 'Clinical claim validation', 'Comprehensive validation report'].map((item, i) => (
                        <li key={i} className="flex items-start text-sm text-neutral-300">
                          <CheckCircle2 className="w-4 h-4 text-teal-500 mr-3 mt-0.5 flex-shrink-0" /><span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-teal-400 font-medium text-sm mt-4 pt-4 border-t border-white/10">For: AI companies, health tech startups</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group relative bg-neutral-900 rounded-2xl border border-white/5 hover:border-teal-500 transition-colors flex flex-col overflow-hidden cursor-default min-h-[260px]">
              <div className="p-8 flex-1 relative">
                <h3 className="text-xl font-bold text-white mb-4 relative z-10">AI Content Fact-Checking</h3>
                <div className="relative">
                  <div className="absolute inset-0 transition-all duration-300 opacity-100 group-hover:opacity-0">
                    <p className="text-neutral-400 leading-relaxed">Medical accuracy review for content, clinical AI outputs, and health/wellness marketing.</p>
                  </div>
                  <div className="absolute inset-0 transition-all duration-300 opacity-0 group-hover:opacity-100 flex flex-col justify-between h-[150px]">
                    <ul className="space-y-2.5">
                      {['Clinical accuracy verification', 'LLM output humanization & correction', 'Evidence-based fact checking', 'Annotated review & corrections'].map((item, i) => (
                        <li key={i} className="flex items-start text-sm text-neutral-300">
                          <CheckCircle2 className="w-4 h-4 text-teal-500 mr-3 mt-0.5 flex-shrink-0" /><span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-teal-400 font-medium text-sm mt-4 pt-4 border-t border-white/10">For: Wellness brands, health content platforms</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="group relative bg-neutral-900 rounded-2xl border border-white/5 hover:border-teal-500 transition-colors flex flex-col overflow-hidden cursor-default min-h-[260px]">
              <div className="p-8 flex-1 relative">
                <h3 className="text-xl font-bold text-white mb-4 relative z-10">Medical Data Annotation</h3>
                <div className="relative">
                  <div className="absolute inset-0 transition-all duration-300 opacity-100 group-hover:opacity-0">
                    <p className="text-neutral-400 leading-relaxed">Expert clinical labeling for medical datasets, training data, and AI model development.</p>
                  </div>
                  <div className="absolute inset-0 transition-all duration-300 opacity-0 group-hover:opacity-100 flex flex-col justify-between h-[150px]">
                    <ul className="space-y-2.5">
                      {['Clinical entity annotation', 'Medical record analysis & labeling', 'Dataset quality assurance', 'High-fidelity training data'].map((item, i) => (
                        <li key={i} className="flex items-start text-sm text-neutral-300">
                          <CheckCircle2 className="w-4 h-4 text-teal-500 mr-3 mt-0.5 flex-shrink-0" /><span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-teal-400 font-medium text-sm mt-4 pt-4 border-t border-white/10">For: AI/ML research, healthcare datasets</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 4 */}
            <div className="group relative bg-neutral-900 rounded-2xl border border-white/5 hover:border-teal-500 transition-colors flex flex-col overflow-hidden cursor-default min-h-[260px]">
              <div className="p-8 flex-1 relative">
                <h3 className="text-xl font-bold text-white mb-4 relative z-10">Health Consulting</h3>
                <div className="relative">
                  <div className="absolute inset-0 transition-all duration-300 opacity-100 group-hover:opacity-0">
                    <p className="text-neutral-400 leading-relaxed">Clinical consultation, health strategy, and telemedicine services across medical verticals.</p>
                  </div>
                  <div className="absolute inset-0 transition-all duration-300 opacity-0 group-hover:opacity-100 flex flex-col justify-between h-[150px]">
                    <ul className="space-y-2.5">
                      {['Patient consultations (telemedicine)', 'Health optimization protocols', 'Medical readiness assessment', 'Personalized health plans'].map((item, i) => (
                        <li key={i} className="flex items-start text-sm text-neutral-300">
                          <CheckCircle2 className="w-4 h-4 text-teal-500 mr-3 mt-0.5 flex-shrink-0" /><span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-teal-400 font-medium text-sm mt-4 pt-4 border-t border-white/10">For: Individuals, diaspora health management</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. WORKFLOW SECTION */}
        <section className="bg-neutral-900/50 rounded-3xl p-8 md:p-12 border border-white/5 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl font-bold text-white">How it works</h2>
            <p className="text-neutral-400">Three-phase engagement: intake clarification, deep clinical review, actionable report.</p>
          </div>

          <div className="w-full max-w-4xl mx-auto py-8 hidden md:block">
            <svg viewBox="0 0 800 120" className="w-full text-teal-500 overflow-visible">
              <style>
                {`
                  .anim-line {
                    stroke-dasharray: 8;
                    animation: dash 15s linear infinite;
                  }
                  @keyframes dash {
                    to { stroke-dashoffset: -400; }
                  }
                  .pulse-ring {
                    animation: pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                  }
                  @keyframes pulse-ring {
                    0% { transform: scale(0.8); opacity: 0.8; }
                    100% { transform: scale(1.5); opacity: 0; }
                  }
                `}
              </style>
              
              {/* Connecting Lines */}
              <path d="M 150 40 L 400 40 L 650 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
              <path d="M 150 40 L 400 40 L 650 40" fill="none" stroke="currentColor" strokeWidth="3" className="anim-line" />
              
              {/* Nodes */}
              <g transform="translate(150, 40)">
                <circle cx="0" cy="0" r="16" fill="rgba(16,185,129,0.2)" className="pulse-ring" />
                <circle cx="0" cy="0" r="10" fill="#10b981" />
                <text x="0" y="45" fill="white" textAnchor="middle" className="text-[14px] font-semibold tracking-wide">Intake</text>
              </g>
              
              <g transform="translate(400, 40)">
                <circle cx="0" cy="0" r="16" fill="rgba(16,185,129,0.2)" className="pulse-ring" style={{ animationDelay: '0.5s' }} />
                <circle cx="0" cy="0" r="10" fill="#10b981" />
                <text x="0" y="45" fill="white" textAnchor="middle" className="text-[14px] font-semibold tracking-wide">Clinical Review</text>
              </g>
              
              <g transform="translate(650, 40)">
                <circle cx="0" cy="0" r="16" fill="rgba(16,185,129,0.2)" className="pulse-ring" style={{ animationDelay: '1s' }} />
                <circle cx="0" cy="0" r="10" fill="#10b981" />
                <text x="0" y="45" fill="white" textAnchor="middle" className="text-[14px] font-semibold tracking-wide">Validated Report</text>
              </g>
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <span className="text-teal-500 font-bold text-xs tracking-widest">PHASE 1</span>
              <h3 className="text-white font-semibold text-lg">Intake</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">You describe your AI system, clinical domain, scope, and deliverable expectations.</p>
            </div>
            <div className="space-y-2">
              <span className="text-teal-500 font-bold text-xs tracking-widest">PHASE 2</span>
              <h3 className="text-white font-semibold text-lg">Clinical Review</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">Deep evaluation: algorithm analysis, failure modes, safety, bias, clinical claim validation.</p>
            </div>
            <div className="space-y-2">
              <span className="text-teal-500 font-bold text-xs tracking-widest">PHASE 3</span>
              <h3 className="text-white font-semibold text-lg">Validated Report</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">Comprehensive findings, risk assessment, and recommendations. Ready for regulatory/investor review.</p>
            </div>
          </div>
        </section>

        {/* 6. RECENT WORK */}
        <section id="work" className="border-t border-white/10 pt-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-neutral-900/30 p-8 rounded-2xl border border-white/5 hover:bg-neutral-900/60 transition-colors">
            <div>
              <span className="text-teal-500 font-bold text-xs tracking-widest uppercase mb-2 block">Recent Work</span>
              <h3 className="text-xl font-semibold text-white">Medical fact-checking case study: Supplement ingredient claims verification.</h3>
            </div>
            <a
              href="https://app.notion.com/p/VitalRoot-Energy-Complex-Article-Fact-Check-37bdbcab161180f8a2c5da1d42467829?source=copy_link"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-white bg-white/5 hover:bg-white/10 px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap border border-white/10 hover:border-white/20"
            >
              View fact-check sample
              <ExternalLink className="w-4 h-4 text-teal-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </section>

        {/* 7. CTA SECTION */}
        <section className="text-center py-24 bg-gradient-to-b from-transparent to-neutral-900/50 rounded-b-[3rem] border-b border-white/5">
          <div className="max-w-2xl mx-auto space-y-8 px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Ready to evaluate?</h2>
            <p className="text-lg text-neutral-400">
              Let's talk about your AI system. I move fast for serious inquiries and deliver high-signal validation.
            </p>
            <div className="pt-4">
              <a
                href={mailtoLink}
                className="inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-[#0f0f0f] font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.25)]"
              >
                Schedule consultation
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* 8. FOOTER */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500 text-center md:text-left">
          <p>Tolulope Ajidahun, MD • Clinical AI Validator & Health Consultant</p>
          <p>Lagos, Nigeria • USMLE Qualified • Psychiatry Specialist</p>
        </div>
      </footer>
    </div>
  );
}
