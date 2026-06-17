import { V as jsxRuntimeExports } from "./server-Bjg38tM-.js";
import { L as Link } from "./router-zrmSQy5x.js";
import { c as createLucideIcon, L as Layout, A as ArrowRight } from "./Layout-CT5J1bmC.js";
import { C as Cpu } from "./cpu-C5d0HTcX.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$2 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
];
const Globe = createLucideIcon("globe", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const ShieldCheck = createLucideIcon("shield-check", __iconNode$1);
const __iconNode = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const Users = createLucideIcon("users", __iconNode);
const labOverview = "/assets/lab-overview-BVHMLABh.jpg";
const aboutTeam = "/assets/about-team-aktfi07w.jpg";
const aboutMission = "/assets/about-mission-SLm3Gx95.jpg";
const aboutClassroom = "/assets/about-classroom-BAGb1lD4.jpg";
const values = [{
  icon: Cpu,
  title: "Vetted in our AIR lab",
  body: "Every robot in our catalog is unboxed, tested and documented by our own engineers before it ever ships."
}, {
  icon: Users,
  title: "Built for educators",
  body: "We co-design curriculum and teacher training with our institutional partners — so the hardware is actually used."
}, {
  icon: Globe,
  title: "Global supply, local support",
  body: "Direct relationships with OEMs across Asia, Europe and the US — backed by an India-based service team."
}, {
  icon: ShieldCheck,
  title: "Distributor pricing & warranty",
  body: "Authorized wholesale margins, OEM warranty pass-through and AMC contracts on every unit we ship."
}];
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-40 pb-20 container mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-12 items-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm uppercase tracking-widest text-primary font-medium", children: "About IQNAAX" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-4 font-display text-5xl md:text-7xl font-bold tracking-tight leading-[1.02]", children: [
          "We put intelligent ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic font-light text-gradient", children: "machines" }),
          " into the hands that need them."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground leading-relaxed", children: "IQNAAX is a wholesale distributor of next-generation robotics and a builder of institutional AI & Robotics labs. We bridge the gap between the world's most advanced robot manufacturers and the integrators, enterprises and educators shaping the next decade of automation." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:bg-primary transition-all", children: [
          "Talk to our team ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mx-auto px-6 pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto aspect-[16/9] rounded-3xl overflow-hidden border border-border shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: labOverview, alt: "IQNAAX AI & Robotics Lab", className: "w-full h-full object-cover", loading: "lazy" }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mx-auto px-6 pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/5] rounded-3xl overflow-hidden border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: aboutMission, alt: "Robotic arm in IQNAAX showroom", className: "w-full h-full object-cover", loading: "lazy" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm uppercase tracking-widest text-primary-glow font-medium", children: "Our Mission" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight leading-tight", children: [
          "Make advanced robotics ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic font-light", children: "accessible" }),
          " — at scale."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 space-y-5 text-muted-foreground leading-relaxed text-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We started IQNAAX with one belief: the next generation of engineers, doctors, logistics teams and innovators will need real, working robots — not slide decks." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "As an authorized wholesale distributor, we move premium humanoids, cobots, quadrupeds, mobile manipulators and 3D fabrication systems from world-class OEMs into Indian enterprises and institutions — with distributor pricing, full warranty and dedicated post-sales support." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "And as a turnkey lab builder, we design, supply and commission complete AI & Robotics labs for schools, colleges and universities — from the floorplan and furniture to the curriculum and teacher training." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border bg-card/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6 py-20 grid md:grid-cols-4 gap-12", children: [["20+", "Robotics SKUs in catalog"], ["6", "Global OEM partners"], ["100%", "Pre-tested in our AIR lab"], ["50+", "Institutional deployments"]].map(([n, l]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-5xl md:text-6xl font-bold tracking-tight text-gradient", children: n }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-muted-foreground text-sm uppercase tracking-wider", children: l })
    ] }, l)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-6 py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm uppercase tracking-widest text-primary font-medium", children: "Why IQNAAX" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight", children: "What we bring to every deployment." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: values.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-7 rounded-2xl border border-border bg-card hover-lift", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(v.icon, { className: "w-5 h-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold mb-2", children: v.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: v.body })
      ] }, v.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mx-auto px-6 pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] rounded-3xl overflow-hidden border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: aboutTeam, alt: "IQNAAX engineering team", className: "w-full h-full object-cover", loading: "lazy" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] rounded-3xl overflow-hidden border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: aboutClassroom, alt: "Students in an IQNAAX-built lab", className: "w-full h-full object-cover", loading: "lazy" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card/40 border-y border-border py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 grid md:grid-cols-2 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl font-bold tracking-tight", children: "Our partners." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 text-muted-foreground leading-relaxed text-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We work hand-in-hand with Nuwa Robotics, Elephant Robotics, Unitree, Zmorph, AgileX and a growing roster of specialist OEMs to bring vetted, supported hardware to the Indian market." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Every product we distribute lives in our own AIR (AI & Robotics) lab first — where our engineers test, document and certify it before it ever ships to a customer." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/products", className: "inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:bg-primary transition-all", children: [
          "View the catalog ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  About as component
};
