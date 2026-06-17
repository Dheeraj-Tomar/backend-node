import { r as reactExports, V as jsxRuntimeExports } from "./server-Bjg38tM-.js";
import { a as apiCall, A as API_CONFIG } from "./api-CAf8QtR2.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function BlogDetail() {
  const [blog, setBlog] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState(null);
  const [galleryIndexes, setGalleryIndexes] = reactExports.useState({});
  reactExports.useEffect(() => {
    const id = window.location.pathname.split("/").pop();
    const fetchBlog = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await apiCall(API_CONFIG.ENDPOINTS.BLOG_BY_ID(id), {
          method: "GET"
        });
        setBlog(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err));
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, []);
  const getRemoteUrl = (value) => {
    if (!value) return void 0;
    return value.startsWith("/") ? `${API_CONFIG.BASE_URL}${value}` : value;
  };
  const renderBlock = (block, index) => {
    switch (block.type) {
      case "hero-image": {
        const imageUrl = getRemoteUrl(block.image_path) || block.image_url || "/assets/placeholder-3d.png";
        return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mb-14 rounded-3xl overflow-hidden bg-muted/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[520px] w-full overflow-hidden bg-black", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: imageUrl, alt: block.caption || "Hero image", className: "h-full w-full object-cover" }),
          block.caption ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-6 left-6 right-6 rounded-3xl bg-background/80 p-4 text-sm text-muted-foreground backdrop-blur", children: block.caption }) : null
        ] }) }, index);
      }
      case "heading":
        return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mb-10", children: block.level === "h3" ? /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold text-foreground", children: block.text }) : block.level === "h2" ? /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-semibold text-foreground", children: block.text }) : /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-semibold text-foreground", children: block.text }) }, index);
      case "text":
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-10 space-y-4", children: [
          block.heading ? /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-semibold text-foreground", children: block.heading }) : null,
          block.subheading ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground", children: block.subheading }) : null,
          block.paragraph ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base leading-8 text-muted-foreground", children: block.paragraph }) : null
        ] }, index);
      case "paragraph":
        return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base leading-8 text-muted-foreground", children: block.text }) }, index);
      case "quote":
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-10 rounded-3xl border border-border bg-background p-8 text-center shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl italic text-foreground", children: [
            "“",
            block.text,
            "”"
          ] }),
          block.author ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm uppercase tracking-[0.24em] text-muted-foreground", children: block.author }) : null
        ] }, index);
      case "video": {
        const url = block.url;
        if (!url) return null;
        const embedUrl = getEmbeddedVideoUrl(url);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-14", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { src: embedUrl, width: "100%", height: "550", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", allowFullScreen: true, title: "Video player" }),
          block.caption ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground", children: block.caption }) : null
        ] }, index);
      }
      case "image-gallery": {
        const images = block.images || [];
        if (!images.length) return null;
        const selectedIndex = galleryIndexes[index] ?? 0;
        const selectedImage = images[selectedIndex];
        const imageUrl = getRemoteUrl(selectedImage?.image_path) || selectedImage?.image_url || "/assets/placeholder-3d.png";
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-14", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-3xl border border-border bg-black", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: imageUrl, alt: selectedImage?.alt || "Gallery image", className: "h-[520px] w-full object-cover" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4", children: images.map((image, imageIndex) => {
            const thumbUrl = getRemoteUrl(image.image_path) || image.image_url || "/assets/placeholder-3d.png";
            return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setGalleryIndexes((current) => ({
              ...current,
              [index]: imageIndex
            })), className: `overflow-hidden rounded-2xl border ${selectedIndex === imageIndex ? "border-foreground" : "border-border"} bg-muted`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: thumbUrl, alt: image.alt || `Gallery ${imageIndex + 1}`, className: "h-24 w-full object-cover" }) }, imageIndex);
          }) })
        ] }, index);
      }
      case "two-column": {
        const imageUrl = getRemoteUrl(block.image_path) || block.image_url || "/assets/placeholder-3d.png";
        block.image_position === "left" ? "lg:order-2" : "";
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-14 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `overflow-hidden rounded-3xl bg-muted ${block.image_position === "right" ? "lg:order-2" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: imageUrl, alt: block.title || "Section image", className: "h-full w-full object-cover" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            block.title ? /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-semibold text-foreground", children: block.title }) : null,
            block.text ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base leading-8 text-muted-foreground", children: block.text }) : null
          ] })
        ] }, index);
      }
      case "divider":
        return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mb-14", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto h-px w-24 rounded-full bg-border" }) }, index);
      default:
        return null;
    }
  };
  const contentBlocks = Array.isArray(blog?.content) ? blog.content : [];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-40 pb-24 bg-background text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-5xl px-6", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Loading..." }) : error ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-destructive", children: error }) : blog ? /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "space-y-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-3xl border border-border bg-card p-8 shadow-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm uppercase tracking-[0.32em] text-primary", children: blog.category || "Blog" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 text-5xl font-display font-semibold tracking-tight text-foreground", children: blog.title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right text-sm text-muted-foreground", children: [
          blog.author ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: blog.author }) : null,
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: blog.publish_date ? new Date(blog.publish_date).toLocaleDateString() : blog.created_at?.split(" ")[0] })
        ] })
      ] }),
      blog.description ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-3xl text-lg leading-8 text-muted-foreground", children: blog.description }) : null
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-10", children: contentBlocks.length > 0 ? contentBlocks.map((block, index) => renderBlock(block, index)) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-3xl border border-border bg-card p-8 prose max-w-none text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { dangerouslySetInnerHTML: {
      __html: blog.content || blog.description || "<p>No content available.</p>"
    } }) }) })
  ] }) : null }) });
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
        return `https://www.youtube.com/embed/${videoId}?rel=0`;
      }
    }
  } catch {
    const loose = String(url).match(/(?:youtu\.be\/|v=|embed\/)([\w-_-]{6,})/i);
    if (loose && loose[1]) return `https://www.youtube.com/embed/${loose[1]}`;
  }
  return url;
}
export {
  BlogDetail as component
};
