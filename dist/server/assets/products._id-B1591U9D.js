import { r as reactExports, V as jsxRuntimeExports } from "./server-Bjg38tM-.js";
import { L as Link } from "./router-zrmSQy5x.js";
import { c as createLucideIcon, g as getStoredCountry, L as Layout, f as formatPrice } from "./Layout-CT5J1bmC.js";
import { r as resolveRemoteUrl, a as apiCall, A as API_CONFIG } from "./api-CAf8QtR2.js";
import { C as ChevronLeft, a as ChevronRight } from "./chevron-right-Bwz8Yo32.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode);
function getEmbeddedVideoUrl(url) {
  if (!url) return null;
  try {
    const str = url.trim();
    if (/youtube\.com\/embed\//i.test(str)) return str;
    const u = new URL(str);
    const host = u.hostname.toLowerCase();
    const pathname = u.pathname;
    if (host === "youtu.be" || host.includes("youtube.com") || host.includes("youtube-nocookie.com")) {
      let videoId = null;
      if (host === "youtu.be") {
        videoId = pathname.replace(/^\//, "");
      } else if (pathname.startsWith("/shorts/")) {
        videoId = pathname.split("/")[2] || null;
      } else if (pathname.startsWith("/watch")) {
        videoId = u.searchParams.get("v");
      } else {
        const embedMatch = pathname.match(/\/embed\/([^/\?]+)/i);
        if (embedMatch && embedMatch[1]) {
          videoId = embedMatch[1];
        }
      }
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }
    }
  } catch (e) {
    const loose = String(url).match(/(?:youtu\.be\/|v=|embed\/)([\w-_-]{6,})/i);
    if (loose && loose[1]) return `https://www.youtube.com/embed/${loose[1]}`;
    return null;
  }
  return null;
}
function ProductDetail() {
  const [product, setProduct] = reactExports.useState(null);
  const [activeIndex, setActiveIndex] = reactExports.useState(0);
  const [error, setError] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [touchStartX, setTouchStartX] = reactExports.useState(null);
  const [country, setCountry] = reactExports.useState(() => getStoredCountry());
  reactExports.useEffect(() => {
    const id = window.location.pathname.split("/").pop();
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await apiCall(API_CONFIG.ENDPOINTS.PRODUCT_BY_ID(id || ""), {
          method: "GET"
        });
        setProduct(data);
        setActiveIndex(0);
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err));
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, []);
  reactExports.useEffect(() => {
    const onCountryChange = (event) => {
      const next = event.detail;
      if (next) setCountry(next);
    };
    window.addEventListener("iqnaax-country-change", onCountryChange);
    return () => window.removeEventListener("iqnaax-country-change", onCountryChange);
  }, []);
  const images = reactExports.useMemo(() => {
    if (!product) return [];
    const normalized = (product.images ?? []).map((image) => ({
      ...image,
      url: resolveRemoteUrl(image.image_full_url || image.image_url || image.image_path) || ""
    })).filter((image) => Boolean(image.url)).sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0));
    if (normalized.length > 0) {
      return normalized;
    }
    const fallbackUrl = resolveRemoteUrl(product.image_url || product.image_path);
    return fallbackUrl ? [{
      image_full_url: product.image_url,
      url: fallbackUrl
    }] : [];
  }, [product]);
  const currentImage = images[activeIndex] || images[0];
  const embedUrl = getEmbeddedVideoUrl(product?.video_url ?? null);
  const goPrev = () => {
    if (!images?.length) return;
    setActiveIndex((index) => index === 0 ? images.length - 1 : index - 1);
  };
  const goNext = () => {
    if (!images?.length) return;
    setActiveIndex((index) => index === images.length - 1 ? 0 : index + 1);
  };
  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0].clientX);
  };
  const handleTouchEnd = (event) => {
    if (touchStartX === null) return;
    const diff = event.changedTouches[0].clientX - touchStartX;
    if (diff > 50) {
      goPrev();
    } else if (diff < -50) {
      goNext();
    }
    setTouchStartX(null);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-40 pb-16 container mx-auto px-6", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Loading product…" }) : error ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-destructive", children: error }) : product ? /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "space-y-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl border border-border bg-card", onTouchStart: handleTouchStart, onTouchEnd: handleTouchEnd, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-[320px] max-h-[68vh] items-center justify-center bg-muted/10 p-4", children: currentImage?.url ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: currentImage.url, alt: product.name, className: "max-h-[64vh] max-w-full object-contain" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full w-full items-center justify-center text-muted-foreground", children: "No image available" }) }),
          images.length > 1 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1 text-xs font-semibold text-foreground shadow-sm", children: [
              activeIndex + 1,
              "/",
              images.length
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: (event) => {
              event.stopPropagation();
              goPrev();
            }, className: "absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/80 p-3 text-foreground shadow-lg backdrop-blur hover:bg-background", "aria-label": "Previous image", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-5 h-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: (event) => {
              event.stopPropagation();
              goNext();
            }, className: "absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/80 p-3 text-foreground shadow-lg backdrop-blur hover:bg-background", "aria-label": "Next image", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-5 h-5" }) })
          ] }) : null
        ] }),
        images.length > 1 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex items-center justify-center gap-2", children: images.map((_, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-2.5 w-2.5 rounded-full ${idx === activeIndex ? "bg-foreground" : "bg-muted-foreground/60"}` }, idx)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4", children: images.map((image, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: (e) => {
            e.stopPropagation();
            setActiveIndex(idx);
          }, "aria-label": `Select image ${idx + 1} of ${images.length}`, className: `overflow-hidden rounded-2xl border p-1 transition-all ${idx === activeIndex ? "border-foreground" : "border-border bg-card"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: image.url, alt: `${product.name} thumbnail ${idx + 1}`, className: "h-20 w-full object-contain bg-muted/10" }) }, idx)) })
        ] }) : null
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/products", className: "inline-flex items-center gap-2 text-primary hover:text-white transition-all", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
            " Back to catalog"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Product ID #",
            product.id
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-display font-semibold tracking-tight text-foreground", children: product.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-semibold text-foreground", children: formatPrice(product.price, country) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: product.description })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
          product.video_url ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: embedUrl ?? product.video_url, target: "_blank", rel: "noreferrer", className: "inline-flex items-center justify-center rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background hover:bg-primary transition-all", children: "Watch Video" }) : null,
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "inline-flex items-center justify-center rounded-full bg-card border border-border px-5 py-3 text-sm font-medium text-foreground hover:bg-background transition-all", children: "Request Wholesale Quote" })
        ] })
      ] })
    ] }),
    embedUrl ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-foreground", children: "Product Video" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 aspect-video overflow-hidden rounded-3xl bg-black", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { src: embedUrl, title: `Product video for ${product.name}`, allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true, className: "h-full w-full" }) })
    ] }) : null
  ] }) : null }) });
}
export {
  ProductDetail as component
};
