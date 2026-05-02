import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Button from "../Components/Button";
import InputField from "../Components/InputField";
import Loader from "../Components/Loader";
import { emailValidator } from "../utils/inputValidator";
import { toast } from "sonner";
import { submitFreeAuditForm } from "../Api/user.api";
import Swal from "sweetalert2";

const FreeWebsiteAudit = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [payload, setPayload] = useState({
    name: "",
    email: "",
    websiteUrl: "",
    businessType: "Not specified",
    focusArea: "General Audit",
  });
  const [formDataErr, setFormDataErr] = useState({});

  const handleChange = (e, field) => {
    const { value } = e.target;
    let error = null;

    if (field === "email") {
      error = emailValidator(value);
    } else if (field === "websiteUrl") {
      if (!value.trim()) {
        error = "Website URL cannot be empty";
      } else if (!/^https?:\/\//.test(value)) {
        error = "URL must start with http:// or https://";
      } else {
        error = null;
      }
    } else if (field === "name") {
      if (!value.trim()) {
        error = "Name cannot be empty";
      } else if (value.length < 2) {
        error = "Name must be at least 2 characters";
      } else {
        error = null;
      }
    }

    setFormDataErr({ ...formDataErr, [field]: error });
    setPayload({ ...payload, [field]: value });
  };

  const validateFields = () => {
    let isValid = true;
    let errors = {};

    if (!payload.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }
    if (!payload.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (emailValidator(payload.email)) {
      errors.email = emailValidator(payload.email);
      isValid = false;
    }
    if (!payload.websiteUrl.trim()) {
      errors.websiteUrl = "Website URL is required";
      isValid = false;
    } else if (!/^https?:\/\//.test(payload.websiteUrl)) {
      errors.websiteUrl = "URL must start with http:// or https://";
      isValid = false;
    }

    setFormDataErr(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateFields()) return;

    try {
      setLoading(true);

      await submitFreeAuditForm(payload);

      setSubmitted(true);
      const previousName = payload.name;
      const previousUrl = payload.websiteUrl;
      const previousEmail = payload.email;

      setPayload({
        name: "",
        email: "",
        websiteUrl: "",
        businessType: "Not specified",
        focusArea: "General Audit",
      });

      Swal.fire({
        icon: "success",
        title: "Audit Request Submitted!",
        html: `<p>Hi ${previousName},</p><p>We've received your website audit request. Our team will review <strong>${previousUrl}</strong> and send you a personalized PDF audit report within 24 hours.</p><p>Check your email (${previousEmail}) for updates.</p>`,
        confirmButtonText: "Great!",
        confirmButtonColor: "#0F38DB",
      });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Form error details:", error);
      const errorMessage = error?.details?.error || error?.message || "Failed to submit. Please try again later.";
      toast.error("Submission Failed", {
        description: errorMessage,
        duration: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Free Website Audit | H! Dezign — Identify Your Website Issues</title>
        <meta
          name="description"
          content="Get a free personalized website audit from H! Dezign. We'll analyze your site's performance, SEO, UX, and design. Receive a detailed PDF report in 24 hours."
        />
        <link rel="canonical" href="https://hidezign.com/free-website-audit" />
        <meta property="og:title" content="Free Website Audit | H! Dezign" />
        <meta
          property="og:description"
          content="Get a free website audit and identify what's hurting your online presence."
        />
        <meta property="og:url" content="https://hidezign.com/free-website-audit" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://hidezign.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Free Website Audit",
                item: "https://hidezign.com/free-website-audit",
              },
            ],
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Free Website Audit",
            description:
              "Get a free personalized audit of your website covering performance, SEO, UX, and design.",
            provider: {
              "@type": "Organization",
              name: "H! Dezign",
              url: "https://hidezign.com",
            },
            areaServed: "Worldwide",
            offers: {
              "@type": "Offer",
              priceCurrency: "INR",
              price: "0",
              availability: "https://schema.org/InStock",
            },
          })}
        </script>
      </Helmet>

      {loading && <Loader />}

      <div className="min-h-screen py-16 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header Section */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">
              Free Website Audit
            </h1>
            <p className="text-lg text-[#0F172A]/60 max-w-2xl mx-auto">
              Get a personalized report identifying what's hurting your website's
              performance, SEO ranking, and user experience.
            </p>
          </div>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 rounded-lg border border-[#0F172A]/10 bg-white hover:border-[#0F38DB]/40 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-[#0F172A] mb-3">
                Performance Check
              </h3>
              <p className="text-[#0F172A]/60 text-sm">
                PageSpeed, Core Web Vitals, load times, and mobile optimization
              </p>
            </div>
            <div className="p-6 rounded-lg border border-[#0F172A]/10 bg-white hover:border-[#0F38DB]/40 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-[#0F172A] mb-3">
                SEO Analysis
              </h3>
              <p className="text-[#0F172A]/60 text-sm">
                Meta tags, schema markup, backlinks, and keyword optimization
              </p>
            </div>
            <div className="p-6 rounded-lg border border-[#0F172A]/10 bg-white hover:border-[#0F38DB]/40 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-[#0F172A] mb-3">
                UX Review
              </h3>
              <p className="text-[#0F172A]/60 text-sm">
                Design quality, accessibility, conversion rate optimization
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="max-w-2xl mx-auto">
            <div className="p-8 rounded-xl border border-[#0F172A]/10 bg-[#F5F5F5]">
              <h2 className="text-2xl font-semibold text-[#0F172A] mb-6">
                Get Your Free Audit
              </h2>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <InputField
                    label="Full Name *"
                    value={payload.name}
                    onChange={(e) => handleChange(e, "name")}
                    error={formDataErr.name}
                    placeholder="Your name"
                    classes="w-full"
                  />

                  <InputField
                    label="Email Address *"
                    type="email"
                    value={payload.email}
                    onChange={(e) => handleChange(e, "email")}
                    error={formDataErr.email}
                    placeholder="your@email.com"
                    classes="w-full"
                  />

                  <InputField
                    label="Website URL *"
                    value={payload.websiteUrl}
                    onChange={(e) => handleChange(e, "websiteUrl")}
                    error={formDataErr.websiteUrl}
                    placeholder="https://yourwebsite.com"
                    classes="w-full"
                  />

                  <div className="bg-[#0F38DB]/5 border border-[#0F38DB]/15 p-4 rounded-lg text-sm">
                    <p className="font-semibold mb-2 text-[#0F172A]">What you'll receive:</p>
                    <ul className="list-disc list-inside space-y-1 text-[#0F172A]/60">
                      <li>Personalized PDF audit report</li>
                      <li>Top 5 issues to fix immediately</li>
                      <li>Actionable recommendations</li>
                      <li>Free consultation call option</li>
                    </ul>
                  </div>

                  <Button
                    title="Get Free Audit Report"
                    onClick={handleSubmit}
                    className="w-full bg-[#0F38DB] text-white py-3 rounded-lg font-semibold hover:bg-[#0F38DB]/90 transition-all duration-200"
                  />

                  <p className="text-xs text-[#0F172A]/40 text-center">
                    We'll send your audit report within 24 hours. No spam, no
                    credit card required.
                  </p>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="text-5xl mb-4 text-[#0F38DB]">✓</div>
                  <h3 className="text-2xl font-semibold text-[#0F172A] mb-2">
                    Thank you!
                  </h3>
                  <p className="text-[#0F172A]/60">
                    Check your email for your personalized audit report.
                  </p>
                </div>
              )}
            </div>

            {/* Social Proof */}
            <div className="mt-12 text-center">
              <p className="text-[#0F172A]/40 text-sm mb-4">
                Trusted by 50+ businesses in India
              </p>
              <div className="flex justify-center gap-4">
                <span className="text-yellow-400">★★★★★</span>
                <span className="text-[#0F172A]/50 text-sm">
                  4.9/5 average rating
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreeWebsiteAudit;
