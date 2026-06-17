import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Mail } from 'lucide-react';

export default function ClinicalAIValidator() {
  const [hoveredService, setHoveredService] = useState(null);

  const AnimatedWorkflow = () => (
    <svg viewBox="0 0 800 200" className="w-full h-auto" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <defs>
        <style>{`
          @keyframes flow {
            0% { stroke-dashoffset: 20; }
            100% { stroke-dashoffset: 0; }
          }
          .flow-line {
            stroke-dasharray: 20;
            animation: flow 2s linear infinite;
          }
          @keyframes pulse {
            0%, 100% { r: 30; opacity: 1; }
            50% { r: 35; opacity: 0.7; }
          }
          .pulse-circle {
            animation: pulse 2s ease-in-out infinite;
          }
        `}</style>
      </defs>

      {/* Connecting lines */}
      <line x1="80" y1="100" x2="280" y2="100" stroke="#10b981" strokeWidth="2" className="flow-line" />
      <line x1="320" y1="100" x2="520" y2="100" stroke="#10b981" strokeWidth="2" className="flow-line" style={{ animationDelay: '0.5s' }} />
      <line x1="560" y1="100" x2="760" y2="100" stroke="#10b981" strokeWidth="2" className="flow-line" style={{ animationDelay: '1s' }} />

      {/* Circles */}
      <circle cx="80" cy="100" r="30" fill="none" stroke="#10b981" strokeWidth="2" className="pulse-circle" />
      <text x="80" y="135" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Intake</text>

      <circle cx="320" cy="100" r="30" fill="none" stroke="#10b981" strokeWidth="2" className="pulse-circle" style={{ animationDelay: '0.5s' }} />
      <text x="320" y="135" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Clinical Review</text>

      <circle cx="560" cy="100" r="30" fill="none" stroke="#10b981" strokeWidth="2" className="pulse-circle" style={{ animationDelay: '1s' }} />
      <text x="560" y="135" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Validated Report</text>

      {/* Arrow indicators */}
      <polygon points="300,95 300,105 315,100" fill="#10b981" opacity="0.6" />
      <polygon points="540,95 540,105 555,100" fill="#10b981" opacity="0.6" />
    </svg>
  );

  const services = [
    {
      title: "Clinical AI Validation",
      description: "Algorithm safety, accuracy claims, and clinical soundness review for AI/health tech companies.",
      details: [
        "Algorithm evaluation & failure mode analysis",
        "Safety & bias assessment",
        "Clinical claim validation",
        "Comprehensive validation report"
      ],
      audience: "For: AI companies, health tech startups"
    },
    {
      title: "AI Content Fact-Checking",
      description: "Medical accuracy review for content, clinical AI outputs, and health/wellness marketing.",
      details: [
        "Clinical accuracy verification",
        "LLM output humanization & correction",
        "Evidence-based fact checking",
        "Annotated review & corrections"
      ],
      audience: "For: Wellness brands, health content platforms"
    },
    {
      title: "Medical Data Annotation",
      description: "Expert clinical labeling for medical datasets, training data, and AI model development.",
      details: [
        "Clinical entity annotation",
        "Medical record analysis & labeling",
        "Dataset quality assurance",
        "High-fidelity training data"
      ],
      audience: "For: AI/ML research, healthcare datasets"
    },
    {
      title: "Health Consulting",
      description: "Clinical consultation, health strategy, and telemedicine services across medical verticals.",
      details: [
        "Patient consultations (telemedicine)",
        "Health optimization protocols",
        "Medical readiness assessment",
        "Personalized health plans"
      ],
      audience: "For: Individuals, diaspora health management"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden">
      {/* Navigation */}
      <nav className="border-b border-neutral-800 sticky top-0 bg-black/95 backdrop-blur z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-semibold tracking-tight text-lg">Tolulope Ajidahun, MD</div>
          <a href="#contact" className="text-sm text-neutral-400 hover:text-teal-400 transition">
            Get in touch
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-2 gap-16 items-center">
        <div>
          <div className="mb-6 inline-block">
            <span className="text-xs text-teal-400 font-semibold tracking-widest">CLINICIAN • AI EVALUATOR • USMLE QUALIFIED</span>
          </div>
          <h1 className="text-6xl font-bold tracking-tight mb-8 leading-tight">
            Clinical judgment for AI systems that matter.
          </h1>
          <p className="text-lg text-neutral-300 mb-10 leading-relaxed max-w-md">
            I evaluate AI through the lens of real clinical practice. Algorithm soundness, safety, bias, accuracy claims—I catch what pure data scientists miss because I've diagnosed real patients.
          </p>
          <div className="flex gap-4">
            <a href="#contact" className="bg-teal-600 hover:bg-teal-700 px-7 py-3 rounded font-medium transition flex items-center gap-2">
              Book consultation <ArrowRight size={18} />
            </a>
            <a href="#work" className="border border-neutral-600 hover:border-teal-400 px-7 py-3 rounded font-medium transition">
              View work samples
            </a>
          </div>
        </div>

        {/* Headshot */}
        <div className="relative">
          <div className="bg-gradient-to-br from-teal-600/20 to-neutral-900 rounded-lg border border-teal-600/30 p-1 overflow-hidden">
            <img
              src="https://drive.google.com/uc?export=view&id=1GNf2_LSA5XAlU1YuDo7DhWntfEjz6mKK"
              alt="Tolulope Ajidahun, MD"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-black border border-teal-600/50 rounded px-4 py-2 text-xs">
            <p className="font-semibold text-teal-400">Distinction in Psychiatry</p>
            <p className="text-neutral-400">MHFA Certified</p>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-neutral-800">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <p className="text-xs text-neutral-500 mb-3 tracking-widest">QUALIFICATION</p>
            <p className="font-semibold text-sm mb-1">MBChB</p>
            <p className="text-xs text-neutral-400">Olabisi Onabanjo University (2023)</p>
          </div>
          <div>
            <p className="text-xs text-neutral-500 mb-3 tracking-widest">CERTIFICATION</p>
            <p className="font-semibold text-sm mb-1">Mental Health First Responder</p>
            <p className="text-xs text-neutral-400">Supervised clinical training</p>
          </div>
          <div>
            <p className="text-xs text-neutral-500 mb-3 tracking-widest">EXAM</p>
            <p className="font-semibold text-sm mb-1">USMLE Qualified</p>
            <p className="text-xs text-neutral-400">Step 2 in progress</p>
          </div>
          <div>
            <p className="text-xs text-neutral-500 mb-3 tracking-widest">PRACTICE</p>
            <p className="font-semibold text-sm mb-1">Active Clinician</p>
            <p className="text-xs text-neutral-400">Telemedicine + psychiatry</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-24 border-t border-neutral-800">
        <h2 className="text-4xl font-bold mb-4">Services</h2>
        <p className="text-neutral-400 mb-16 max-w-2xl">
          Freelance medical validation, clinical AI evaluation, and health consulting. All projects quote-based.
        </p>

        <div className="grid grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredService(idx)}
              onMouseLeave={() => setHoveredService(null)}
              className="border border-neutral-800 rounded-lg p-8 hover:border-teal-600/50 transition-all duration-300 cursor-pointer group"
            >
              <h3 className="text-xl font-bold mb-3 group-hover:text-teal-400 transition">
                {service.title}
              </h3>
              <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>

              {hoveredService === idx && (
                <div className="space-y-3 animate-in fade-in duration-300">
                  {service.details.map((detail, i) => (
                    <div key={i} className="flex gap-3 text-sm text-neutral-300">
                      <CheckCircle2 size={16} className="text-teal-400 flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                  <p className="text-xs text-teal-400 font-semibold pt-4 border-t border-neutral-700 mt-4">
                    {service.audience}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Workflow Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-neutral-800">
        <h2 className="text-4xl font-bold mb-4">How it works</h2>
        <p className="text-neutral-400 mb-16 max-w-2xl">
          Three-phase engagement: intake clarification, deep clinical review, actionable report.
        </p>
        <AnimatedWorkflow />
        <div className="mt-16 grid grid-cols-3 gap-12 text-center">
          <div>
            <p className="text-sm text-neutral-500 mb-3 tracking-widest">PHASE 1</p>
            <h4 className="font-semibold mb-2">Intake</h4>
            <p className="text-sm text-neutral-400">
              You describe your AI system, clinical domain, scope, and deliverable expectations.
            </p>
          </div>
          <div>
            <p className="text-sm text-neutral-500 mb-3 tracking-widest">PHASE 2</p>
            <h4 className="font-semibold mb-2">Clinical Review</h4>
            <p className="text-sm text-neutral-400">
              Deep evaluation: algorithm analysis, failure modes, safety, bias, clinical claim validation.
            </p>
          </div>
          <div>
            <p className="text-sm text-neutral-500 mb-3 tracking-widest">PHASE 3</p>
            <h4 className="font-semibold mb-2">Validated Report</h4>
            <p className="text-sm text-neutral-400">
              Comprehensive findings, risk assessment, and recommendations. Ready for regulatory/investor review.
            </p>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="max-w-7xl mx-auto px-6 py-24 border-t border-neutral-800">
        <h2 className="text-4xl font-bold mb-16">Recent work</h2>
        <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-8">
          <p className="text-neutral-400 mb-6">
            Medical fact-checking case study: Supplement ingredient claims verification.
          </p>
          <a
            href="https://app.notion.com/p/VitalRoot-Energy-Complex-Article-Fact-Check-37bdbcab161180f8a2c5da1d42467829?source=copy_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 font-semibold transition"
          >
            View fact-check sample <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-24 border-t border-neutral-800">
        <div className="bg-gradient-to-br from-teal-600/10 to-neutral-900/50 border border-teal-600/30 rounded-lg px-12 py-16 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to evaluate?</h2>
          <p className="text-neutral-300 mb-12 text-lg max-w-2xl mx-auto">
            Let's talk about your AI system. I move fast for serious inquiries and deliver high-signal validation.
          </p>
          <a
            href="mailto:ajidahuntolulope@gmail.com?subject=Clinical%20AI%20Validation%20Inquiry"
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 px-8 py-4 rounded font-semibold transition"
          >
            <Mail size={20} />
            Schedule consultation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 max-w-7xl mx-auto px-6 py-12 text-neutral-500 text-sm">
        <p>Tolulope Ajidahun, MD • Clinical AI Validator & Health Consultant</p>
        <p className="mt-2">Lagos, Nigeria • USMLE Qualified • Psychiatry Specialist</p>
      </footer>
    </div>
  );
}
