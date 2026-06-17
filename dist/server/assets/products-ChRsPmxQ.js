import { r as reactExports, V as jsxRuntimeExports, a0 as Outlet } from "./server-Bjg38tM-.js";
import { u as useMatch, L as Link } from "./router-zrmSQy5x.js";
import { g as getStoredCountry, L as Layout, f as formatPrice } from "./Layout-CT5J1bmC.js";
import { a as apiCall, A as API_CONFIG, r as resolveRemoteUrl } from "./api-CAf8QtR2.js";
import { C as ChevronLeft, a as ChevronRight } from "./chevron-right-Bwz8Yo32.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function ProductsPage() {
  const productDetailMatch = useMatch({
    from: "/products/$id",
    shouldThrow: false
  });
  const showProductList = !productDetailMatch;
  const [products, setProducts] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState(null);
  const [activeVideo, setActiveVideo] = reactExports.useState(null);
  const [country, setCountry] = reactExports.useState(() => getStoredCountry());
  reactExports.useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await apiCall(API_CONFIG.ENDPOINTS.PRODUCTS, {
          method: "GET"
        });
        setProducts(data);
      } catch (fetchError) {
        setError(fetchError instanceof Error ? fetchError.message : "Failed to load products.");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  reactExports.useEffect(() => {
    const onCountryChange = (event) => {
      const next = event.detail;
      if (next) setCountry(next);
    };
    window.addEventListener("iqnaax-country-change", onCountryChange);
    return () => window.removeEventListener("iqnaax-country-change", onCountryChange);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    showProductList ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "pt-40 pb-16 container mx-auto px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm uppercase tracking-widest text-primary font-medium", children: "Catalog" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-3 font-display text-5xl md:text-7xl font-bold tracking-tight max-w-4xl", children: [
          "Robotics, ready for ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic font-light", children: "scale." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground max-w-2xl", children: "Every unit in our catalog is available in wholesale volumes with distributor pricing, warranty support and onboarding documentation." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mx-auto px-6 pb-24", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 flex flex-col items-center justify-center gap-4 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Loading products…" })
      ] }) : error ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 rounded-3xl border border-destructive/20 bg-destructive/5 p-6 text-sm text-destructive", children: error }) : products.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 rounded-3xl border border-border bg-card p-6 text-sm text-muted-foreground", children: "No products available." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid justify-center gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-stretch", children: products.map((product, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product, index: i, country }, product.id)) }) })
    ] }) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}),
    activeVideo ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-6 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-5xl rounded-3xl bg-card shadow-2xl ring-1 ring-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-border px-5 py-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold", children: "Product Video Preview" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setActiveVideo(null), className: "rounded-full border border-border bg-background px-3 py-2 text-sm font-medium text-foreground hover:bg-muted", children: "Close" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-video bg-black", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { src: getEmbeddedVideoUrl(activeVideo), title: "Product Video Preview", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true, className: "h-full w-full" }) })
    ] }) }) : null
  ] });
}
function ProductCard({
  product,
  index,
  country
}) {
  const [activeIndex, setActiveIndex] = reactExports.useState(0);
  const images = reactExports.useMemo(() => {
    const normalized = (product.images ?? []).map((image) => ({
      ...image,
      url: resolveRemoteUrl(image.image_full_url || image.image_url || image.image_path)
    })).filter((image) => image.url).sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0));
    if (normalized.length > 0) {
      return normalized;
    }
    const fallbackUrl = resolveRemoteUrl(product.image_url || product.image_path);
    return fallbackUrl ? [{
      image_full_url: product.image_url,
      url: fallbackUrl
    }] : [];
  }, [product.images, product.image_url, product.image_path]);
  reactExports.useEffect(() => {
    setActiveIndex(0);
  }, [product.id]);
  const hasGallery = images.length > 1;
  const currentImage = images[activeIndex] || images[0];
  const goPrev = () => {
    if (!images.length) return;
    setActiveIndex((current) => current === 0 ? images.length - 1 : current - 1);
  };
  const goNext = () => {
    if (!images.length) return;
    setActiveIndex((current) => current === images.length - 1 ? 0 : current + 1);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group relative max-w-[260px] w-full rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1", style: {
    animationDelay: `${index * 60}ms`
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-t-3xl bg-muted/10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] bg-muted/10", children: currentImage?.url ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: currentImage.url, alt: product.name, className: "h-full w-full object-contain" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full items-center justify-center px-4 text-sm text-muted-foreground", children: "No image available" }) }),
      hasGallery ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground shadow-sm", children: [
          images.length,
          " images"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-4 top-4 rounded-full bg-background/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground shadow-sm", children: [
          activeIndex + 1,
          "/",
          images.length
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: (event) => {
          event.stopPropagation();
          goPrev();
        }, className: "absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/90 p-2 text-foreground shadow-md backdrop-blur hover:bg-background", "aria-label": "Previous image", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: (event) => {
          event.stopPropagation();
          goNext();
        }, className: "absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/90 p-2 text-foreground shadow-md backdrop-blur hover:bg-background", "aria-label": "Next image", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 bottom-3 -translate-x-1/2 flex items-center gap-2", children: images.map((_, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-2.5 w-2.5 rounded-full ${idx === activeIndex ? "bg-foreground" : "bg-muted-foreground/60"}` }, idx)) })
      ] }) : null,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/products/${product.id}`, className: "absolute inset-0 z-0", "aria-label": `View details for ${product.name}` })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 flex min-h-[170px] flex-col gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold text-foreground", children: product.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-snug text-muted-foreground max-h-16 overflow-hidden", children: product.description })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto flex flex-col gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm font-semibold text-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Price" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatPrice(product.price, country) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/products/${product.id}`, className: "inline-flex items-center justify-center rounded-full bg-foreground px-3 py-2 text-sm font-semibold text-background transition hover:bg-primary", children: "View" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "inline-flex items-center justify-center rounded-full border border-border bg-card px-3 py-2 text-sm font-semibold text-foreground transition hover:bg-background", children: "Request quote" })
        ] })
      ] })
    ] })
  ] });
}
function getEmbeddedVideoUrl(url) {
  try {
    const u = new URL(url.trim());
    const host = u.hostname.toLowerCase();
    const pathname = u.pathname;
    if (host.includes("youtu.be") || host.includes("youtube.com") || host.includes("youtube-nocookie.com")) {
      let videoId = null;
      if (host.includes("youtu.be")) {
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
  } catch {
    const loose = String(url).match(/(?:youtu\.be\/|v=|embed\/)([\w-_-]{6,})/i);
    if (loose && loose[1]) return `https://www.youtube.com/embed/${loose[1]}`;
  }
  return url;
}
export {
  ProductsPage as component
};
