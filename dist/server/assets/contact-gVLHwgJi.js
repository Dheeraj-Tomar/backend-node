import { r as reactExports, V as jsxRuntimeExports } from "./server-Bjg38tM-.js";
import { c as createLucideIcon, L as Layout, M as Mail } from "./Layout-CT5J1bmC.js";
import { a as apiCall, A as API_CONFIG } from "./api-CAf8QtR2.js";
import { C as Check } from "./check-CNOCCMJb.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-zrmSQy5x.js";
const __iconNode$2 = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]];
const LoaderCircle = createLucideIcon("loader-circle", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode);
function Contact() {
  const [step, setStep] = reactExports.useState("form");
  const [formValues, setFormValues] = reactExports.useState({
    name: "",
    org: "",
    email: "",
    phone: "",
    type: "Wholesale order"
  });
  const [otp, setOtp] = reactExports.useState("");
  const [error, setError] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(false);
  const [successMessage, setSuccessMessage] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const verifiedEmail = localStorage.getItem("iqnaax_verified_email");
    if (verifiedEmail && verifiedEmail === formValues.email) {
      setSuccessMessage("Email verified successfully.");
    }
  }, [formValues.email]);
  const handleRequestOtp = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);
    const emailValue = formValues.email.trim();
    if (!/^\S+@\S+\.\S+$/.test(emailValue)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!formValues.name.trim()) {
      setError("Name is required.");
      return;
    }
    if (!formValues.phone.trim()) {
      setError("Phone is required.");
      return;
    }
    setLoading(true);
    try {
      await apiCall(`${API_CONFIG.ENDPOINTS.CONTACT}/send-otp`, {
        method: "POST",
        body: JSON.stringify({
          email: emailValue
        })
      });
      setStep("otp");
      setSuccessMessage("OTP sent to your email.");
    } catch (fetchError) {
      setError(fetchError instanceof Error ? fetchError.message : "Unable to send OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const handleVerify = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);
    setStep("verifying");
    setLoading(true);
    const verifyPayload = {
      email: formValues.email.trim(),
      otp: otp.trim()
    };
    console.log("VERIFY EMAIL:", verifyPayload.email);
    console.log("VERIFY OTP:", verifyPayload.otp);
    console.log("VERIFY PAYLOAD:", verifyPayload);
    try {
      const verifyResponse = await apiCall(`${API_CONFIG.ENDPOINTS.CONTACT}/verify-otp`, {
        method: "POST",
        body: JSON.stringify(verifyPayload)
      });
      console.log("VERIFY RESPONSE:", verifyResponse);
      setError(null);
      await apiCall(API_CONFIG.ENDPOINTS.CONTACT, {
        method: "POST",
        body: JSON.stringify({
          name: formValues.name.trim(),
          email: formValues.email.trim(),
          phone: formValues.phone.trim(),
          organization: formValues.org.trim(),
          inquiry_type: formValues.type,
          message: `Inquiry type: ${formValues.type}; Organization: ${formValues.org.trim() || "N/A"}`
        })
      });
      localStorage.setItem("iqnaax_verified_email", formValues.email.trim());
      setSuccessMessage("Email verified successfully.");
      setStep("done");
    } catch (fetchError) {
      setSuccessMessage(null);
      setError(fetchError instanceof Error ? fetchError.message : "Unable to verify OTP or send inquiry. Please try again.");
      setStep("otp");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "pt-40 pb-16 container mx-auto px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm uppercase tracking-widest text-primary font-medium", children: "Contact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-3 font-display text-5xl md:text-7xl font-bold tracking-tight max-w-3xl leading-[1.05]", children: [
        "Let's build something ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic font-light", children: "intelligent." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-6 pb-24 grid lg:grid-cols-5 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2 space-y-8", children: [{
        icon: Mail,
        label: "Email",
        value: "sales@iqnaax.com"
      }, {
        icon: Phone,
        label: "Phone",
        value: "+91 00000 00000"
      }, {
        icon: MapPin,
        label: "Address",
        value: "AIR Lab, India"
      }].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "w-5 h-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: c.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-medium mt-1", children: c.value })
        ] })
      ] }, c.label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-3 p-8 md:p-10 rounded-3xl border border-border bg-card", children: [
        step === "form" && /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "space-y-5", onSubmit: handleRequestOtp, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Name", name: "name", required: true, value: formValues.name, onChange: (e) => setFormValues((prev) => ({
              ...prev,
              name: e.target.value
            })) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Organization", name: "org", value: formValues.org, onChange: (e) => setFormValues((prev) => ({
              ...prev,
              org: e.target.value
            })) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", name: "email", type: "email", required: true, value: formValues.email, onChange: (e) => setFormValues((prev) => ({
              ...prev,
              email: e.target.value
            })) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", name: "phone", type: "tel", required: true, value: formValues.phone, onChange: (e) => setFormValues((prev) => ({
              ...prev,
              phone: e.target.value
            })) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Inquiry" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { name: "type", value: formValues.type, onChange: (e) => setFormValues((prev) => ({
              ...prev,
              type: e.target.value
            })), className: "mt-2 w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-primary", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Wholesale order" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Lab setup consultation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Partnership" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Other" })
            ] })
          ] }),
          error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-destructive", children: error }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: loading, className: "w-full px-6 py-4 rounded-full bg-foreground text-background font-medium hover:bg-primary transition-all disabled:opacity-60", children: loading ? "Sending OTP…" : "Send OTP to email" })
        ] }),
        (step === "otp" || step === "verifying") && /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "space-y-5", onSubmit: handleVerify, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-semibold", children: "Verify your email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-2", children: [
              "We've sent a 6-digit OTP to ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: formValues.email }),
              ". Enter it below to confirm your inquiry."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "One-Time Password" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { inputMode: "numeric", pattern: "[0-9]*", maxLength: 6, value: otp, onChange: (e) => setOtp(e.target.value.replace(/\D/g, "")), required: true, className: "mt-2 w-full px-4 py-3 rounded-lg border border-border bg-background tracking-[0.5em] text-center text-xl font-display focus:outline-none focus:border-primary", placeholder: "••••••" })
          ] }),
          error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-destructive", children: error }),
          successMessage && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground", children: successMessage }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => {
              setStep("form");
              setOtp("");
              setError(null);
              setSuccessMessage(null);
            }, className: "px-6 py-3 rounded-full border border-border text-sm font-medium hover:bg-card transition-all", children: "Back" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: step === "verifying" || otp.length !== 6 || loading, className: "flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:bg-primary transition-all disabled:opacity-60", children: step === "verifying" || loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }),
              " Verifying…"
            ] }) : "Verify & submit" })
          ] })
        ] }),
        step === "done" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 mx-auto rounded-full bg-primary/15 border border-primary/30 text-primary flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-8 h-8" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 font-display text-2xl font-semibold", children: "Message verified & sent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-muted-foreground max-w-sm mx-auto", children: [
            "Thanks — our team will reach out to ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: formValues.email }),
            " within one business day."
          ] })
        ] })
      ] })
    ] })
  ] });
}
function Field({
  label,
  name,
  type = "text",
  required,
  value,
  onChange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name, type, required, value, onChange, className: "mt-2 w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-primary" })
  ] });
}
export {
  Contact as component
};
