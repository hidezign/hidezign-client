const budgetOptions = [
  "Under ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000 – ₹3,00,000",
  "₹3,00,000 – ₹5,00,000",
  "₹5,00,000 – ₹10,00,000",
  "₹10,00,000+",
];

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-black/10 bg-white/70 text-[#111111] placeholder-[#aaaaaa] focus:outline-none focus:border-[#0F38DB] focus:shadow-[0_0_0_3px_rgba(15,56,219,0.12)] transition-all duration-200 text-sm";

const Step4Contact = ({ formData, onChange, onSubmit, loading, errors }) => (
  <div className="animate-fadeIn">
    <h2 className="text-2xl md:text-3xl font-bold text-[#111111] mb-2">
      Alright, let's make this real.
    </h2>
    <p className="text-[#888888] text-sm mb-8">
      Drop your details — we'll send your custom plan + pricing range.
    </p>

    <div className="space-y-4">
      <div>
        <input
          type="text"
          placeholder="What should we call you?"
          value={formData.name}
          onChange={(e) => onChange("name", e.target.value)}
          className={inputClass}
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>

      <div>
        <input
          type="email"
          placeholder="Where should we send your plan?"
          value={formData.email}
          onChange={(e) => onChange("email", e.target.value)}
          className={inputClass}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      <div>
        <input
          type="tel"
          placeholder="Your WhatsApp number"
          value={formData.phone}
          onChange={(e) => onChange("phone", e.target.value)}
          className={inputClass}
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
      </div>

      <div>
        <p className="text-xs font-medium text-[#555555] mb-2">
          What kind of budget are we working with?
        </p>
        <select
          value={formData.budget}
          onChange={(e) => onChange("budget", e.target.value)}
          className={`${inputClass} cursor-pointer`}
        >
          <option value="">Select your budget range</option>
          {budgetOptions.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
        {errors.budget && <p className="text-red-500 text-xs mt-1">{errors.budget}</p>}
      </div>
    </div>

    <button
      onClick={onSubmit}
      disabled={loading}
      className="mt-6 w-full py-3 px-6 rounded-xl bg-[#0F38DB] text-white font-semibold shadow-[0_4px_20px_rgba(15,56,219,0.3)] hover:bg-[#0c2eb8] hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
    >
      {loading ? (
        <>
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Sending...
        </>
      ) : (
        "Get My Custom Plan →"
      )}
    </button>

    <p className="text-center text-xs text-[#aaaaaa] mt-3">
      No spam. No pressure. Just clarity.
    </p>
  </div>
);

export default Step4Contact;
