import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { toast } from "sonner";

import GlassTile from "./GlassTile";
import ProgressBar from "./ProgressBar";
import Step1Context from "../Pages/LeadFunnel/Step1Context";
import StepWebsiteURL from "../Pages/LeadFunnel/StepWebsiteURL";
import Step2Requirement from "../Pages/LeadFunnel/Step2Requirement";
import Step3Goal from "../Pages/LeadFunnel/Step3Goal";
import Step4Contact from "../Pages/LeadFunnel/Step4Contact";
import ThankYouScreen from "../Pages/LeadFunnel/ThankYouScreen";
import { submitLeadFunnelForm } from "../Api/user.api";

const NEEDS_WEBSITE_URL = ["redesign", "scaling"];

const getSteps = (context) =>
  NEEDS_WEBSITE_URL.includes(context)
    ? ["context", "websiteUrl", "requirements", "goal", "contact"]
    : ["context", "requirements", "goal", "contact"];

const initialFormData = {
  context: "",
  websiteUrl: "",
  requirements: [],
  goal: "",
  name: "",
  email: "",
  phone: "",
  budget: "",
};

const LeadFunnelPopup = () => {
  const [show, setShow]         = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const [stepIndex, setStepIndex] = useState(0);
  const [formData, setFormData]   = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [errors, setErrors]       = useState({});

  /* ── exit-intent trigger ── */
  useEffect(() => {
    if (dismissed || localStorage.getItem("leadFunnelDismissed")) return;

    const onMouseLeave = (e) => {
      if (e.clientY <= 0) setShow(true);
    };

    document.addEventListener("mouseleave", onMouseLeave);
    return () => document.removeEventListener("mouseleave", onMouseLeave);
  }, [dismissed]);

  /* ── lock body scroll when open ── */
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [show]);

  const close = () => {
    setShow(false);
    setDismissed(true);
    localStorage.setItem("leadFunnelDismissed", "true");
  };

  /* ── funnel logic (mirrors LeadFunnel.jsx) ── */
  const steps       = getSteps(formData.context);
  const currentStep = steps[stepIndex];
  const totalSteps  = steps.length;

  const next = () => setStepIndex((i) => Math.min(i + 1, steps.length - 1));
  const back = () => setStepIndex((i) => Math.max(0, i - 1));

  const handleContextSelect = (value) => {
    setFormData((p) => ({ ...p, context: value }));
    setTimeout(() => setStepIndex(1), 300);
  };

  const handleRequirementToggle = (value) => {
    setFormData((prev) => {
      const reqs = prev.requirements.includes(value)
        ? prev.requirements.filter((r) => r !== value)
        : [...prev.requirements, value];
      return { ...prev, requirements: reqs };
    });
  };

  const handleGoalSelect = (value) => {
    setFormData((p) => ({ ...p, goal: value }));
    setTimeout(() => next(), 300);
  };

  const handleFieldChange = (field, value) => {
    setFormData((p) => ({ ...p, [field]: value }));
    if (errors[field]) setErrors((p) => ({ ...p, [field]: null }));
  };

  const validate = () => {
    const e = {};
    if (!formData.name.trim() || formData.name.length < 2)
      e.name = "Please enter your name";
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      e.email = "Please enter a valid email";
    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone.replace(/\s/g, "")))
      e.phone = "Enter a valid 10-digit WhatsApp number";
    if (!formData.budget) e.budget = "Please select a budget range";
    return e;
  };

  const handleSubmit = async () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setLoading(true);
    try {
      await submitLeadFunnelForm(formData);
      setSubmitted(true);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!show || dismissed) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={(e) => { if (e.target === e.currentTarget) close(); }}
    >
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-[#F5F5F5] shadow-2xl">

        {/* Close */}
        <button
          onClick={close}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/5 hover:bg-black/10 transition"
        >
          <X className="w-4 h-4 text-[#444]" />
        </button>

        <div className="px-6 pt-8 pb-6">

          {/* Header + progress (hidden after submit) */}
          {!submitted && (
            <div className="mb-6">
              <p className="text-xs font-semibold tracking-widest text-[#0F38DB] uppercase mb-1">
                Free Consultation
              </p>
              <h2 className="text-2xl font-bold text-[#111111] mb-4">
                Let's build something great.
              </h2>
              <ProgressBar currentStep={stepIndex + 1} totalSteps={totalSteps} />
            </div>
          )}

          <GlassTile className="p-6">

            {submitted ? (
              <ThankYouScreen />
            ) : (
              <>
                {currentStep === "context" && (
                  <Step1Context formData={formData} onSelect={handleContextSelect} />
                )}
                {currentStep === "websiteUrl" && (
                  <StepWebsiteURL
                    formData={formData}
                    onChange={handleFieldChange}
                    onNext={next}
                    errors={errors}
                  />
                )}
                {currentStep === "requirements" && (
                  <Step2Requirement
                    formData={formData}
                    onToggle={handleRequirementToggle}
                    onNext={next}
                  />
                )}
                {currentStep === "goal" && (
                  <Step3Goal formData={formData} onSelect={handleGoalSelect} />
                )}
                {currentStep === "contact" && (
                  <Step4Contact
                    formData={formData}
                    onChange={handleFieldChange}
                    onSubmit={handleSubmit}
                    loading={loading}
                    errors={errors}
                  />
                )}

                {stepIndex > 0 && (
                  <button
                    onClick={back}
                    className="mt-4 text-xs text-[#888888] hover:text-[#111111] transition-colors flex items-center gap-1"
                  >
                    ← Back
                  </button>
                )}
              </>
            )}

          </GlassTile>

          {!submitted && (
            <p className="text-center text-xs text-[#aaaaaa] mt-4">
              No commitment. Takes less than 60 seconds.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadFunnelPopup;
