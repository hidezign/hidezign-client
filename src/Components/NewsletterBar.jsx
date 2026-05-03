import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { emailValidator } from "../utils/inputValidator";
import { toast } from "sonner";
import { submitNewsletterForm } from "../Api/user.api";

const NewsletterBar = () => {
  const [showBar, setShowBar] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      const dismissed = localStorage.getItem("newsletterDismissed");
      if (!dismissed) setShowBar(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowBar(false);
    localStorage.setItem("newsletterDismissed", "true");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!email.trim()) { setError("Email is required"); return; }
    const emailError = emailValidator(email);
    if (emailError) { setError(emailError); return; }
    try {
      setLoading(true);
      await submitNewsletterForm({ email });
      toast.success("Subscribed to H! Weekly!", {
        description: "Check your email for the latest design insights.",
      });
      setSubmitted(true);
      setEmail("");
      setTimeout(() => handleClose(), 3000);
    } catch (err) {
      const msg = err?.details?.error || err?.message || "Please try again later.";
      toast.error("Subscription failed", { description: msg });
    } finally {
      setLoading(false);
    }
  };

  if (!showBar) return null;

  return (
    <div className="fixed inset-x-0 top-4 z-[60] px-4 pointer-events-none">
      <div className="mx-auto max-w-5xl rounded-2xl border border-sp-bg1/10 bg-[#F0F0F0]/95 shadow-[0_20px_60px_rgba(14,14,14,0.12)] backdrop-blur-sm pointer-events-auto relative">
        <div className="flex flex-col gap-4 p-4 md:flex-row md:items-center md:justify-between md:gap-6 md:p-5 pr-10">
          {!submitted ? (
            <>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold text-sp-bg1">H! Weekly</p>
                <p className="text-xs leading-5 text-sp-bg1/60">
                  Design insights, growth hacks, and industry trends. Every Friday.
                </p>
                {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
              </div>
              <form onSubmit={handleSubmit} className="flex gap-2 shrink-0">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(""); }}
                  disabled={loading}
                  className="px-3 py-2 rounded-xl border border-sp-bg1/10 bg-white/70 text-sp-bg1 text-sm placeholder-sp-bg1/30 focus:outline-none focus:border-sp-primary-s1 focus:shadow-[0_0_0_3px_rgba(15,56,219,0.1)] transition-all"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-full bg-sp-primary-s1 px-4 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-sp-bg1 disabled:opacity-50"
                >
                  {loading ? "..." : "Join"}
                </button>
              </form>
            </>
          ) : (
            <p className="text-sm font-semibold text-sp-bg1 flex-1 text-center">
              Thanks for subscribing!
            </p>
          )}
        </div>
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 p-1 rounded-full hover:bg-sp-bg1/5 transition"
        >
          <X className="w-4 h-4 text-sp-bg1/50" />
        </button>
      </div>
    </div>
  );
};

export default NewsletterBar;
