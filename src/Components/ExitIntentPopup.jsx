import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Routers } from "../Routes/Routers";

const ExitIntentPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (dismissed) return;

    const handleMouseLeave = (e) => {
      if (e.clientY <= 0) {
        setShowPopup(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [dismissed]);

  const handleClose = () => {
    setShowPopup(false);
    setDismissed(true);
    localStorage.setItem("exitPopupDismissed", "true");
  };

  const handleNavigate = () => {
    navigate(Routers.FREE_AUDIT);
    handleClose();
  };

  if (!showPopup || dismissed) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="relative bg-white rounded-lg max-w-md w-full overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="p-8 text-center">
          <h2 className="text-3xl font-bold text-sp-bg1 mb-3">
            Wait! Before you go...
          </h2>
          <p className="text-sp-bg1/70 mb-6">
            Get a free website audit and find out what's hurting your online presence.
          </p>

          <div className="space-y-3 mb-6 text-left bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-sp-bg1 mb-3">Your audit includes:</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-0.5">✓</span>
                <span>Performance analysis (PageSpeed, Core Web Vitals)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-0.5">✓</span>
                <span>SEO optimization recommendations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-0.5">✓</span>
                <span>UX and design improvements</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-0.5">✓</span>
                <span>Personalized PDF report in 24 hours</span>
              </li>
            </ul>
          </div>

          <button
            onClick={handleNavigate}
            className="w-full bg-sp-bg1 text-white font-semibold py-3 rounded-lg hover:bg-sp-bg1/90 transition mb-3"
          >
            Get Free Audit
          </button>

          <button
            onClick={handleClose}
            className="w-full text-sp-bg1 font-medium py-2 hover:bg-gray-100 rounded-lg transition"
          >
            No thanks, continue browsing
          </button>
        </div>

        {/* Social Proof */}
        <div className="bg-gray-50 px-8 py-4 text-center border-t border-gray-200">
          <p className="text-xs text-sp-bg1/60 mb-2">Trusted by 50+ businesses</p>
          <div className="flex justify-center gap-1">
            <span className="text-yellow-400">★★★★★</span>
            <span className="text-xs text-sp-bg1/60">4.9/5 rating</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
