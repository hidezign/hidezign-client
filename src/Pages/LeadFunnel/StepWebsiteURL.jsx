import { useState } from "react";

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-black/10 bg-white/70 text-[#111111] placeholder-[#aaaaaa] focus:outline-none focus:border-[#0F38DB] focus:shadow-[0_0_0_3px_rgba(15,56,219,0.12)] transition-all duration-200 text-sm";

const isValidUrl = (val) => {
  try { new URL(val); return true; } catch { return false; }
};

const StepWebsiteURL = ({ formData, onChange, onNext }) => {
  const [error, setError] = useState("");

  const handleContinue = () => {
    const val = (formData.websiteUrl || "").trim();
    if (!val) {
      setError("Please enter your website URL.");
      return;
    }
    if (!isValidUrl(val)) {
      setError("Enter a valid URL, e.g. https://yourwebsite.com");
      return;
    }
    setError("");
    onNext();
  };

  return (
    <div className="animate-fadeIn">
      <h2 className="text-2xl md:text-3xl font-bold text-[#111111] mb-2">
        Share your current website.
      </h2>
      <p className="text-[#888888] text-sm mb-8">
        This helps us understand what you have and what needs to change.
      </p>

      <input
        type="url"
        placeholder="https://yourwebsite.com"
        value={formData.websiteUrl || ""}
        onChange={(e) => {
          onChange("websiteUrl", e.target.value);
          if (error) setError("");
        }}
        className={`${inputClass} ${error ? "border-red-400 focus:border-red-400 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.12)]" : ""}`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}

      <button
        onClick={handleContinue}
        className="mt-6 w-full py-3 px-6 rounded-xl bg-[#0F38DB] text-white font-semibold shadow-[0_4px_20px_rgba(15,56,219,0.3)] hover:bg-[#0c2eb8] hover:scale-[1.02] active:scale-[0.99] transition-all duration-200"
      >
        Continue →
      </button>
    </div>
  );
};

export default StepWebsiteURL;
