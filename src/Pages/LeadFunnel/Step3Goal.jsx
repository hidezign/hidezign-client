const options = [
  { label: "Get more leads", value: "leads" },
  { label: "Increase sales", value: "sales" },
  { label: "Build a strong brand", value: "brand" },
  { label: "Launch something new", value: "launch" },
  { label: "Save time with automation", value: "automation" },
];

const Step3Goal = ({ formData, onSelect }) => (
  <div className="animate-fadeIn">
    <h2 className="text-2xl md:text-3xl font-bold text-[#111111] mb-2">
      What's the real goal here?
    </h2>
    <p className="text-[#888888] text-sm mb-8">
      We design for outcomes, not just visuals.
    </p>
    <div className="grid grid-cols-1 gap-3">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onSelect(opt.value)}
          className={`flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-200 hover:scale-[1.01] cursor-pointer ${
            formData.goal === opt.value
              ? "border-[#0F38DB] bg-[#0F38DB]/5 shadow-[0_0_0_1px_#0F38DB]"
              : "border-black/8 bg-white/70 hover:border-[#0F38DB]/50 hover:bg-[#0F38DB]/3"
          }`}
        >
          <span className="font-medium text-[#111111]">{opt.label}</span>
        </button>
      ))}
    </div>
  </div>
);

export default Step3Goal;
