import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { toast } from "sonner";

import GlassTile from "../../Components/GlassTile";
import ProgressBar from "../../Components/ProgressBar";
import Step1Context from "./Step1Context";
import StepWebsiteURL from "./StepWebsiteURL";
import Step2Requirement from "./Step2Requirement";
import Step3Goal from "./Step3Goal";
import Step4Contact from "./Step4Contact";
import ThankYouScreen from "./ThankYouScreen";
import { submitLeadFunnelForm } from "../../Api/user.api";

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

const LeadFunnel = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const steps = getSteps(formData.context);
  const currentStep = steps[stepIndex];
  const totalSteps = steps.length;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [stepIndex]);

  const next = () => setStepIndex((i) => Math.min(i + 1, steps.length - 1));
  const back = () => setStepIndex((i) => Math.max(0, i - 1));

  const handleContextSelect = (value) => {
    setFormData((prev) => ({ ...prev, context: value }));
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
    setFormData((prev) => ({ ...prev, goal: value }));
    setTimeout(() => next(), 300);
  };

  const handleFieldChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: null }));
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.length < 2)
      errs.name = "Please enter your name";
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      errs.email = "Please enter a valid email";
    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone.replace(/\s/g, "")))
      errs.phone = "Enter a valid 10-digit WhatsApp number";
    if (!formData.budget) errs.budget = "Please select a budget range";
    return errs;
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

  return (
    <>
      <Helmet>
        <title>Get Your Custom Plan — Hidezign</title>
        <meta
          name="description"
          content="Tell us about your project and get a custom plan + pricing range in 24 hours."
        />
      </Helmet>

      <div className="min-h-screen bg-[#F5F5F5] flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-lg">
          {!submitted && (
            <>
              <div className="text-center mb-8">
                <p className="text-xs font-semibold tracking-widest text-[#0F38DB] uppercase mb-2">
                  Free Consultation
                </p>
                <h1 className="text-3xl md:text-4xl font-bold text-[#111111]">
                  Let's build something great.
                </h1>
              </div>
              <ProgressBar currentStep={stepIndex + 1} totalSteps={totalSteps} />
            </>
          )}

          <GlassTile className="p-8">
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
                    className="mt-4 text-xs text-[#888888] hover:text-[#111111] transition-colors duration-200 flex items-center gap-1"
                  >
                    ← Back
                  </button>
                )}
              </>
            )}
          </GlassTile>
        </div>
      </div>
    </>
  );
};

export default LeadFunnel;
