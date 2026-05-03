import GlassTile from "../../Components/GlassTile";

const options = [
  { label: "Starting something new", value: "new" },
  { label: "Fixing / redesigning something existing", value: "redesign" },
  { label: "Scaling what's already working", value: "scaling" },
  { label: "Just exploring possibilities", value: "exploring" },
];

const Step1Context = ({ formData, onSelect }) => (
  <div className="animate-fadeIn">
    <h2 className="text-2xl md:text-3xl font-bold text-[#111111] mb-2">
      What are we building together?
    </h2>
    <p className="text-[#888888] text-sm mb-8">
      No wrong answer — just helps us understand where you're at.
    </p>
    <div className="grid grid-cols-1 gap-3">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onSelect(opt.value)}
          className={`flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-200 hover:scale-[1.01] cursor-pointer ${
            formData.context === opt.value
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

export default Step1Context;
