import { r as reactExports, V as jsxRuntimeExports } from "./server-Bjg38tM-.js";
import { L as Layout } from "./Layout-CT5J1bmC.js";
import { A as API_CONFIG } from "./api-CAf8QtR2.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-zrmSQy5x.js";
const initialState = {
  muted: false,
  defaultMuted: false,
  volume: 1,
  currentTime: 0,
  paused: true,
  readyState: 0,
  networkState: 0,
  audioTrackCount: 0,
  lastEvent: "initialized"
};
function VideoDebugPlayer({ src, label }) {
  const videoRef = reactExports.useRef(null);
  const [debugState, setDebugState] = reactExports.useState(initialState);
  const refreshState = () => {
    const video = videoRef.current;
    if (!video) return;
    const audioTracks = video.audioTracks;
    setDebugState((prev) => ({
      ...prev,
      muted: video.muted,
      defaultMuted: video.defaultMuted,
      volume: video.volume,
      currentTime: video.currentTime,
      paused: video.paused,
      readyState: video.readyState,
      networkState: video.networkState,
      audioTrackCount: Array.isArray(audioTracks) ? audioTracks.length : audioTracks?.length ?? 0
    }));
  };
  reactExports.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const logState = (eventName, error) => {
      const audioTracks = video.audioTracks;
      const payload = {
        muted: video.muted,
        defaultMuted: video.defaultMuted,
        volume: video.volume,
        currentTime: video.currentTime,
        paused: video.paused,
        readyState: video.readyState,
        networkState: video.networkState,
        audioTrackCount: Array.isArray(audioTracks) ? audioTracks.length : audioTracks?.length ?? 0,
        error
      };
      console.log("[BLOG VIDEO AUDIO DEBUG]", label, eventName, payload);
      setDebugState((prev) => ({
        ...prev,
        ...payload,
        lastEvent: eventName,
        errorMessage: error
      }));
    };
    const handleLoadedMetadata = () => logState("loadedmetadata");
    const handleCanPlay = () => logState("canplay");
    const handlePlay = () => logState("play");
    const handlePlaying = () => logState("playing");
    const handleVolumeChange = () => logState("volumechange");
    const handleTimeUpdate = () => refreshState();
    const handleError = () => {
      const error = video.error;
      const message = error ? `${error.code}:${error.message}` : "unknown";
      logState("error", message);
    };
    logState("initialized");
    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("play", handlePlay);
    video.addEventListener("playing", handlePlaying);
    video.addEventListener("volumechange", handleVolumeChange);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("error", handleError);
    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("playing", handlePlaying);
      video.removeEventListener("volumechange", handleVolumeChange);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("error", handleError);
    };
  }, [src, label]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-4 text-sm text-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex flex-wrap items-center justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Video Debug Panel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-muted px-2 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground", children: label })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 sm:grid-cols-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-muted p-2", children: [
          "muted: ",
          String(debugState.muted)
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-muted p-2", children: [
          "defaultMuted: ",
          String(debugState.defaultMuted)
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-muted p-2", children: [
          "volume: ",
          debugState.volume.toFixed(2)
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-muted p-2", children: [
          "currentTime: ",
          debugState.currentTime.toFixed(2)
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-muted p-2", children: [
          "paused: ",
          String(debugState.paused)
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-muted p-2", children: [
          "readyState: ",
          debugState.readyState
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-muted p-2", children: [
          "networkState: ",
          debugState.networkState
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-muted p-2", children: [
          "audioTracks: ",
          debugState.audioTrackCount
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 text-xs text-muted-foreground", children: [
        "last event: ",
        debugState.lastEvent,
        debugState.errorMessage ? ` · error: ${debugState.errorMessage}` : ""
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto overflow-hidden rounded-3xl max-w-[1000px] max-h-[600px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full aspect-[16/9] bg-black", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "video",
      {
        ref: videoRef,
        controls: true,
        preload: "metadata",
        playsInline: true,
        className: "w-full h-full",
        style: { objectFit: "contain" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("source", { src, type: "video/mp4" }),
          "Your browser does not support the video tag."
        ]
      }
    ) }) })
  ] });
}
function VideoTest() {
  const localVideoUrl = `${API_CONFIG.BASE_URL}/uploads/blogs/1779523355_WhatsApp_Video_2026-05-15_at_11.15.30_AM.mp4`;
  const publicVideoUrl = "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-40 pb-16 container mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-display font-semibold", children: "Video Test" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-3xl text-sm text-muted-foreground", children: "Compare a local uploaded MP4 against a public MP4 with known audio. Both use the same video element wrapper." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-6 text-sm text-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "Instructions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-3 space-y-2 text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "1. Press play on both videos." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "2. Check the browser console for ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "[BLOG VIDEO AUDIO DEBUG]" }),
          " logs."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "3. Confirm the local video and the public video behave differently or the same." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold", children: "A. Local uploaded MP4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
          "URL: ",
          localVideoUrl
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(VideoDebugPlayer, { src: localVideoUrl, label: "Local uploaded MP4" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold", children: "B. Public MP4 with audio" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
          "URL: ",
          publicVideoUrl
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(VideoDebugPlayer, { src: publicVideoUrl, label: "Public test MP4" })
      ] })
    ] })
  ] }) }) });
}
export {
  VideoTest as component
};
