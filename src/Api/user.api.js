import { Axios } from "../Content/MainContent";

const userApi = "/user";

// ─── Airtable Config ───────────────────────────────────
const AIRTABLE_BASE_ID = "app2qIATyfHdmkduN";
const AIRTABLE_TABLE_ID = "tbl0AIQWpoQtuShcj";
const AIRTABLE_API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY;

// Service label mapper
const serviceLabels = {
  "UI-UX-DESIGN": "UI/UX Designing",
  "BRANDING-DESIGN-SYSTEM": "Branding & Design System",
  "AI-AUTOMATION": "AI & Automation",
  "DEVELOPMENT-WEB-MOBILE": "Development (Web/Mobile)",
  "CONSULTING": "Consulting",
  "OTHER": "Other",
};

// ─── Send to Airtable ──────────────────────────────────
async function sendToAirtable(payload) {
  try {
    const response = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                fldl4jhCcF4sDXYpW: payload.firstname || "",
                fldCqKkKING2WKYLh: payload.lastname || "",
                fldylYuKVRB8KEaAU: payload.email || "",
                fldvcwN2hQyYWT7Us: serviceLabels[payload.service] || payload.service || "",
                fldmxq8l4dOO4ELFD: payload.projectDescription || "",
                fldyMCZ4V7aikhu5U: "Website Contact Form",
              },
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      const err = await response.json();
      console.error("Airtable error:", err);
    } else {
      console.log("✅ Airtable record created!");
    }
  } catch (error) {
    console.error("Airtable submission error:", error);
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

export async function submitContactForm(payload) {
  try {
    // Send to your backend
    const response = await Axios.post(`${userApi}/submit-contact`, payload);

    // Also send to Airtable (runs in background, won't break form if it fails)
    sendToAirtable(payload);

    return response?.data;
  } catch (error) {
    console.error("Contact form submission error:", error);

    // Even if backend fails, try Airtable
    sendToAirtable(payload);

    return error?.response?.data || error;
  }
}