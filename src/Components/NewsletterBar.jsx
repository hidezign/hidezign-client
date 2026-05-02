import React, { useState, useEffect } from "react";
import { Mail, X } from "lucide-react";
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
    // Show bar after 3 seconds
    const timer = setTimeout(() => {
      const dismissed = localStorage.getItem("newsletterDismissed");
      if (!dismissed) {
        setShowBar(true);
      }
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

    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    const emailError = emailValidator(email);
    if (emailError) {
      setError(emailError);
      return;
    }

    try {
      setLoading(true);
      const payload = {
        email: email,
      };

      await submitNewsletterForm(payload);

      toast.success("Subscribed to H! Weekly!", {
        description: "Check your email for the latest design insights.",
      });

      setSubmitted(true);
      setEmail("");

      setTimeout(() => {
        handleClose();
      }, 3000);
    } catch (error) {
      toast.error("Subscription failed", {
        description: "Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  if (!showBar) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-sp-bg1 to-sp-bg1/90 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        {/* Content */}
        {!submitted ? (
          <div className="flex-1 flex items-center gap-4">
            <Mail className="w-5 h-5 flex-shrink-0 hidden sm:block" />
            <div className="flex-1">
              <h3 className="font-semibold text-sm">H! Weekly</h3>
              <p className="text-xs opacity-90">
                Design insights, growth hacks, and industry trends. Every Friday.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="flex gap-2 flex-1 sm:flex-none">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                className="px-3 py-2 rounded text-sp-bg1 text-sm placeholder-sp-bg1/50 focus:outline-none focus:ring-2 focus:ring-white"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-white text-sp-bg1 px-4 py-2 rounded font-semibold text-sm hover:bg-white/90 transition disabled:opacity-50"
              >
                {loading ? "..." : "Join"}
              </button>
            </form>
          </div>
        ) : (
          <div className="flex-1 text-center">
            <p className="font-semibold text-sm">✓ Thanks for subscribing!</p>
          </div>
        )}

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="flex-shrink-0 p-1 hover:bg-white/20 rounded transition"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <div className="text-center py-2 bg-red-500/20 text-sm border-t border-white/20">
          {error}
        </div>
      )}
    </div>
  );
};

export default NewsletterBar;
