import { r as reactExports, V as jsxRuntimeExports } from "./server-Bjg38tM-.js";
import { L as Layout } from "./Layout-CT5J1bmC.js";
import { A as API_CONFIG } from "./api-CAf8QtR2.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-zrmSQy5x.js";
function Login() {
  const [username, setUsername] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [error, setError] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (localStorage.getItem("iqnaax_token")) {
      window.location.href = "/admin";
    }
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    const trimmedUsername = username.trim();
    if (!trimmedUsername || !password) {
      setError("Username and password are required.");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}/api/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: trimmedUsername,
          password
        })
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data?.error || "Invalid login credentials.");
        return;
      }
      if (!data.success) {
        setError(data?.error || "Invalid login credentials.");
        return;
      }
      localStorage.setItem("iqnaax_token", data.token);
      localStorage.setItem("iqnaax_admin_username", data.admin?.username ?? trimmedUsername);
      if (data.admin?.role) {
        localStorage.setItem("iqnaax_admin_role", data.admin.role);
      }
      window.location.href = "/admin";
    } catch (fetchError) {
      setError(fetchError instanceof Error ? fetchError.message : "Unable to login at this time. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "pt-40 pb-16 container mx-auto px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm uppercase tracking-widest text-primary font-medium", children: "Admin" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-3 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-full leading-[1.05] lg:whitespace-nowrap", children: [
        "Sign in to your ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic font-light whitespace-nowrap", children: "IQNAAX admin panel." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mx-auto px-6 pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-xl mx-auto p-8 md:p-10 rounded-3xl border border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "space-y-6", onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Username" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: username, onChange: (event) => setUsername(event.target.value), required: true, className: "mt-2 w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-primary", placeholder: "admin" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Password" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", value: password, onChange: (event) => setPassword(event.target.value), required: true, className: "mt-2 w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-primary", placeholder: "Enter your password" })
      ] }),
      error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-destructive", children: error }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: loading, className: "w-full px-6 py-4 rounded-full bg-foreground text-background font-medium hover:bg-primary transition-all disabled:opacity-60", children: loading ? "Signing in…" : "Sign in" })
    ] }) }) })
  ] });
}
export {
  Login as component
};
