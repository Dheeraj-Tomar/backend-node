import { r as reactExports, V as jsxRuntimeExports, a0 as Outlet } from "./server-Bjg38tM-.js";
import { u as useMatch, L as Link } from "./router-zrmSQy5x.js";
import { L as Layout } from "./Layout-CT5J1bmC.js";
import { a as apiCall, A as API_CONFIG } from "./api-CAf8QtR2.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function isYouTubeUrl(url) {
  try {
    const parsed = new URL(url);
    return parsed.hostname.includes("youtube.com") || parsed.hostname.includes("youtu.be");
  } catch {
    return false;
  }
}
function getYouTubeVideoId(url) {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtu.be")) {
      return parsed.pathname.slice(1);
    }
    return parsed.searchParams.get("v");
  } catch {
    return null;
  }
}
function getVideoThumbnail(url) {
  const id = getYouTubeVideoId(url);
  if (id) {
    return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  }
  return null;
}
function hasImageInBlocks(blocks) {
  if (!blocks || blocks.length === 0) return false;
  return blocks.some((block) => {
    if (block.type === "hero-image" && (block.image_url || block.image_path)) {
      return true;
    }
    if (block.type === "image-gallery" && block.images && block.images.length > 0) {
      return block.images.some((img) => img.image_url || img.image_path);
    }
    if (block.type === "two-column" && (block.image_url || block.image_path)) {
      return true;
    }
    if (block.type === "video" && block.url && isYouTubeUrl(block.url)) {
      return !!getVideoThumbnail(block.url);
    }
    return false;
  });
}
function BlogPlaceholder({
  title
}) {
  const initials = title.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-sm font-bold text-white", children: initials || "📄" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-muted-foreground", children: "Text Article" })
  ] }) });
}
function BlogList() {
  const [blogs, setBlogs] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState(null);
  const blogDetailMatch = useMatch({
    from: "/blog/$id",
    shouldThrow: false
  });
  const showBlogList = !blogDetailMatch;
  reactExports.useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await apiCall(API_CONFIG.ENDPOINTS.BLOGS, {
          method: "GET"
        });
        setBlogs(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err));
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);
  const getImage = (b) => {
    if (b.image_full_url) return b.image_full_url;
    if (b.image_url) return b.image_url;
    const thumbnail = b.video_url ? getVideoThumbnail(b.video_url) : null;
    if (thumbnail) return thumbnail;
    return null;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    showBlogList ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "pt-40 pb-16 container mx-auto px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-display font-semibold", children: "IQNAAX Blog" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "Insights, news and technical articles on robotics and AI." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mx-auto px-6 pb-24", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Loading blogs..." }) : error ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-destructive", children: error }) : blogs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No blog posts yet." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-8", children: blogs.map((b) => {
        const hasImage = getImage(b) || hasImageInBlocks(b.content);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group rounded-2xl border border-border overflow-hidden bg-card hover-lift", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[16/9] overflow-hidden bg-muted/10", children: hasImage ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: getImage(b) || "/assets/placeholder-3d.png", alt: b.title, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(BlogPlaceholder, { title: b.title }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold", children: b.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: b.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground", children: [
                b.category,
                " • ",
                b.created_at?.split(" ")[0]
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/blog/${b.id}`, className: "text-sm font-medium text-foreground", children: "Read More →" })
            ] })
          ] })
        ] }, b.id);
      }) }) })
    ] }) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {})
  ] });
}
export {
  BlogList as component
};
