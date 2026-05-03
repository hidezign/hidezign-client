const ProgressBar = ({ currentStep, totalSteps = 4 }) => {
  const percent = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-[#555555]">
          Step {currentStep} of {totalSteps}
        </span>
        <span className="text-xs text-[#888888]">Takes less than 30 seconds</span>
      </div>
      <div className="w-full h-1 bg-black/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#0F38DB] rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
