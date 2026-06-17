import { V as jsxRuntimeExports } from "./server-Bjg38tM-.js";
import { L as Link } from "./router-zrmSQy5x.js";
import { L as Layout } from "./Layout-CT5J1bmC.js";
import { C as Check } from "./check-CNOCCMJb.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const cobot = "/assets/robot-cobot-CM3lw5iW.jpg";
const packages = [{
  name: "AIR-LabRobots",
  audience: "Flagship AI & Robotics",
  items: ["Humanoid + dual-arm cobot stations", "Quadruped robot fleet", "AI vision + edge-compute kits", "Custom curriculum & teacher training", "On-site commissioning"]
}, {
  name: "Foundation Lab",
  audience: "Schools (K–12)",
  items: ["6× Kebbi Air social robots", "4× myCobot 280 with vision kit", "2× FDM 3D printers", "Curriculum + teacher training", "1-year on-site support"]
}, {
  name: "Innovation Lab",
  audience: "Colleges & Polytechnics",
  items: ["8× myCobot dual-arm workstations", "2× Unitree quadrupeds", "Multi-tool 3D fabrication suite", "Vision + IoT development boards", "Project-based syllabus"],
  featured: true
}, {
  name: "Research Lab",
  audience: "Universities & R&D",
  items: ["Full-size humanoid platform", "Industrial dual-extruder printers", "Open-SDK quadruped fleet", "Custom integration & APIs", "Dedicated solutions architect"]
}, {
  name: "Nvidia Isaac Sim Lab",
  audience: "Simulation & AI Research",
  items: ["Nvidia Isaac Sim workstations", "RTX-class GPU compute nodes", "Omniverse collaboration setup", "Synthetic data generation pipeline", "Sim-to-real workflow training"]
}];
function LabSetup() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-40 pb-20 container mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm uppercase tracking-widest text-primary font-medium", children: "Lab Setup" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-3 font-display text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]", children: [
          "Turnkey labs, ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic font-light", children: "tailored" }),
          " to your curriculum."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl", children: "We design, supply and commission complete AI & Robotics labs — from floorplan and furniture to robots, software and teacher training. One partner. One invoice. Zero compromise." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "mt-10 inline-flex items-center gap-2 px-7 py-4 rounded-full bg-foreground text-background font-medium hover:bg-primary transition-all", children: "Plan your lab" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-[4/3] rounded-3xl overflow-hidden border border-border bg-card relative group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { src: "https://realsee.ai/ByNN97w7", title: "IQNAAX Roboti VR Lab Tour", className: "w-full h-full", allow: "fullscreen; xr-spatial-tracking; gyroscope; accelerometer; vr", allowFullScreen: true, loading: "lazy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 left-4 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur text-xs font-medium border border-border pointer-events-none", children: "Live VR Tour · Roboti Lab" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-6 py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl font-bold tracking-tight max-w-3xl", children: "Lab packages, fully customizable." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-4 max-w-xl", children: "Start with a baseline and we'll re-spec every component to your space, students and goals." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6 mt-16 items-stretch", children: packages.map((pkg) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 rounded-2xl border hover-lift bg-card border-border flex flex-col h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-grow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-primary", children: pkg.audience }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold mt-2", children: pkg.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3", children: pkg.items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 mt-0.5 shrink-0 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: it })
          ] }, it)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "mt-8 inline-flex w-full items-center justify-center px-5 py-3 rounded-full text-sm font-medium transition-all bg-foreground text-background hover:bg-primary", children: "Customize this lab" })
      ] }, pkg.name)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 border-y border-border bg-card/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] rounded-3xl overflow-hidden media-contain border border-border order-2 md:order-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: cobot, alt: "Cobot workstation", className: "w-full h-full" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "order-1 md:order-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm uppercase tracking-widest text-primary-glow font-medium", children: "Process" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight", children: "From blueprint to first class — in weeks." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "mt-10 space-y-6", children: [["01", "Discovery", "We map curriculum goals, student count, and space."], ["02", "Design", "You receive a 3D layout, BOM and project timeline."], ["03", "Deploy", "We ship, install, integrate, train teachers, hand over."], ["04", "Support", "Annual maintenance, updates, and curriculum refreshes."]].map(([n, t, d]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl text-primary-glow shrink-0", children: n }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: t }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-sm mt-1", children: d })
          ] })
        ] }, n)) })
      ] })
    ] }) })
  ] });
}
export {
  LabSetup as component
};
