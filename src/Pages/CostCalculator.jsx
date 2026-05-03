import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { toast } from "sonner";
import { submitCostCalculatorForm } from "../Api/user.api";
import GlassTile from "../Components/GlassTile";
import ProgressBar from "../Components/ProgressBar";

/* ─── internal pricing (never shown to user) ─── */
const projectTypes = {
  website:   { name: "Website Design",    basePrice: 75000 },
  ecommerce: { name: "E-Commerce Store",  basePrice: 150000 },
  webapp:    { name: "Web Application",   basePrice: 200000 },
  mobile:    { name: "Mobile App",        basePrice: 250000 },
};
const pagesPricing  = { "3": 0, "5": 15000, "8": 30000, "12": 50000 };
const timelinePricing = { "rush": 30000, "standard": 0, "flexible": -10000 };
const featuresList = [
  { id: "cms",       name: "CMS / Admin Panel",         price: 25000 },
  { id: "ecommerce", name: "E-Commerce Integration",    price: 40000 },
  { id: "api",       name: "API / Third-party Connect", price: 30000 },
  { id: "analytics", name: "Analytics & Tracking",      price: 15000 },
  { id: "seo",       name: "SEO Optimisation",          price: 20000 },
  { id: "security",  name: "Enhanced Security",         price: 25000 },
];

const calcEstimate = (state) => {
  let t = projectTypes[state.projectType]?.basePrice ?? 75000;
  t += pagesPricing[state.pages] ?? 0;
  t += state.features.reduce((s, id) => {
    const f = featuresList.find((x) => x.id === id);
    return s + (f?.price ?? 0);
  }, 0);
  t += timelinePricing[state.timeline] ?? 0;
  return Math.max(t, 50000);
};

/* ─── step option tiles ─── */
const TileBtn = ({ label, sub, selected, onClick }) => (
  <button
    onClick={onClick}
    className={`flex flex-col gap-0.5 p-4 rounded-xl border text-left transition-all duration-200 hover:scale-[1.01] cursor-pointer ${
      selected
        ? "border-[#0F38DB] bg-[#0F38DB]/5 shadow-[0_0_0_1px_#0F38DB]"
        : "border-black/8 bg-white/70 hover:border-[#0F38DB]/50 hover:bg-[#0F38DB]/3"
    }`}
  >
    <span className="font-medium text-[#111111] text-sm">{label}</span>
    {sub && <span className="text-xs text-[#888888]">{sub}</span>}
  </button>
);

const inputCls =
  "w-full px-4 py-3 rounded-xl border border-black/10 bg-white/70 text-[#111111] placeholder-[#aaaaaa] focus:outline-none focus:border-[#0F38DB] focus:shadow-[0_0_0_3px_rgba(15,56,219,0.12)] transition-all duration-200 text-sm";

const ContinueBtn = ({ onClick, disabled, label = "Continue →" }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="w-full py-3 px-6 rounded-xl bg-[#0F38DB] text-white font-semibold shadow-[0_4px_20px_rgba(15,56,219,0.3)] hover:bg-[#0c2eb8] hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
  >
    {label}
  </button>
);

/* ─── main component ─── */
const TOTAL_STEPS = 5;

const CostCalculator = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const [step, setStep]       = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors]   = useState({});

  const [calc, setCalc] = useState({
    projectType: "",
    pages: "",
    features: [],
    timeline: "",
  });

  const [contact, setContact] = useState({ name: "", email: "" });

  const next = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  const toggleFeature = (id) =>
    setCalc((prev) => ({
      ...prev,
      features: prev.features.includes(id)
        ? prev.features.filter((f) => f !== id)
        : [...prev.features, id],
    }));

  const handleContactChange = (field, val) => {
    setContact((prev) => ({ ...prev, [field]: val }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: null }));
  };

  const validate = () => {
    const e = {};
    if (!contact.name.trim() || contact.name.length < 2)
      e.name = "Please enter your name";
    if (!contact.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email))
      e.email = "Please enter a valid email";
    return e;
  };

  const handleSubmit = async () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setLoading(true);
    try {
      const estimated = calcEstimate(calc);
      await submitCostCalculatorForm({
        name: contact.name,
        email: contact.email,
        projectType: projectTypes[calc.projectType]?.name ?? calc.projectType,
        budget: estimated,
        timeline: calc.timeline,
        projectDescription:
          `Project: ${projectTypes[calc.projectType]?.name}\n` +
          `Pages: ${calc.pages}\n` +
          `Features: ${calc.features.length ? calc.features.map((id) => featuresList.find((f) => f.id === id)?.name).join(", ") : "None"}\n` +
          `Timeline: ${calc.timeline}`,
      });
      setSubmitted(true);
    } catch (err) {
      const msg = err?.details?.error || err?.message || "Failed to submit. Please try again.";
      toast.error("Something went wrong", { description: msg });
    } finally {
      setLoading(false);
    }
  };

  /* scroll to top on step change */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  return (
    <>
      <Helmet>
        <title>Project Cost Calculator | H! Dezign — Get Instant Quote</title>
        <meta name="description" content="Use H! Dezign's cost calculator to estimate your web design, app development, or branding project cost. Get an accurate quote based on your requirements." />
        <link rel="canonical" href="https://hidezign.com/cost-calculator" />
        <meta property="og:title" content="Project Cost Calculator | H! Dezign" />
        <meta property="og:description" content="Calculate the estimated cost of your web design or app project instantly." />
        <meta property="og:url" content="https://hidezign.com/cost-calculator" />
      </Helmet>

      <div className="min-h-screen bg-[#F5F5F5] flex flex-col items-center justify-center px-4 py-16">
        <div className="w-full max-w-lg">

          {!submitted && (
            <>
              <div className="text-center mb-8">
                <p className="text-xs font-semibold tracking-widest text-[#0F38DB] uppercase mb-2">
                  Free Estimate
                </p>
                <h1 className="text-3xl md:text-4xl font-bold text-[#111111]">
                  How much will your project cost?
                </h1>
              </div>
              <ProgressBar currentStep={step} totalSteps={TOTAL_STEPS} />
            </>
          )}

          <GlassTile className="p-8">

            {/* ── SUBMITTED ── */}
            {submitted && (
              <div className="animate-fadeIn text-center py-6">
                <div className="text-5xl mb-4">🎉</div>
                <h2 className="text-2xl font-bold text-[#111111] mb-2">You're all set!</h2>
                <p className="text-[#888888] text-sm leading-relaxed">
                  We've received your project details. An exact quote will land in{" "}
                  <strong className="text-[#111111]">{contact.email}</strong> within 24 hours.
                </p>
              </div>
            )}

            {/* ── STEP 1: Project Type ── */}
            {!submitted && step === 1 && (
              <div className="animate-fadeIn">
                <h2 className="text-2xl md:text-3xl font-bold text-[#111111] mb-2">
                  What do you need built?
                </h2>
                <p className="text-[#888888] text-sm mb-8">
                  Pick the option that best fits your project.
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {Object.entries(projectTypes).map(([key, val]) => (
                    <TileBtn
                      key={key}
                      label={val.name}
                      selected={calc.projectType === key}
                      onClick={() => {
                        setCalc((p) => ({ ...p, projectType: key }));
                        setTimeout(next, 250);
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* ── STEP 2: Pages ── */}
            {!submitted && step === 2 && (
              <div className="animate-fadeIn">
                <h2 className="text-2xl md:text-3xl font-bold text-[#111111] mb-2">
                  How many pages?
                </h2>
                <p className="text-[#888888] text-sm mb-8">
                  Roughly how many distinct pages will you need?
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    { val: "3",  label: "Up to 3",  sub: "Landing / brochure" },
                    { val: "5",  label: "4 – 5",    sub: "Small site" },
                    { val: "8",  label: "6 – 8",    sub: "Medium site" },
                    { val: "12", label: "9 – 12+",  sub: "Large site" },
                  ].map(({ val, label, sub }) => (
                    <TileBtn
                      key={val}
                      label={label}
                      sub={sub}
                      selected={calc.pages === val}
                      onClick={() => {
                        setCalc((p) => ({ ...p, pages: val }));
                        setTimeout(next, 250);
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* ── STEP 3: Features ── */}
            {!submitted && step === 3 && (
              <div className="animate-fadeIn">
                <h2 className="text-2xl md:text-3xl font-bold text-[#111111] mb-2">
                  Any add-ons you need?
                </h2>
                <p className="text-[#888888] text-sm mb-8">
                  Pick everything relevant — skip if none apply.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {featuresList.map((f) => (
                    <TileBtn
                      key={f.id}
                      label={f.name}
                      selected={calc.features.includes(f.id)}
                      onClick={() => toggleFeature(f.id)}
                    />
                  ))}
                </div>
                <ContinueBtn onClick={next} />
              </div>
            )}

            {/* ── STEP 4: Timeline ── */}
            {!submitted && step === 4 && (
              <div className="animate-fadeIn">
                <h2 className="text-2xl md:text-3xl font-bold text-[#111111] mb-2">
                  What's your timeline?
                </h2>
                <p className="text-[#888888] text-sm mb-8">
                  When do you need this live?
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { val: "rush",     label: "Rush",     sub: "Need it live within 1 month" },
                    { val: "standard", label: "Standard", sub: "2 – 3 months — most popular" },
                    { val: "flexible", label: "Flexible", sub: "4 – 6 months, no rush" },
                  ].map(({ val, label, sub }) => (
                    <TileBtn
                      key={val}
                      label={label}
                      sub={sub}
                      selected={calc.timeline === val}
                      onClick={() => {
                        setCalc((p) => ({ ...p, timeline: val }));
                        setTimeout(next, 250);
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* ── STEP 5: Contact ── */}
            {!submitted && step === 5 && (
              <div className="animate-fadeIn">
                <h2 className="text-2xl md:text-3xl font-bold text-[#111111] mb-2">
                  Almost there!
                </h2>
                <p className="text-[#888888] text-sm mb-8">
                  Tell us where to send your custom quote.
                </p>
                <div className="space-y-4 mb-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={contact.name}
                      onChange={(e) => handleContactChange("name", e.target.value)}
                      className={inputCls}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your email address"
                      value={contact.email}
                      onChange={(e) => handleContactChange("email", e.target.value)}
                      className={inputCls}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full py-3 px-6 rounded-xl bg-[#0F38DB] text-white font-semibold shadow-[0_4px_20px_rgba(15,56,219,0.3)] hover:bg-[#0c2eb8] hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending…
                    </>
                  ) : "Get My Quote →"}
                </button>
                <p className="text-center text-xs text-[#aaaaaa] mt-3">
                  No spam. No pressure. Exact quote in 24 hours.
                </p>
              </div>
            )}

            {/* ── Back button ── */}
            {!submitted && step > 1 && (
              <button
                onClick={back}
                className="mt-5 text-xs text-[#888888] hover:text-[#111111] transition-colors duration-200 flex items-center gap-1"
              >
                ← Back
              </button>
            )}

          </GlassTile>
        </div>
      </div>
    </>
  );
};

export default CostCalculator;
