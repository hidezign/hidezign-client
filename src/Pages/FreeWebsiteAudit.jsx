import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Button from "../Components/Button";
import InputField from "../Components/InputField";
import Loader from "../Components/Loader";
import { emailValidator } from "../utils/inputValidator";
import { toast } from "sonner";
import { submitContactForm } from "../Api/user.api";
import Swal from "sweetalert2";

const FreeWebsiteAudit = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [payload, setPayload] = useState({
    firstname: "",
    email: "",
    website_url: "",
    projectDescription: "Free Website Audit Request",
  });
  const [formDataErr, setFormDataErr] = useState({});

  const handleChange = (e, field) => {
    const { value } = e.target;
    let error = null;

    if (field === "email") {
      error = emailValidator(value);
    } else if (field === "website_url") {
      if (!value.trim()) {
        error = "Website URL cannot be empty";
      } else if (!/^https?:\/\//.test(value)) {
        error = "URL must start with http:// or https://";
      } else {
        error = null;
      }
    } else if (field === "firstname") {
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

    if (!payload.firstname.trim()) {
      errors.firstname = "Name is required";
      isValid = false;
    }
    if (!payload.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (emailValidator(payload.email)) {
      errors.email = emailValidator(payload.email);
      isValid = false;
    }
    if (!payload.website_url.trim()) {
      errors.website_url = "Website URL is required";
      isValid = false;
    } else if (!/^https?:\/\//.test(payload.website_url)) {
      errors.website_url = "URL must start with http:// or https://";
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
      const auditPayload = {
        firstname: payload.firstname,
        email: payload.email,
        website_url: payload.website_url,
        service: "FREE-WEBSITE-AUDIT",
        projectDescription: `Free Website Audit Request\nWebsite: ${payload.website_url}`,
      };

      await submitContactForm(auditPayload);

      setSubmitted(true);
      setPayload({
        firstname: "",
        email: "",
        website_url: "",
        projectDescription: "Free Website Audit Request",
      });

      Swal.fire({
        icon: "success",
        title: "Audit Request Submitted!",
        html: `<p>Hi ${payload.firstname},</p><p>We've received your website audit request. Our team will review <strong>${payload.website_url}</strong> and send you a personalized PDF audit report within 24 hours.</p><p>Check your email (${payload.email}) for updates.</p>`,
        confirmButtonText: "Great!",
        confirmButtonColor: "#1a1a1a",
      });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      toast.error("Submission Failed", {
        description: error?.response?.data?.message || "Please try again later.",
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

      <div className="min-h-screen py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header Section */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-sp-bg1 mb-4">
              Free Website Audit
            </h1>
            <p className="text-lg text-sp-bg1/70 max-w-2xl mx-auto">
              Get a personalized report identifying what's hurting your website's
              performance, SEO ranking, and user experience.
            </p>
          </div>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 rounded-lg border border-sp-bg1/10 bg-sp-white/50">
              <h3 className="text-xl font-semibold text-sp-bg1 mb-3">
                Performance Check
              </h3>
              <p className="text-sp-bg1/70 text-sm">
                PageSpeed, Core Web Vitals, load times, and mobile optimization
              </p>
            </div>
            <div className="p-6 rounded-lg border border-sp-bg1/10 bg-sp-white/50">
              <h3 className="text-xl font-semibold text-sp-bg1 mb-3">
                SEO Analysis
              </h3>
              <p className="text-sp-bg1/70 text-sm">
                Meta tags, schema markup, backlinks, and keyword optimization
              </p>
            </div>
            <div className="p-6 rounded-lg border border-sp-bg1/10 bg-sp-white/50">
              <h3 className="text-xl font-semibold text-sp-bg1 mb-3">
                UX Review
              </h3>
              <p className="text-sp-bg1/70 text-sm">
                Design quality, accessibility, conversion rate optimization
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="max-w-2xl mx-auto">
            <div className="p-8 rounded-lg border border-sp-bg1/10 bg-sp-white/50">
              <h2 className="text-2xl font-semibold text-sp-bg1 mb-6">
                Get Your Free Audit
              </h2>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <InputField
                    label="Full Name *"
                    value={payload.firstname}
                    onChange={(e) => handleChange(e, "firstname")}
                    error={formDataErr.firstname}
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
                    value={payload.website_url}
                    onChange={(e) => handleChange(e, "website_url")}
                    error={formDataErr.website_url}
                    placeholder="https://yourwebsite.com"
                    classes="w-full"
                  />

                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg text-sm text-blue-800">
                    <p className="font-semibold mb-2">What you'll receive:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Personalized PDF audit report</li>
                      <li>Top 5 issues to fix immediately</li>
                      <li>Actionable recommendations</li>
                      <li>Free consultation call option</li>
                    </ul>
                  </div>

                  <Button
                    title="Get Free Audit Report"
                    onClick={handleSubmit}
                    className="w-full bg-sp-bg1 text-white py-3 rounded-lg font-semibold hover:bg-sp-bg1/90 transition"
                  />

                  <p className="text-xs text-sp-bg1/60 text-center">
                    We'll send your audit report within 24 hours. No spam, no
                    credit card required.
                  </p>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="text-5xl mb-4">✓</div>
                  <h3 className="text-2xl font-semibold text-sp-bg1 mb-2">
                    Thank you!
                  </h3>
                  <p className="text-sp-bg1/70">
                    Check your email for your personalized audit report.
                  </p>
                </div>
              )}
            </div>

            {/* Social Proof */}
            <div className="mt-12 text-center">
              <p className="text-sp-bg1/70 text-sm mb-4">
                Trusted by 50+ businesses in India
              </p>
              <div className="flex justify-center gap-4">
                <span className="text-yellow-400">★★★★★</span>
                <span className="text-sp-bg1/70 text-sm">
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
