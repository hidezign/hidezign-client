const options = [
  { label: "Website", value: "website" },
  { label: "E-commerce store", value: "ecommerce" },
  { label: "Web app / SaaS", value: "webapp" },
  { label: "Mobile app", value: "mobile" },
  { label: "Branding", value: "branding" },
  { label: "SEO / growth", value: "seo" },
];

const Step2Requirement = ({ formData, onToggle, onNext }) => {
  const selected = formData.requirements || [];

  return (
    <div className="animate-fadeIn">
      <h2 className="text-2xl md:text-3xl font-bold text-[#111111] mb-2">
        What do you actually need help with?
      </h2>
      <p className="text-[#888888] text-sm mb-8">
        Pick everything that fits — we'll connect the dots.
      </p>
      <div className="grid grid-cols-2 gap-3 mb-8">
        {options.map((opt) => {
          const isSelected = selected.includes(opt.value);
          return (
            <button
              key={opt.value}
              onClick={() => onToggle(opt.value)}
              className={`flex items-center justify-center p-4 rounded-xl border text-left transition-all duration-200 hover:scale-[1.01] cursor-pointer ${
                isSelected
                  ? "border-[#0F38DB] bg-[#0F38DB]/5 shadow-[0_0_0_1px_#0F38DB]"
                  : "border-black/8 bg-white/70 hover:border-[#0F38DB]/50"
              }`}
            >
              <span className="font-medium text-[#111111] text-sm text-center">{opt.label}</span>
            </button>
          );
        })}
      </div>
      <button
        onClick={onNext}
        disabled={selected.length === 0}
        className="w-full py-3 px-6 rounded-xl bg-[#0F38DB] text-white font-semibold shadow-[0_4px_20px_rgba(15,56,219,0.3)] hover:bg-[#0c2eb8] hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        Continue →
      </button>
    </div>
  );
};

export default Step2Requirement;
