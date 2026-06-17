import { r as reactExports, V as jsxRuntimeExports } from "./server-Bjg38tM-.js";
import { L as Link } from "./router-zrmSQy5x.js";
const COUNTRY_STORAGE_KEY = "iqnaax_country";
const DEFAULT_COUNTRY = "India";
const INR_TO_USD = 0.012;
const INR_TO_GBP = 9e-3;
function getStoredCountry() {
  if (typeof window === "undefined") return DEFAULT_COUNTRY;
  const stored = window.localStorage.getItem(COUNTRY_STORAGE_KEY);
  if (stored === "USA") return "USA";
  if (stored === "UK") return "UK";
  return "India";
}
function setStoredCountry(country) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(COUNTRY_STORAGE_KEY, country);
  window.dispatchEvent(new CustomEvent("iqnaax-country-change", { detail: country }));
}
function convertPrice(amountInINR, country) {
  switch (country) {
    case "India":
      return amountInINR;
    case "USA":
      return amountInINR * INR_TO_USD;
    case "UK":
      return amountInINR * INR_TO_GBP;
    default:
      return amountInINR;
  }
}
function formatPrice(amountInINR, country) {
  const value = convertPrice(amountInINR, country);
  let locale = "en-IN";
  let currency = "INR";
  switch (country) {
    case "India":
      locale = "en-IN";
      currency = "INR";
      break;
    case "USA":
      locale = "en-US";
      currency = "USD";
      break;
    case "UK":
      locale = "en-GB";
      currency = "GBP";
      break;
  }
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 2
  }).format(value);
}
const COUNTRY_OPTIONS = [
  { value: "India", label: "India", flagEmoji: "🇮🇳", flagImage: "https://flagcdn.com/w20/in.png" },
  { value: "USA", label: "USA", flagEmoji: "🇺🇸", flagImage: "https://flagcdn.com/w20/us.png" },
  { value: "UK", label: "UK", flagEmoji: "🇬🇧", flagImage: "https://flagcdn.com/w20/gb.png" }
];
const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/lab-setup", label: "Lab Setup" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" }
];
function CountryMenu({
  country,
  onChange
}) {
  const menuRef = reactExports.useRef(null);
  const [menuOpen, setMenuOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onMouseDown = (event) => {
      if (!menuRef.current?.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("mousedown", onMouseDown);
    return () => window.removeEventListener("mousedown", onMouseDown);
  }, []);
  const selected = COUNTRY_OPTIONS.find((option) => option.value === country) ?? COUNTRY_OPTIONS[0];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: menuRef, className: "relative inline-flex rounded-full border border-border bg-[#0b1220] text-white shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        className: "inline-flex min-w-[8rem] items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400",
        onClick: () => setMenuOpen((open) => !open),
        "aria-haspopup": "true",
        "aria-expanded": menuOpen,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: selected.flagImage,
              alt: `${selected.label} flag`,
              className: "h-4 w-5 rounded-sm object-cover"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "whitespace-nowrap", children: selected.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `transition-transform ${menuOpen ? "rotate-180" : ""}`, children: "▾" })
        ]
      }
    ),
    menuOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-0 z-50 mt-2 min-w-[10rem] overflow-hidden rounded-2xl border border-border bg-[#0b1220] shadow-2xl", children: COUNTRY_OPTIONS.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => {
          onChange(option.value);
          setMenuOpen(false);
        },
        className: `flex w-full items-center gap-3 px-4 py-3 text-left text-sm font-semibold transition ${option.value === country ? "bg-cyan-500/15 text-white" : "text-white hover:bg-cyan-500/10"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: option.flagImage,
              alt: `${option.label} flag`,
              className: "h-4 w-5 rounded-sm object-cover"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: option.label })
        ]
      },
      option.value
    )) }) : null
  ] });
}
function Header() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  const [country, setCountry] = reactExports.useState(getStoredCountry());
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const handleCountryChange = (next) => {
    setCountry(next);
    setStoredCountry(next);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 h-20 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2.5 group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-10 h-10 rounded-xl logo-mark flex items-center justify-center text-background font-display font-bold text-[15px] tracking-tight shadow-lg group-hover:scale-110 transition-transform", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10", children: "IQ" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 rounded-xl ring-1 ring-white/20" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-xl tracking-tight", children: "IQNAAX" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:flex items-center gap-8", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: l.to,
              className: "text-sm font-medium text-foreground/70 hover:text-foreground transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full",
              activeProps: { className: "text-foreground after:w-full" },
              activeOptions: { exact: l.to === "/" },
              children: l.label
            },
            l.to
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CountryMenu, { country, onChange: handleCountryChange }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/contact",
                className: "inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-medium hover:bg-primary transition-all hover:scale-105",
                children: "Get a Quote"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "md:hidden w-10 h-10 flex items-center justify-center",
              onClick: () => setOpen(!open),
              "aria-label": "Menu",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `block h-0.5 w-6 bg-foreground transition-all ${open ? "rotate-45 translate-y-2" : ""}` }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `block h-0.5 w-6 bg-foreground transition-all ${open ? "opacity-0" : ""}` }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `block h-0.5 w-6 bg-foreground transition-all ${open ? "-rotate-45 -translate-y-2" : ""}` })
              ] })
            }
          )
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:hidden bg-background border-t border-border animate-fade-in", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "container mx-auto px-6 py-6 flex flex-col gap-4", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: l.to,
              onClick: () => setOpen(false),
              className: "text-base font-medium py-2",
              children: l.label
            },
            l.to
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6 pb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CountryMenu, { country, onChange: handleCountryChange }) })
        ] })
      ]
    }
  );
}
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};
const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => reactExports.createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
const __iconNode$5 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$5);
const __iconNode$4 = [
  [
    "path",
    { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", key: "1jg4f8" }
  ]
];
const Facebook = createLucideIcon("facebook", __iconNode$4);
const __iconNode$3 = [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }],
  ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }]
];
const Instagram = createLucideIcon("instagram", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f"
    }
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }]
];
const Linkedin = createLucideIcon("linkedin", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
];
const MessageCircle = createLucideIcon("message-circle", __iconNode);
const WHATSAPP_NUMBER = "919999999999";
const EMAIL = "sales@iqnaax.com";
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative mt-32 border-t border-border bg-[oklch(0.06_0.02_260)] text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-primary/6 to-transparent pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative container mx-auto px-6 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex md:absolute md:top-6 md:left-6 md:items-center md:gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl logo-mark flex items-center justify-center text-background font-display font-bold text-[15px]", children: "IQ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-2xl tracking-tight", children: "IQNAAX" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 animate-fade-up lg:col-span-2 md:pl-20 md:pt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:hidden flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl logo-mark flex items-center justify-center text-background font-display font-bold text-[15px] relative z-10", children: "IQ" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -inset-1 -z-10 rounded-xl blur-xl opacity-30 bg-gradient-to-r from-cyan-500/30 via-sky-400/20 to-indigo-600/10" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-2xl tracking-tight", children: "IQNAAX" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-3xl leading-relaxed text-sm md:text-base", style: { lineHeight: 1.7 }, children: "IQNAAX delivers advanced AI robotics solutions, custom automation systems, and smart lab setups for University, Industries, and Research organizations. We specialize in customized robots, bulk robotics supply, intelligent engineering solutions, and future-ready technology designed around real customer requirements." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col animate-fade-up", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-6 text-sm uppercase tracking-wider text-primary", children: "Explore" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col gap-3", children: [
            { to: "/products", label: "Products" },
            { to: "/services", label: "Services" },
            { to: "/lab-setup", label: "Lab Setup" },
            { to: "/about", label: "About" },
            { to: "/contact", label: "Contact" }
          ].map(({ to, label }) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to,
              className: "group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "transition-transform transform group-hover:translate-x-1", children: label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3 h-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-4px] group-hover:translate-x-0" })
              ]
            }
          ) }, to)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center animate-fade-up lg:col-span-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-6 text-sm uppercase tracking-wider text-primary text-center", children: "Follow Us" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center gap-4", children: [
            { Icon: Instagram, href: "https://instagram.com/iqnaax", label: "Instagram" },
            { Icon: Facebook, href: "https://facebook.com/iqnaax", label: "Facebook" },
            { Icon: Linkedin, href: "https://linkedin.com/company/iqnaax", label: "LinkedIn" }
          ].map(({ Icon: Icon2, href, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href,
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": label,
              className: "relative group w-11 h-11 rounded-full flex items-center justify-center",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/10 to-sky-400/6 opacity-0 group-hover:opacity-100 transform group-hover:scale-105 transition-all" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute w-7 h-7 rounded-full bg-background/60 blur-sm opacity-0 group-hover:opacity-30 transition-opacity" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10 flex items-center justify-center w-9 h-9 rounded-full border border-border bg-card text-muted-foreground group-hover:text-background group-hover:bg-primary transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: "w-4 h-4" }) })
              ]
            },
            label
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col animate-fade-up lg:col-span-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-6 text-sm uppercase tracking-wider text-primary", children: "Contact" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "flex flex-col gap-4 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-9 h-9 inline-flex items-center justify-center rounded-full border border-border bg-card text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-4 h-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${EMAIL}`, className: "hover:text-foreground transition-colors", children: EMAIL })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-9 h-9 inline-flex items-center justify-center rounded-full border border-border bg-card text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `https://wa.me/${WHATSAPP_NUMBER}`, target: "_blank", rel: "noopener noreferrer", className: "hover:text-foreground transition-colors", children: "WhatsApp Business" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 border-t border-border" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-col md:flex-row items-center md:items-center justify-between gap-4 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "order-2 md:order-1", children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " IQNAAX. All rights reserved."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "order-1 md:order-2 text-center md:text-right", children: "Authorized distributor — Nuwa Robotics, Elephant Robotics, Unitree, Zmorph & more." })
      ] })
    ] })
  ] });
}
function Layout({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  ArrowRight as A,
  Layout as L,
  Mail as M,
  createLucideIcon as c,
  formatPrice as f,
  getStoredCountry as g
};
