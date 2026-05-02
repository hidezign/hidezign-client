import { Axios } from "../Content/MainContent";

const userApi = "/user";

// ─── Airtable Config ───────────────────────────────────
const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID || "app2qIATyfHdmkduN";
const AIRTABLE_API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY;

// Table IDs
const AIRTABLE_TABLES = {
  CONTACT_FORM: "tblT9IhK5wz3idpeu",
  FREE_AUDIT: "tblWgh1XpZKF1CSFQ",
  COST_CALCULATOR: "tblvBVQsgjXXeZR6W",
  NEWSLETTER: "tblfNXP6mdpbnylEu",
};

// Field mappings for each table
const FIELD_MAPPINGS = {
  CONTACT_FORM: {
    name: "fldCywjMl5uW5bT4D",
    email: "fld8aPCwTOoaj16Ry",
    service: "fldrASgbQwWPKEV7m",
    message: "fldSW3o9JfXqX937y",
    leadSource: "fldniUjxrFyabbZ33",
  },
  FREE_AUDIT: {
    name: "fldS2PffYxV2GWQI2",
    email: "fldXB3etyciRIURvL",
    websiteUrl: "fld2SpFMsgr5i01b4",
    businessType: "fldXPM1jF0DOZW7wT",
    focusArea: "fldm5hK0ADwkhBnaP",
    status: "fldEZxzTelwHRElZI",
  },
  COST_CALCULATOR: {
    name: "fld1DzEPqlvSWqZLr",
    email: "fldcFsMn5l4TGYQpg",
    projectType: "fld0NscOpFlPfpy0t",
    budget: "flda4NnTLOVAlMdpz",
    timeline: "fldjBbANbaFsMmBeC",
    projectDescription: "fldfeeuo6irIFMNIE",
    costEstimationStatus: "fld3u753sBhMOZa13",
  },
  NEWSLETTER: {
    name: "fldlJ63sqzV7t4kYh",
    email: "fldyi63Y5XgIw2l5z",
    optInDate: "fldxBEy5JAWW0J5IK",
    subscriptionStatus: "fld1hwZW2l4tzuCCE",
  },
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

// ─── Generic Airtable Submission Function ──────────────────────
// Routes through Vercel serverless function to avoid CORS issues
async function sendToAirtable(tableId, fields) {
  try {
    console.log("📤 Submitting form data...", { tableId, fields });

    // Call the Vercel API route instead of Airtable directly
    const response = await fetch("/api/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tableId,
        fields,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("❌ Form submission failed:", data);
      const errorMessage = data.error || "Failed to submit form";
      const error = new Error(errorMessage);
      error.details = data;
      throw error;
    }

    console.log("✅ Form submitted successfully!", data);
    return data.data;
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
    // Map payload to Airtable fields
    const airtableFields = {
      [FIELD_MAPPINGS.CONTACT_FORM.name]: payload.name,
      [FIELD_MAPPINGS.CONTACT_FORM.email]: payload.email,
      [FIELD_MAPPINGS.CONTACT_FORM.service]: payload.service,
      [FIELD_MAPPINGS.CONTACT_FORM.message]: payload.message,
      [FIELD_MAPPINGS.CONTACT_FORM.leadSource]: payload.leadSource || "Contact Form",
    };

    // Send to Airtable
    const airtableResponse = await sendToAirtable(
      AIRTABLE_TABLES.CONTACT_FORM,
      airtableFields
    );

    console.log("✅ Contact form submitted to Airtable:", airtableResponse);
    return airtableResponse;
  } catch (error) {
    console.error("Contact form submission error:", error);
    throw error;
  }
}

// ─── Free Website Audit Submission ──────────────────────
export async function submitFreeAuditForm(payload) {
  try {
    // Map payload to Airtable fields
    const airtableFields = {
      [FIELD_MAPPINGS.FREE_AUDIT.name]: payload.name,
      [FIELD_MAPPINGS.FREE_AUDIT.email]: payload.email,
      [FIELD_MAPPINGS.FREE_AUDIT.websiteUrl]: payload.websiteUrl,
      [FIELD_MAPPINGS.FREE_AUDIT.businessType]: payload.businessType,
      [FIELD_MAPPINGS.FREE_AUDIT.focusArea]: payload.focusArea,
      [FIELD_MAPPINGS.FREE_AUDIT.status]: "Pending Review",
    };

    // Send to Airtable
    const airtableResponse = await sendToAirtable(
      AIRTABLE_TABLES.FREE_AUDIT,
      airtableFields
    );

    console.log("✅ Free audit form submitted to Airtable:", airtableResponse);
    return airtableResponse;
  } catch (error) {
    console.error("Free audit form submission error:", error);
    throw error;
  }
}

// ─── Cost Calculator Submission ──────────────────────
export async function submitCostCalculatorForm(payload) {
  try {
    // Map payload to Airtable fields
    const airtableFields = {
      [FIELD_MAPPINGS.COST_CALCULATOR.name]: payload.name,
      [FIELD_MAPPINGS.COST_CALCULATOR.email]: payload.email,
      [FIELD_MAPPINGS.COST_CALCULATOR.projectType]: payload.projectType,
      [FIELD_MAPPINGS.COST_CALCULATOR.budget]: payload.budget,
      [FIELD_MAPPINGS.COST_CALCULATOR.timeline]: payload.timeline,
      [FIELD_MAPPINGS.COST_CALCULATOR.projectDescription]: payload.projectDescription,
      [FIELD_MAPPINGS.COST_CALCULATOR.costEstimationStatus]: "Quote Generated",
    };

    // Send to Airtable
    const airtableResponse = await sendToAirtable(
      AIRTABLE_TABLES.COST_CALCULATOR,
      airtableFields
    );

    console.log("✅ Cost calculator form submitted to Airtable:", airtableResponse);
    return airtableResponse;
  } catch (error) {
    console.error("Cost calculator form submission error:", error);
    throw error;
  }
}

// ─── Newsletter Subscription ──────────────────────
export async function submitNewsletterForm(payload) {
  try {
    // Map payload to Airtable fields
    const airtableFields = {
      [FIELD_MAPPINGS.NEWSLETTER.name]: payload.name || "Subscriber",
      [FIELD_MAPPINGS.NEWSLETTER.email]: payload.email,
      [FIELD_MAPPINGS.NEWSLETTER.optInDate]: new Date().toISOString(),
      [FIELD_MAPPINGS.NEWSLETTER.subscriptionStatus]: "Active",
    };

    // Send to Airtable
    const airtableResponse = await sendToAirtable(
      AIRTABLE_TABLES.NEWSLETTER,
      airtableFields
    );

    console.log("✅ Newsletter subscription submitted to Airtable:", airtableResponse);
    return airtableResponse;
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    throw error;
  }
}