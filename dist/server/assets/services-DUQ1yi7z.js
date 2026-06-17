import { V as jsxRuntimeExports } from "./server-Bjg38tM-.js";
import { a as airLab, L as Link } from "./router-zrmSQy5x.js";
import { c as createLucideIcon, L as Layout, A as ArrowRight } from "./Layout-CT5J1bmC.js";
import { B as Bot, G as GraduationCap } from "./graduation-cap-Dj24X5cd.js";
import { C as Cpu } from "./cpu-C5d0HTcX.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$2 = [
  [
    "path",
    {
      d: "M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z",
      key: "12oyoe"
    }
  ],
  ["path", { d: "M21 16v2a4 4 0 0 1-4 4h-5", key: "1x7m43" }]
];
const Headset = createLucideIcon("headset", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2", key: "wrbu53" }],
  ["path", { d: "M15 18H9", key: "1lyqi6" }],
  [
    "path",
    {
      d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
      key: "lysw3i"
    }
  ],
  ["circle", { cx: "17", cy: "18", r: "2", key: "332jqn" }],
  ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }]
];
const Truck = createLucideIcon("truck", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",
      key: "1ngwbx"
    }
  ]
];
const Wrench = createLucideIcon("wrench", __iconNode);
const customHardware = "/assets/custom-hardware-Bodz6ypE.jpg";
const arVr = "/assets/ar-vr-CBqlX8AA.jpg";
const lms = "/assets/lms-ugk9xLhw.jpg";
const nextGen = "/assets/next-gen-TSsarx8K.jpg";
const delivery = "/assets/delivery-CF9s2SR6.jpg";
const services = [{
  icon: Bot,
  title: "AIR-Lab Robots",
  image: airLab,
  summary: "End-to-end AI & Robotics lab packages — humanoids, cobots, quadrupeds and mobile platforms, fully tested in our in-house AIR Lab before shipping to your campus.",
  points: ["Curriculum-aligned robot kits (K-12, Engineering, Research)", "Humanoids, cobots, quadrupeds, mobile manipulators", "Pre-loaded SDKs, ROS / ROS2 ready", "Hands-on training & faculty onboarding"]
}, {
  icon: Wrench,
  title: "Customized Hardware Solutions",
  image: customHardware,
  summary: "Bespoke robotics hardware — from sensor stacks to custom end-effectors and integrated mobile manipulators — engineered to your application and budget.",
  points: ["Custom end-effectors, grippers & sensor mounts", "Embedded control boards & PCB design", "Mobile base + arm integration", "Prototyping and small-batch manufacturing"]
}, {
  icon: Headset,
  title: "AR/VR Content Solutions",
  image: arVr,
  summary: "Immersive learning content for robotics & STEM — virtual labs, AR product manuals, and VR simulators that pair perfectly with our hardware.",
  points: ["VR robotics simulators (URDF / digital twin)", "AR step-by-step assembly & maintenance", "Custom interactive 3D content", "Headset-ready (Meta Quest, Pico, HTC)"]
}, {
  icon: GraduationCap,
  title: "LMS Provider",
  image: lms,
  summary: "A modern Learning Management System purpose-built for AI & robotics programs — courses, assessments, lab analytics, and gamified progress tracking.",
  points: ["Pre-built robotics & AI courseware", "Live lab session tracking & analytics", "SSO, SCORM and institutional integrations", "Teacher dashboards & student gradebooks"]
}, {
  icon: Cpu,
  title: "Next-Gen Robotics Provider",
  image: nextGen,
  summary: "Authorized wholesale distribution of next-generation humanoids, cobots and quadrupeds from world-leading brands — Elephant Robotics, Unitree, AgileX, Deep Robotics and more.",
  points: ["Bulk distributor pricing for partners", "OEM & ODM tie-ups", "Warranty & spare-part support", "Single-window procurement"]
}, {
  icon: Truck,
  title: "Delivery & Service Robots",
  image: delivery,
  summary: "Autonomous delivery, hospitality and inspection robots for hotels, hospitals, campuses and warehouses — deployed, integrated and supported by IQNAAX.",
  points: ["Indoor delivery & hospitality robots", "AMRs for warehouse intralogistics", "Site survey, deployment & SLA support", "Fleet management & analytics"]
}];
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "pt-40 pb-16 container mx-auto px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm uppercase tracking-widest text-primary font-medium", children: "Services" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-3 font-display text-5xl md:text-7xl font-bold tracking-tight max-w-4xl", children: [
        "Complete robotics services, ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic font-light", children: "end to end." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground max-w-2xl", children: "From hardware and labs to AR/VR content and learning platforms — IQNAAX delivers everything institutions and enterprises need to launch their robotics programs." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mx-auto px-6 pb-32 space-y-32", children: services.map((s, i) => {
      const reverse = i % 2 === 1;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `grid lg:grid-cols-2 gap-10 lg:gap-16 items-center animate-fade-up ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-[4/3] rounded-3xl overflow-hidden border border-border relative group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: s.image, alt: s.title, loading: "lazy", className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-primary/0 border border-primary/20 flex items-center justify-center text-primary mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs uppercase tracking-widest text-primary-glow font-medium", children: [
            "Service ",
            String(i + 1).padStart(2, "0")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 font-display text-3xl md:text-5xl font-bold tracking-tight", children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground leading-relaxed text-lg", children: s.summary }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3", children: s.points.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/80", children: p })
          ] }, p)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary-glow hover:text-primary transition-colors", children: [
            "Talk to our team ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
          ] })
        ] })
      ] }, s.title);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mx-auto px-6 pb-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground p-12 md:p-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-6xl font-bold tracking-tight leading-tight", children: "Let's design your robotics stack." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-primary-foreground/80 leading-relaxed", children: "Tell us about your campus, factory, or fleet — we'll architect the right mix of hardware, content and software." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "mt-10 inline-flex items-center gap-2 px-7 py-4 rounded-full bg-background text-foreground font-medium hover:scale-105 transition-transform", children: [
          "Request a consultation ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-32 -bottom-32 w-[500px] h-[500px] rounded-full bg-white/10 blur-3xl" })
    ] }) })
  ] });
}
export {
  ServicesPage as component
};
