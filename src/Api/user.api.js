import { Axios } from "../Content/MainContent";

const userApi = "/user";

// ─── Google Sheets Config ───────────────────────────────────
const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxzAn0fqBGIV0tNnvXJJcy3XGwNKheyJ9lh59cIryd2pkocByaxA2_UtL_HOlmy1eTM/exec";

// Sheet names (must match exact tab names in Google Sheet)
const SHEET_NAMES = {
  CONTACT_FORM: "Contact form",
  FREE_AUDIT: "Free Audit",
  COST_CALCULATOR: "cost calculator",
  NEWSLETTER: "newsletter",
};

// Service label mapper
const serviceLabels = {
  "UI-UX-DESIGN": "UI/UX Designing",
  "BRANDING-DESIGN-SYSTEM": "Branding & Design System",
  "AI-AUTOMATION": "AI & Automation",
  "DEVELOPMENT-WEB-MOBILE": "Development (Web/Mobile)",
  "CONSULTING": "Consulting",
  "OTHER": "Other",
};

// ─── Generic Google Sheets Submission Function ──────────────────────
async function sendToGoogleSheets(sheetName, fields) {
  try {
    console.log("📤 Submitting form data to Google Sheets...", { sheetName, fields });

    // NOTE: Do NOT set Content-Type to "application/json" here.
    // That triggers a CORS preflight (OPTIONS) request which Google Apps Script
    // cannot handle. Sending as text/plain keeps it a "simple request" — no preflight.
    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify({
        sheetName,
        fields,
      }),
    });

    // Google Apps Script may redirect (302); fetch follows it automatically.
    // Try to parse the JSON response.
    let data;
    try {
      data = await response.json();
    } catch (parseError) {
      // If response can't be parsed (e.g., opaque redirect), treat as success
      // since the request was sent successfully
      console.log("✅ Form data sent to Google Sheets (response not readable — likely CORS redirect)");
      return { success: true, message: "Form submitted successfully" };
    }

    if (!data.success) {
      console.error("❌ Form submission failed:", data);
      const errorMessage = data.error || "Failed to submit form";
      const error = new Error(errorMessage);
      error.details = data;
      throw error;
    }

    console.log("✅ Form submitted successfully to Google Sheets!", data);
    return data;
  } catch (error) {
    console.error("❌ Form submission error:", error.message || error);
    throw error;
  }
}

// ─── Existing API Functions ────────────────────────────
export async function registerUser(payload) {
  try {
    const response = await Axios.post(`${userApi}/register`, payload);
    return response?.data;
  } catch (error) {
    console.error("Registration error:", error);
    return error?.response?.data || error;
  }
}

export async function login(payload) {
  try {
    const response = await Axios.post(`/login`, payload);
    return response?.data;
  } catch (error) {
    console.error("Login error:", error);
    return error?.response?.data || error;
  }
}

export async function userProfile() {
  try {
    const response = await Axios.get(`${userApi}/profile`);
    return response?.data;
  } catch (error) {
    console.error("User profile error:", error);
    return error?.response?.data || error;
  }
}

// ─── Contact Form Submission ──────────────────────────
export async function submitContactForm(payload) {
  try {
    // Map payload to Google Sheets fields
    const fields = {
      Name: payload.name,
      Email: payload.email,
      Service: payload.service,
      Message: payload.message,
      "Lead Source": payload.leadSource || "Contact Form",
    };

    // Send to Google Sheets
    const response = await sendToGoogleSheets(
      SHEET_NAMES.CONTACT_FORM,
      fields
    );

    console.log("✅ Contact form submitted to Google Sheets:", response);
    return response;
  } catch (error) {
    console.error("Contact form submission error:", error);
    throw error;
  }
}

// ─── Free Website Audit Submission ──────────────────────
export async function submitFreeAuditForm(payload) {
  try {
    // Map payload to Google Sheets fields
    const fields = {
      Name: payload.name,
      Email: payload.email,
      "Website URL": payload.websiteUrl,
      "Business Type": payload.businessType,
      "Focus Area": payload.focusArea,
      Status: "Pending Review",
    };

    // Send to Google Sheets
    const response = await sendToGoogleSheets(
      SHEET_NAMES.FREE_AUDIT,
      fields
    );

    console.log("✅ Free audit form submitted to Google Sheets:", response);
    return response;
  } catch (error) {
    console.error("Free audit form submission error:", error);
    throw error;
  }
}

// ─── Cost Calculator Submission ──────────────────────
export async function submitCostCalculatorForm(payload) {
  try {
    // Map payload to Google Sheets fields
    const fields = {
      Name: payload.name,
      Email: payload.email,
      "Project Type": payload.projectType,
      Budget: payload.budget,
      Timeline: payload.timeline,
      "Project Description": payload.projectDescription,
      Status: "Quote Generated",
    };

    // Send to Google Sheets
    const response = await sendToGoogleSheets(
      SHEET_NAMES.COST_CALCULATOR,
      fields
    );

    console.log("✅ Cost calculator form submitted to Google Sheets:", response);
    return response;
  } catch (error) {
    console.error("Cost calculator form submission error:", error);
    throw error;
  }
}

// ─── Newsletter Subscription ──────────────────────
export async function submitNewsletterForm(payload) {
  try {
    // Map payload to Google Sheets fields
    const fields = {
      Name: payload.name || "Subscriber",
      Email: payload.email,
      "Subscription Status": "Active",
    };

    // Send to Google Sheets
    const response = await sendToGoogleSheets(
      SHEET_NAMES.NEWSLETTER,
      fields
    );

    console.log("✅ Newsletter subscription submitted to Google Sheets:", response);
    return response;
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    throw error;
  }
}