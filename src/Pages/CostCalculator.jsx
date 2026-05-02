import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Button from "../Components/Button";
import InputField from "../Components/InputField";
import Loader from "../Components/Loader";
import { emailValidator } from "../utils/inputValidator";
import { toast } from "sonner";
import { submitContactForm } from "../Api/user.api";
import Swal from "sweetalert2";

const CostCalculator = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [calculator, setCalculator] = useState({
    projectType: "website",
    pages: "5",
    features: [],
    timeline: "2-3-months",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const projectTypes = {
    website: { name: "Website Design", basePrice: 75000 },
    ecommerce: { name: "E-Commerce Store", basePrice: 150000 },
    webapp: { name: "Web Application", basePrice: 200000 },
    mobile: { name: "Mobile App", basePrice: 250000 },
  };

  const featuresList = [
    { id: "cms", name: "Content Management System", price: 25000 },
    { id: "ecommerce", name: "E-Commerce Integration", price: 40000 },
    { id: "api", name: "API Integration", price: 30000 },
    { id: "analytics", name: "Analytics & Tracking", price: 15000 },
    { id: "seo", name: "SEO Optimization", price: 20000 },
    { id: "security", name: "Enhanced Security", price: 25000 },
  ];

  const pagesPricing = {
    "3": 0,
    "5": 15000,
    "8": 30000,
    "12": 50000,
  };

  const timelinePricing = {
    "1-month": 30000,
    "2-3-months": 0,
    "4-6-months": -10000,
  };

  const calculateCost = () => {
    let total = projectTypes[calculator.projectType].basePrice;
    total += pagesPricing[calculator.pages] || 0;
    total += calculator.features.reduce((sum, featureId) => {
      const feature = featuresList.find((f) => f.id === featureId);
      return sum + (feature ? feature.price : 0);
    }, 0);
    total += timelinePricing[calculator.timeline] || 0;
    return Math.max(total, 50000);
  };

  const toggleFeature = (featureId) => {
    setCalculator((prev) => ({
      ...prev,
      features: prev.features.includes(featureId)
        ? prev.features.filter((f) => f !== featureId)
        : [...prev.features, featureId],
    }));
  };

  const handleFormChange = (e, field) => {
    const { value } = e.target;
    let error = null;

    if (field === "email") {
      error = emailValidator(value);
    } else if (field === "name") {
      if (!value.trim()) {
        error = "Name is required";
      } else if (value.length < 2) {
        error = "Name must be at least 2 characters";
      } else {
        error = null;
      }
    }

    setFormErrors({ ...formErrors, [field]: error });
    setFormData({ ...formData, [field]: value });
  };

  const handleGetQuote = async (e) => {
    e.preventDefault();

    let isValid = true;
    let errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (emailValidator(formData.email)) {
      errors.email = emailValidator(formData.email);
      isValid = false;
    }

    setFormErrors(errors);
    if (!isValid) return;

    try {
      setLoading(true);
      const estimatedCost = calculateCost();

      const payload = {
        firstname: formData.name,
        email: formData.email,
        service: "PROJECT-QUOTE",
        projectDescription: `Project Cost Calculator Quote Request\n\nProject Type: ${projectTypes[calculator.projectType].name}\nPages: ${calculator.pages}\nFeatures: ${calculator.features.length > 0 ? calculator.features.join(", ") : "None"}\nTimeline: ${calculator.timeline}\n\nEstimated Cost: ₹${estimatedCost.toLocaleString("en-IN")}`,
      };

      await submitContactForm(payload);

      Swal.fire({
        icon: "success",
        title: "Quote Sent!",
        html: `<p>Hi ${formData.name},</p><p>We've received your project details. An exact quote will be sent to <strong>${formData.email}</strong> within 24 hours.</p><p><strong>Estimated Range: ₹${estimatedCost.toLocaleString("en-IN")}</strong></p>`,
        confirmButtonText: "Done",
        confirmButtonColor: "#1a1a1a",
      });

      setSubmitted(true);
      setTimeout(() => {
        setShowForm(false);
        setSubmitted(false);
        setFormData({ name: "", email: "" });
      }, 3000);
    } catch (error) {
      toast.error("Failed to submit quote request", {
        description: error?.response?.data?.message || "Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  const estimatedCost = calculateCost();

  return (
    <>
      <Helmet>
        <title>
          Project Cost Calculator | H! Dezign — Get Instant Quote
        </title>
        <meta
          name="description"
          content="Use H! Dezign's cost calculator to estimate your web design, app development, or branding project cost. Get an accurate quote based on your requirements."
        />
        <link rel="canonical" href="https://hidezign.com/cost-calculator" />
        <meta property="og:title" content="Project Cost Calculator | H! Dezign" />
        <meta
          property="og:description"
          content="Calculate the estimated cost of your web design or app project instantly."
        />
        <meta property="og:url" content="https://hidezign.com/cost-calculator" />

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
                name: "Cost Calculator",
                item: "https://hidezign.com/cost-calculator",
              },
            ],
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How accurate is this cost calculator?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "This is an estimate based on typical project requirements. Final pricing may vary based on specific needs, custom features, and timeline.",
                },
              },
              {
                "@type": "Question",
                name: "What's included in the project cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Design, development, testing, deployment, and ongoing support during the project duration.",
                },
              },
              {
                "@type": "Question",
                name: "Can I get a custom quote?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely. Enter your details below to get an exact quote customized to your project.",
                },
              },
            ],
          })}
        </script>
      </Helmet>

      {loading && <Loader />}

      <div className="min-h-screen py-16">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-sp-bg1 mb-4">
              Project Cost Calculator
            </h1>
            <p className="text-lg text-sp-bg1/70">
              Get an instant estimate for your web design, app, or branding
              project
            </p>
          </div>

          {/* Calculator Form */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left: Calculator Options */}
            <div className="space-y-8">
              {/* Project Type */}
              <div className="p-6 rounded-lg border border-sp-bg1/10 bg-sp-white/50">
                <h3 className="text-lg font-semibold text-sp-bg1 mb-4">
                  1. What do you need?
                </h3>
                <div className="space-y-3">
                  {Object.entries(projectTypes).map(([key, value]) => (
                    <label
                      key={key}
                      className="flex items-center gap-3 p-3 rounded-lg border border-sp-bg1/10 cursor-pointer hover:bg-sp-bg1/5 transition"
                    >
                      <input
                        type="radio"
                        name="projectType"
                        value={key}
                        checked={calculator.projectType === key}
                        onChange={(e) =>
                          setCalculator({
                            ...calculator,
                            projectType: e.target.value,
                          })
                        }
                        className="w-4 h-4"
                      />
                      <div>
                        <p className="font-medium text-sp-bg1">{value.name}</p>
                        <p className="text-sm text-sp-bg1/60">
                          Base: ₹{value.basePrice.toLocaleString("en-IN")}
                        </p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Pages */}
              <div className="p-6 rounded-lg border border-sp-bg1/10 bg-sp-white/50">
                <h3 className="text-lg font-semibold text-sp-bg1 mb-4">
                  2. How many pages?
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {Object.keys(pagesPricing).map((num) => (
                    <button
                      key={num}
                      onClick={() =>
                        setCalculator({ ...calculator, pages: num })
                      }
                      className={`p-3 rounded-lg border-2 transition font-semibold ${
                        calculator.pages === num
                          ? "border-sp-bg1 bg-sp-bg1 text-white"
                          : "border-sp-bg1/10 bg-sp-white/50 text-sp-bg1 hover:border-sp-bg1"
                      }`}
                    >
                      {num} Pages
                    </button>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="p-6 rounded-lg border border-sp-bg1/10 bg-sp-white/50">
                <h3 className="text-lg font-semibold text-sp-bg1 mb-4">
                  3. Add features (optional)
                </h3>
                <div className="space-y-3">
                  {featuresList.map((feature) => (
                    <label
                      key={feature.id}
                      className="flex items-center gap-3 p-3 rounded-lg border border-sp-bg1/10 cursor-pointer hover:bg-sp-bg1/5 transition"
                    >
                      <input
                        type="checkbox"
                        checked={calculator.features.includes(feature.id)}
                        onChange={() => toggleFeature(feature.id)}
                        className="w-4 h-4"
                      />
                      <div className="flex-1">
                        <p className="font-medium text-sp-bg1">
                          {feature.name}
                        </p>
                        <p className="text-sm text-sp-bg1/60">
                          +₹{feature.price.toLocaleString("en-IN")}
                        </p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div className="p-6 rounded-lg border border-sp-bg1/10 bg-sp-white/50">
                <h3 className="text-lg font-semibold text-sp-bg1 mb-4">
                  4. What's your timeline?
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 p-3 rounded-lg border border-sp-bg1/10 cursor-pointer hover:bg-sp-bg1/5 transition">
                    <input
                      type="radio"
                      name="timeline"
                      value="1-month"
                      checked={calculator.timeline === "1-month"}
                      onChange={(e) =>
                        setCalculator({
                          ...calculator,
                          timeline: e.target.value,
                        })
                      }
                      className="w-4 h-4"
                    />
                    <div>
                      <p className="font-medium text-sp-bg1">Rush (1 month)</p>
                      <p className="text-sm text-sp-bg1/60">+30% cost</p>
                    </div>
                  </label>
                  <label className="flex items-center gap-3 p-3 rounded-lg border border-sp-bg1/10 cursor-pointer hover:bg-sp-bg1/5 transition">
                    <input
                      type="radio"
                      name="timeline"
                      value="2-3-months"
                      checked={calculator.timeline === "2-3-months"}
                      onChange={(e) =>
                        setCalculator({
                          ...calculator,
                          timeline: e.target.value,
                        })
                      }
                      className="w-4 h-4"
                    />
                    <p className="font-medium text-sp-bg1">Standard (2-3 months) — Recommended</p>
                  </label>
                  <label className="flex items-center gap-3 p-3 rounded-lg border border-sp-bg1/10 cursor-pointer hover:bg-sp-bg1/5 transition">
                    <input
                      type="radio"
                      name="timeline"
                      value="4-6-months"
                      checked={calculator.timeline === "4-6-months"}
                      onChange={(e) =>
                        setCalculator({
                          ...calculator,
                          timeline: e.target.value,
                        })
                      }
                      className="w-4 h-4"
                    />
                    <div>
                      <p className="font-medium text-sp-bg1">Flexible (4-6 months)</p>
                      <p className="text-sm text-sp-bg1/60">-10% discount</p>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Right: Cost Display */}
            <div className="flex flex-col">
              {/* Cost Box */}
              <div className="sticky top-20 p-8 rounded-lg border-2 border-sp-bg1 bg-sp-bg1 text-white">
                <h3 className="text-lg font-semibold mb-2">Estimated Cost</h3>
                <div className="text-5xl font-bold mb-4">
                  ₹{estimatedCost.toLocaleString("en-IN")}
                </div>
                <p className="text-sm opacity-90 mb-6">
                  *Final quote may vary based on specific requirements
                </p>

                <div className="space-y-4 mb-6 text-sm">
                  <div className="flex justify-between opacity-90">
                    <span>{projectTypes[calculator.projectType].name}</span>
                    <span>
                      ₹{projectTypes[calculator.projectType].basePrice.toLocaleString(
                        "en-IN"
                      )}
                    </span>
                  </div>
                  {calculator.pages !== "3" && (
                    <div className="flex justify-between opacity-90">
                      <span>{calculator.pages} Pages</span>
                      <span>
                        +₹
                        {(pagesPricing[calculator.pages] || 0).toLocaleString(
                          "en-IN"
                        )}
                      </span>
                    </div>
                  )}
                  {calculator.features.length > 0 && (
                    <div className="flex justify-between opacity-90">
                      <span>{calculator.features.length} Features</span>
                      <span>
                        +₹
                        {calculator.features
                          .reduce((sum, featureId) => {
                            const feature = featuresList.find(
                              (f) => f.id === featureId
                            );
                            return sum + (feature ? feature.price : 0);
                          }, 0)
                          .toLocaleString("en-IN")}
                      </span>
                    </div>
                  )}
                  {timelinePricing[calculator.timeline] !== 0 && (
                    <div className="flex justify-between opacity-90">
                      <span>Timeline Adjustment</span>
                      <span>
                        {timelinePricing[calculator.timeline] > 0 ? "+" : ""}₹
                        {timelinePricing[calculator.timeline].toLocaleString(
                          "en-IN"
                        )}
                      </span>
                    </div>
                  )}
                </div>

                {!showForm ? (
                  <button
                    onClick={() => setShowForm(true)}
                    className="w-full bg-white text-sp-bg1 font-semibold py-3 rounded-lg hover:bg-sp-white/90 transition"
                  >
                    Get Exact Quote
                  </button>
                ) : null}
              </div>

              {/* Quote Form */}
              {showForm && !submitted && (
                <div className="mt-6 p-6 rounded-lg border border-sp-bg1/10 bg-sp-white/50">
                  <h3 className="text-lg font-semibold text-sp-bg1 mb-4">
                    Get Your Exact Quote
                  </h3>
                  <form onSubmit={handleGetQuote} className="space-y-4">
                    <InputField
                      label="Your Name *"
                      value={formData.name}
                      onChange={(e) => handleFormChange(e, "name")}
                      error={formErrors.name}
                      placeholder="John Doe"
                      classes="w-full"
                    />
                    <InputField
                      label="Email Address *"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleFormChange(e, "email")}
                      error={formErrors.email}
                      placeholder="john@example.com"
                      classes="w-full"
                    />
                    <Button
                      title="Send Quote"
                      onClick={handleGetQuote}
                      className="w-full bg-sp-bg1 text-white py-2 rounded-lg font-semibold hover:bg-sp-bg1/90 transition"
                    />
                  </form>
                </div>
              )}

              {submitted && (
                <div className="mt-6 p-6 rounded-lg border border-green-200 bg-green-50">
                  <div className="text-3xl mb-2">✓</div>
                  <h3 className="font-semibold text-green-900 mb-1">
                    Quote Sent!
                  </h3>
                  <p className="text-sm text-green-800">
                    Check your email for the detailed quote.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CostCalculator;
