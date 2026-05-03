const GlassTile = ({ children, className = "" }) => (
  <div
    className={`rounded-[20px] border border-black/5 bg-white/60 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] ${className}`}
  >
    {children}
  </div>
);

export default GlassTile;
