const API_CONFIG = {
  // Backend base URL - change this for different environments
  BASE_URL: "https://iqnaax.in",
  // API endpoints
  ENDPOINTS: {
    HEALTH: "/api/health",
    ROOT: "/api/",
    // Products endpoints (to be implemented in Phase 2)
    PRODUCTS: "/api/products",
    PRODUCT_BY_ID: (id) => `/api/products/${id}`,
    PRODUCT_BY_SLUG: (slug) => `/api/products/${slug}`,
    // Blogs
    BLOGS: "/api/blogs",
    BLOG_BY_ID: (id) => `/api/blogs/${id}`,
    // Contact endpoints (to be implemented in Phase 2)
    CONTACT: "/api/contact",
    // Lab setup endpoints (to be implemented in Phase 2)
    LAB_SETUP: "/api/lab-setup"
  },
  // Request configuration
  TIMEOUT: 1e4
  // 10 seconds
};
function resolveRemoteUrl(value) {
  if (!value) return void 0;
  return value.startsWith("/") ? `${API_CONFIG.BASE_URL}${value}` : value;
}
async function apiCall(endpoint, options = {}) {
  const url = `${API_CONFIG.BASE_URL}${endpoint}`;
  const headers = new Headers(options.headers || {});
  if (!headers.has("Content-Type") && !(options.body instanceof FormData)) {
    headers.set("Content-Type", "application/json");
  }
  if (options.auth) {
    const token = localStorage.getItem("iqnaax_token");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
  }
  const defaultOptions = {
    ...options,
    headers
  };
  try {
    const response = await fetch(url, defaultOptions);
    if (!response.ok) {
      let errorMessage = `API error: ${response.status} ${response.statusText}`;
      try {
        const errorData = await response.json();
        if (errorData?.error) {
          errorMessage = errorData.error;
        }
      } catch {
      }
      throw new Error(errorMessage);
    }
    return await response.json();
  } catch (error) {
    console.error("API call failed:", error);
    throw error;
  }
}
export {
  API_CONFIG as A,
  apiCall as a,
  resolveRemoteUrl as r
};
