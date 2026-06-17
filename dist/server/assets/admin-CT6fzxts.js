import { r as reactExports, V as jsxRuntimeExports } from "./server-Bjg38tM-.js";
import { L as Layout } from "./Layout-CT5J1bmC.js";
import { a as apiCall, A as API_CONFIG } from "./api-CAf8QtR2.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-zrmSQy5x.js";
function Admin() {
  const [activeSection, setActiveSection] = reactExports.useState("dashboard");
  const [adminUsername, setAdminUsername] = reactExports.useState("");
  const [products, setProducts] = reactExports.useState([]);
  const [inquiries, setInquiries] = reactExports.useState([]);
  const [stats, setStats] = reactExports.useState({
    total_products: 0,
    total_inquiries: 0,
    todays_inquiries: 0
  });
  const [loadingSection, setLoadingSection] = reactExports.useState(false);
  const [saving, setSaving] = reactExports.useState(false);
  const [errorMessage, setErrorMessage] = reactExports.useState(null);
  const [successMessage, setSuccessMessage] = reactExports.useState(null);
  const [editingProductId, setEditingProductId] = reactExports.useState(null);
  const [name, setName] = reactExports.useState("");
  const [description, setDescription] = reactExports.useState("");
  const [price, setPrice] = reactExports.useState("");
  const [imageUrl, setImageUrl] = reactExports.useState("");
  const [imageUrls, setImageUrls] = reactExports.useState([]);
  const [imageUrlInput, setImageUrlInput] = reactExports.useState("");
  const [imageFiles, setImageFiles] = reactExports.useState([]);
  const [productImages, setProductImages] = reactExports.useState([]);
  const [deletedImageIds, setDeletedImageIds] = reactExports.useState([]);
  const [videoUrl, setVideoUrl] = reactExports.useState("");
  const [viewingInquiry, setViewingInquiry] = reactExports.useState(null);
  const [blogs, setBlogs] = reactExports.useState([]);
  const [editingBlogId, setEditingBlogId] = reactExports.useState(null);
  const [blogTitle, setBlogTitle] = reactExports.useState("");
  const [blogDescription, setBlogDescription] = reactExports.useState("");
  const [blogContent, setBlogContent] = reactExports.useState("");
  const [blogCategory, setBlogCategory] = reactExports.useState("");
  const [blogAuthor, setBlogAuthor] = reactExports.useState("");
  const [blogPublishDate, setBlogPublishDate] = reactExports.useState("");
  const [blogBlocks, setBlogBlocks] = reactExports.useState([]);
  const [blogBlockType, setBlogBlockType] = reactExports.useState("hero-image");
  const [blogImageFile, setBlogImageFile] = reactExports.useState(null);
  const [blogImageUrl, setBlogImageUrl] = reactExports.useState("");
  const [blogVideoUrl, setBlogVideoUrl] = reactExports.useState("");
  const [pendingDelete, setPendingDelete] = reactExports.useState(null);
  const adminToken = reactExports.useMemo(() => localStorage.getItem("iqnaax_token"), []);
  const adminRole = reactExports.useMemo(() => localStorage.getItem("iqnaax_admin_role") || "sub_admin", []);
  const [adminUsers, setAdminUsers] = reactExports.useState([]);
  const [newAdminUsername, setNewAdminUsername] = reactExports.useState("");
  const [newAdminPassword, setNewAdminPassword] = reactExports.useState("");
  reactExports.useEffect(() => {
    if (!adminToken) {
      window.location.href = "/login";
      return;
    }
    const storedUsername = localStorage.getItem("iqnaax_admin_username") || "Admin";
    setAdminUsername(storedUsername);
    fetchStats();
  }, [adminToken]);
  reactExports.useEffect(() => {
    if (activeSection === "products") {
      fetchProducts();
    }
    if (activeSection === "inquiries") {
      fetchInquiries();
    }
    if (activeSection === "blogs") {
      fetchBlogs();
    }
  }, [activeSection]);
  const fetchBlogs = async () => {
    setLoadingSection(true);
    setErrorMessage(null);
    try {
      const data = await apiCall(API_CONFIG.ENDPOINTS.BLOGS, {
        method: "GET"
      });
      setBlogs(data);
    } catch (error) {
      handleApiError(error);
    } finally {
      setLoadingSection(false);
    }
  };
  const handleApiError = (error) => {
    const message = error instanceof Error ? error.message : "Unable to complete the request.";
    setErrorMessage(message);
    if (message.toLowerCase().includes("unauthorized")) {
      localStorage.removeItem("iqnaax_token");
      window.location.href = "/login";
    }
  };
  const fetchStats = async () => {
    if (!adminToken) return;
    setLoadingSection(true);
    setErrorMessage(null);
    try {
      const data = await apiCall("/api/admin/stats", {
        method: "GET",
        auth: true
      });
      setStats(data);
    } catch (error) {
      handleApiError(error);
    } finally {
      setLoadingSection(false);
    }
  };
  const fetchProducts = async () => {
    setLoadingSection(true);
    setErrorMessage(null);
    try {
      const data = await apiCall(API_CONFIG.ENDPOINTS.PRODUCTS, {
        method: "GET"
      });
      setProducts(data);
    } catch (error) {
      handleApiError(error);
    } finally {
      setLoadingSection(false);
    }
  };
  const fetchInquiries = async () => {
    if (!adminToken) return;
    setLoadingSection(true);
    setErrorMessage(null);
    try {
      const data = await apiCall("/api/admin/inquiries", {
        method: "GET",
        auth: true
      });
      setInquiries(data);
    } catch (error) {
      handleApiError(error);
    } finally {
      setLoadingSection(false);
    }
  };
  const fetchAdminUsers = async () => {
    if (!adminToken) return;
    setLoadingSection(true);
    setErrorMessage(null);
    try {
      const data = await apiCall("/api/admin/users", {
        method: "GET",
        auth: true
      });
      setAdminUsers(data);
    } catch (err) {
      handleApiError(err);
    } finally {
      setLoadingSection(false);
    }
  };
  const addImageFiles = (files) => {
    if (!files) return;
    setImageFiles((current) => [...current, ...Array.from(files)]);
  };
  const addImageUrl = () => {
    if (!imageUrlInput.trim()) return;
    setImageUrls((current) => [...current, imageUrlInput.trim()]);
    setImageUrlInput("");
  };
  const removeNewImage = (index) => {
    setImageFiles((current) => current.filter((_, idx) => idx !== index));
  };
  const removeImageUrl = (index) => {
    setImageUrls((current) => current.filter((_, idx) => idx !== index));
  };
  const removeExistingImage = (imageId) => {
    if (!imageId) return;
    setProductImages((current) => current.filter((image) => image.id !== imageId));
    setDeletedImageIds((current) => [...current, imageId]);
  };
  const moveExistingImage = (imageId, direction) => {
    setProductImages((current) => {
      const currentIndex = current.findIndex((image) => image.id === imageId);
      if (currentIndex === -1) return current;
      const nextIndex = direction === "left" ? currentIndex - 1 : currentIndex + 1;
      if (nextIndex < 0 || nextIndex >= current.length) return current;
      const updated = [...current];
      const temp = updated[currentIndex];
      updated[currentIndex] = updated[nextIndex];
      updated[nextIndex] = temp;
      return updated;
    });
  };
  const handleCreateAdmin = async (e) => {
    setErrorMessage(null);
    setSuccessMessage(null);
    if (!newAdminUsername.trim() || !newAdminPassword) return setErrorMessage("Username and password are required.");
    setSaving(true);
    try {
      const data = await apiCall("/api/admin/users", {
        method: "POST",
        auth: true,
        body: JSON.stringify({
          username: newAdminUsername.trim(),
          password: newAdminPassword
        })
      });
      setAdminUsers((cur) => [data.user, ...cur]);
      setSuccessMessage("Sub admin created.");
      setNewAdminUsername("");
      setNewAdminPassword("");
    } catch (err) {
      handleApiError(err);
    } finally {
      setSaving(false);
    }
  };
  const handleDeleteAdmin = async (id) => {
    if (!confirm("Delete this admin user?")) return;
    setErrorMessage(null);
    setSuccessMessage(null);
    setLoadingSection(true);
    try {
      await apiCall(`/api/admin/users/${id}`, {
        method: "DELETE",
        auth: true
      });
      setAdminUsers((cur) => cur.filter((u) => u.id !== id));
      setSuccessMessage("Admin deleted.");
    } catch (err) {
      handleApiError(err);
    } finally {
      setLoadingSection(false);
    }
  };
  const resetForm = () => {
    setEditingProductId(null);
    setName("");
    setDescription("");
    setPrice("");
    setImageUrl("");
    setImageUrls([]);
    setImageUrlInput("");
    setImageFiles([]);
    setProductImages([]);
    setDeletedImageIds([]);
    setVideoUrl("");
  };
  const handleSectionChange = (section) => {
    setActiveSection(section);
    setErrorMessage(null);
    setSuccessMessage(null);
    if (section === "admin_users") {
      fetchAdminUsers();
    }
  };
  const resetBlogForm = () => {
    setEditingBlogId(null);
    setBlogTitle("");
    setBlogDescription("");
    setBlogContent("");
    setBlogCategory("");
    setBlogAuthor("");
    setBlogPublishDate("");
    setBlogBlocks([]);
    setBlogBlockType("hero-image");
    setBlogImageFile(null);
    setBlogImageUrl("");
    setBlogVideoUrl("");
  };
  const createEmptyBlock = (type) => {
    switch (type) {
      case "hero-image":
        return {
          type: "hero-image",
          image_url: "",
          caption: ""
        };
      case "text":
        return {
          type: "text",
          heading: "",
          subheading: "",
          paragraph: ""
        };
      case "quote":
        return {
          type: "quote",
          text: "",
          author: ""
        };
      case "video":
        return {
          type: "video",
          url: "",
          source: "url",
          caption: ""
        };
      case "image-gallery":
        return {
          type: "image-gallery",
          images: []
        };
      case "heading":
        return {
          type: "heading",
          text: "",
          level: "h2"
        };
      case "paragraph":
        return {
          type: "paragraph",
          text: ""
        };
      case "two-column":
        return {
          type: "two-column",
          image_url: "",
          title: "",
          text: "",
          image_position: "left"
        };
      case "divider":
        return {
          type: "divider"
        };
      default:
        return {
          type: "paragraph",
          text: ""
        };
    }
  };
  const addBlogBlock = (type) => {
    setBlogBlocks((current) => [...current, createEmptyBlock(type)]);
  };
  const updateBlogBlock = (index, update) => {
    setBlogBlocks((current) => current.map((block, idx) => idx === index ? {
      ...block,
      ...update
    } : block));
  };
  const removeBlogBlock = (index) => {
    setBlogBlocks((current) => current.filter((_, idx) => idx !== index));
  };
  const moveBlogBlock = (index, direction) => {
    setBlogBlocks((current) => {
      const nextIndex = direction === "up" ? index - 1 : index + 1;
      if (nextIndex < 0 || nextIndex >= current.length) return current;
      const nextBlocks = [...current];
      [nextBlocks[index], nextBlocks[nextIndex]] = [nextBlocks[nextIndex], nextBlocks[index]];
      return nextBlocks;
    });
  };
  const addGalleryImage = (blockIndex, image) => {
    setBlogBlocks((current) => current.map((block, idx) => idx === blockIndex && block.type === "image-gallery" ? {
      ...block,
      images: [...block.images, image]
    } : block));
  };
  const updateGalleryImage = (blockIndex, imageIndex, update) => {
    setBlogBlocks((current) => current.map((block, idx) => {
      if (idx !== blockIndex || block.type !== "image-gallery") return block;
      const images = block.images.map((image, imgIdx) => imgIdx === imageIndex ? {
        ...image,
        ...update
      } : image);
      return {
        ...block,
        images
      };
    }));
  };
  const updateBlogBlockFile = (blockIndex, file) => {
    setBlogBlocks((current) => current.map((block, idx) => idx === blockIndex ? {
      ...block,
      localFile: file
    } : block));
  };
  const updateGalleryImageFile = (blockIndex, imageIndex, file) => {
    setBlogBlocks((current) => current.map((block, idx) => {
      if (idx !== blockIndex || block.type !== "image-gallery") return block;
      const images = block.images.map((image, imgIdx) => imgIdx === imageIndex ? {
        ...image,
        localFile: file
      } : image);
      return {
        ...block,
        images
      };
    }));
  };
  const serializeBlogBlocks = (blocks) => {
    return blocks.map((block) => {
      const base = {
        ...block
      };
      delete base.localFile;
      if (base.type === "hero-image" || base.type === "two-column") {
        delete base.upload_field;
      }
      if (base.type === "video") {
        delete base.upload_field;
      }
      if (base.type === "image-gallery") {
        base.images = base.images.map((image) => {
          const item = {
            ...image
          };
          delete item.localFile;
          delete item.upload_field;
          return item;
        });
      }
      return base;
    });
  };
  const removeGalleryImage = (blockIndex, imageIndex) => {
    setBlogBlocks((current) => current.map((block, idx) => {
      if (idx !== blockIndex || block.type !== "image-gallery") return block;
      const images = block.images.filter((_, imgIdx) => imgIdx !== imageIndex);
      return {
        ...block,
        images
      };
    }));
  };
  const handleBlogSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);
    if (!adminToken) return window.location.href = "/login";
    if (!blogTitle.trim()) return setErrorMessage("Title is required.");
    setSaving(true);
    try {
      const form = new FormData();
      form.append("title", blogTitle.trim());
      form.append("description", blogDescription.trim());
      form.append("author", blogAuthor.trim());
      form.append("publish_date", blogPublishDate);
      form.append("category", blogCategory);
      form.append("image_url", blogImageUrl);
      form.append("video_url", blogVideoUrl.trim());
      let submittedBlocks = serializeBlogBlocks(blogBlocks.length ? blogBlocks : [{
        type: "paragraph",
        text: blogContent
      }]);
      blogBlocks.forEach((block, blockIndex) => {
        if (block.type === "hero-image" && block.localFile) {
          const field = `block_image_${blockIndex}`;
          form.append(field, block.localFile);
          submittedBlocks = submittedBlocks.map((item, idx) => {
            if (idx !== blockIndex) return item;
            return {
              ...item,
              upload_field: field,
              image_url: item.image_url || void 0
            };
          });
        }
        if (block.type === "two-column" && block.localFile) {
          const field = `block_two_column_${blockIndex}`;
          form.append(field, block.localFile);
          submittedBlocks = submittedBlocks.map((item, idx) => {
            if (idx !== blockIndex) return item;
            return {
              ...item,
              upload_field: field,
              image_url: item.image_url || void 0
            };
          });
        }
        if (block.type === "video" && block.localFile) {
          const field = `block_video_${blockIndex}`;
          form.append(field, block.localFile);
          submittedBlocks = submittedBlocks.map((item, idx) => {
            if (idx !== blockIndex) return item;
            return {
              ...item,
              upload_field: field,
              url: item.url || void 0
            };
          });
        }
        if (block.type === "image-gallery") {
          const gallery = block.images || [];
          gallery.forEach((image, imageIndex) => {
            if (image.localFile) {
              const field = `block_gallery_${blockIndex}_${imageIndex}`;
              form.append(field, image.localFile);
              submittedBlocks = submittedBlocks.map((item, idx) => {
                if (idx !== blockIndex) return item;
                return {
                  ...item,
                  images: item.images.map((img, imgIdx) => {
                    if (imgIdx !== imageIndex) return img;
                    return {
                      ...img,
                      upload_field: field,
                      image_url: img.image_url || void 0
                    };
                  })
                };
              });
            }
          });
        }
      });
      form.append("content", JSON.stringify(submittedBlocks));
      const endpoint = editingBlogId ? `/api/admin/blogs/${editingBlogId}` : `/api/admin/blogs`;
      const method = editingBlogId ? "PUT" : "POST";
      const token = localStorage.getItem("iqnaax_token");
      const res = await fetch(`${API_CONFIG.BASE_URL}${endpoint}`, {
        method,
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: form
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err?.error || `Error ${res.status}`);
      }
      const data = await res.json();
      if (editingBlogId) {
        setBlogs((cur) => cur.map((b) => b.id === editingBlogId ? data.blog : b));
        setSuccessMessage("Blog updated successfully.");
      } else {
        setBlogs((cur) => [data.blog, ...cur]);
        setSuccessMessage("Blog created successfully.");
      }
      resetBlogForm();
    } catch (err) {
      handleApiError(err);
    } finally {
      setSaving(false);
    }
  };
  const handleEditBlog = (b) => {
    setEditingBlogId(b.id);
    setBlogTitle(b.title || "");
    setBlogDescription(b.description || "");
    setBlogCategory(b.category || "");
    setBlogAuthor(b.author || "");
    setBlogPublishDate(b.publish_date || "");
    setBlogImageUrl(b.image_url || "");
    setBlogVideoUrl(b.video_url || "");
    const blocks = Array.isArray(b.content) ? b.content : [];
    if (blocks.length) {
      setBlogBlocks(blocks);
    } else {
      const fallbackBlocks = [];
      if (b.image_full_url) {
        fallbackBlocks.push({
          type: "hero-image",
          image_url: b.image_full_url,
          caption: ""
        });
      }
      if (typeof b.content === "string" && b.content.trim()) {
        fallbackBlocks.push({
          type: "paragraph",
          text: b.content
        });
      }
      setBlogBlocks(fallbackBlocks);
    }
  };
  const handleDeleteBlog = (id) => {
    setPendingDelete({
      type: "blog",
      id,
      title: "Delete Blog",
      message: "Are you sure you want to delete this blog?"
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);
    if (!name.trim()) {
      setErrorMessage("Product name is required.");
      return;
    }
    const priceValue = Number(price);
    if (Number.isNaN(priceValue) || priceValue < 0) {
      setErrorMessage("Price must be a valid number.");
      return;
    }
    if (!adminToken) {
      window.location.href = "/login";
      return;
    }
    setSaving(true);
    try {
      const endpoint = editingProductId ? `${API_CONFIG.ENDPOINTS.PRODUCTS}/${editingProductId}` : API_CONFIG.ENDPOINTS.PRODUCTS;
      const method = editingProductId ? "PUT" : "POST";
      const formData = new FormData();
      formData.append("name", name.trim());
      formData.append("description", description.trim());
      formData.append("price", String(priceValue));
      formData.append("image_url", imageUrl.trim());
      formData.append("video_url", videoUrl.trim());
      if (imageUrls.length > 0) {
        formData.append("image_urls", JSON.stringify(imageUrls));
      }
      if (deletedImageIds.length > 0) {
        formData.append("deleted_image_ids", JSON.stringify(deletedImageIds));
      }
      const orderedIds = productImages.map((image) => image.id).filter(Boolean);
      if (orderedIds.length > 0) {
        formData.append("image_order", JSON.stringify(orderedIds));
      }
      imageFiles.forEach((file) => {
        formData.append("images", file);
      });
      const response = await apiCall(endpoint, {
        method,
        auth: true,
        body: formData
      });
      const product = response.product;
      if (editingProductId) {
        setProducts((current) => current.map((item) => item.id === editingProductId ? product : item));
        setSuccessMessage("Product updated successfully.");
      } else {
        setProducts((current) => [product, ...current]);
        setSuccessMessage("Product created successfully.");
      }
      resetForm();
      fetchStats();
    } catch (error) {
      handleApiError(error);
    } finally {
      setSaving(false);
    }
  };
  const handleEdit = (product) => {
    const existingProductImages = product.images?.filter((image) => image.id != null) ?? [];
    setEditingProductId(product.id);
    setName(product.name);
    setDescription(product.description);
    setPrice(String(product.price));
    setImageUrl(product.image_url || "");
    setImageUrls(existingProductImages.length ? [] : product.image_url ? [product.image_url] : []);
    setProductImages(existingProductImages);
    setImageUrlInput("");
    setImageFiles([]);
    setDeletedImageIds([]);
    setVideoUrl(product.video_url || "");
    setSuccessMessage(null);
    setErrorMessage(null);
  };
  const handleDeleteProduct = (productId) => {
    if (!adminToken) {
      window.location.href = "/login";
      return;
    }
    setPendingDelete({
      type: "product",
      id: productId,
      title: "Delete Product",
      message: "Are you sure you want to delete this product?"
    });
  };
  const handleDeleteInquiry = (inquiryId) => {
    if (!adminToken) {
      window.location.href = "/login";
      return;
    }
    setPendingDelete({
      type: "inquiry",
      id: inquiryId,
      title: "Delete Inquiry",
      message: "Are you sure you want to delete this inquiry?"
    });
  };
  const confirmDelete = async () => {
    if (!pendingDelete || !adminToken) {
      setPendingDelete(null);
      return;
    }
    setErrorMessage(null);
    setSuccessMessage(null);
    if (pendingDelete.type === "product") {
      setSaving(true);
    } else {
      setLoadingSection(true);
    }
    try {
      if (pendingDelete.type === "product") {
        await apiCall(`${API_CONFIG.ENDPOINTS.PRODUCTS}/${pendingDelete.id}`, {
          method: "DELETE",
          auth: true
        });
        setProducts((current) => current.filter((product) => product.id !== pendingDelete.id));
        setSuccessMessage("Product deleted successfully.");
        if (editingProductId === pendingDelete.id) {
          resetForm();
        }
      } else if (pendingDelete.type === "inquiry") {
        await apiCall(`/api/admin/inquiries/${pendingDelete.id}`, {
          method: "DELETE",
          auth: true
        });
        setInquiries((current) => current.filter((item) => item.id !== pendingDelete.id));
        setSuccessMessage("Inquiry deleted successfully.");
      } else if (pendingDelete.type === "blog") {
        await apiCall(`/api/admin/blogs/${pendingDelete.id}`, {
          method: "DELETE",
          auth: true
        });
        setBlogs((current) => current.filter((b) => b.id !== pendingDelete.id));
        setSuccessMessage("Blog deleted successfully.");
      }
      fetchStats();
    } catch (error) {
      handleApiError(error);
    } finally {
      setSaving(false);
      setLoadingSection(false);
      setPendingDelete(null);
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("iqnaax_token");
    localStorage.removeItem("iqnaax_admin_username");
    window.location.href = "/login";
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-40 pb-16 container mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 xl:grid-cols-[260px_minmax(0,1fr)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "rounded-3xl border border-border bg-card p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm uppercase tracking-widest text-primary font-medium", children: "Admin" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 text-3xl font-semibold text-foreground", children: "Dashboard" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: adminUsername })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "space-y-2", children: [
          [{
            label: "Dashboard",
            value: "dashboard"
          }, {
            label: "Products",
            value: "products"
          }, {
            label: "Inquiries",
            value: "inquiries"
          }, {
            label: "Blogs",
            value: "blogs"
          }].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => handleSectionChange(item.value), className: `w-full rounded-3xl px-4 py-3 text-left text-sm font-medium transition-all ${activeSection === item.value ? "bg-foreground text-background" : "border border-border bg-background text-foreground hover:border-foreground"}`, children: item.label }, item.value)),
          adminRole === "super_admin" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => handleSectionChange("admin_users"), className: `w-full rounded-3xl px-4 py-3 text-left text-sm font-medium transition-all ${activeSection === "admin_users" ? "bg-foreground text-background" : "border border-border bg-background text-foreground hover:border-foreground"}`, children: "Admin Management" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: handleLogout, className: "w-full rounded-3xl bg-destructive px-4 py-3 text-sm font-medium text-destructive-foreground hover:bg-destructive/90 transition-all", children: "Logout" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "rounded-3xl border border-border bg-card p-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm uppercase tracking-widest text-primary font-medium", children: "Admin Panel" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-3xl font-semibold text-foreground", children: activeSection === "dashboard" ? "Overview" : activeSection === "products" ? "Product Management" : activeSection === "inquiries" ? "Inquiry Management" : "Blog Management" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: activeSection === "dashboard" ? "Review key metrics and site activity." : activeSection === "products" ? "Add, edit and delete products in the catalog." : activeSection === "inquiries" ? "Browse and manage customer inquiries." : "Create, edit and remove blog posts for the public site." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground", children: adminUsername }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-full text-xs font-medium px-3 py-1 bg-muted/20 text-muted-foreground", children: adminRole === "super_admin" ? "SUPER ADMIN" : "SUB ADMIN" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: handleLogout, className: "rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background hover:bg-primary transition-all", children: "Logout" })
          ] })
        ] }),
        activeSection === "dashboard" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 xl:grid-cols-3", children: [{
          title: "Total Products",
          value: stats.total_products,
          description: "All products in inventory."
        }, {
          title: "Total Inquiries",
          value: stats.total_inquiries,
          description: "All contact submissions received."
        }, {
          title: "Today's Inquiries",
          value: stats.todays_inquiries,
          description: "Submissions created today."
        }].map((card) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-6 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: card.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-4xl font-semibold text-foreground", children: loadingSection ? "—" : card.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground", children: card.description })
        ] }, card.title)) }),
        activeSection === "blogs" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 md:flex-row md:items-center md:justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "Create or Edit Blog" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Publish content to your public blog." })
              ] }),
              successMessage && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-emerald-600 font-medium", children: successMessage }),
              errorMessage && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-destructive font-medium", children: errorMessage })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "mt-8 space-y-6", onSubmit: handleBlogSubmit, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Title" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: blogTitle, onChange: (e) => setBlogTitle(e.target.value), className: "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:border-primary", placeholder: "Enter blog title", required: true })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Category" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: blogCategory, onChange: (e) => setBlogCategory(e.target.value), className: "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:border-primary", placeholder: "Category" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Author" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: blogAuthor, onChange: (e) => setBlogAuthor(e.target.value), className: "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:border-primary", placeholder: "Author name" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Publish Date" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "date", value: blogPublishDate, onChange: (e) => setBlogPublishDate(e.target.value), className: "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:border-primary" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Short Description" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: blogDescription, onChange: (e) => setBlogDescription(e.target.value), className: "mt-2 w-full min-h-[80px] rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:border-primary", placeholder: "Short summary shown on listings" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-background p-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 md:flex-row md:items-center md:justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm uppercase tracking-widest text-muted-foreground", children: "Content Builder" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Add blocks in any order to compose a long-form blog or vlog page." })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 sm:flex-row", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: blogBlockType, onChange: (e) => setBlogBlockType(e.target.value), className: "rounded-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "hero-image", children: "Hero Image" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "heading", children: "Heading" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "text", children: "Text Block" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "paragraph", children: "Paragraph" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "quote", children: "Quote" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "image-gallery", children: "Gallery" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "video", children: "Video" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "two-column", children: "Two Column" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "divider", children: "Divider" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => addBlogBlock(blogBlockType), className: "inline-flex items-center justify-center rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background hover:bg-primary transition-all", children: "Add Block" })
                  ] })
                ] }),
                blogBlocks.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-sm text-muted-foreground", children: "Start by adding a block. A hero image or heading is great first content." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 space-y-6", children: blogBlocks.map((block, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-foreground", children: [
                        "Block ",
                        index + 1,
                        ": ",
                        block.type.replace(/-/g, " ")
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Arrange content blocks for the article page." })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => moveBlogBlock(index, "up"), disabled: index === 0, className: "rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-foreground hover:bg-accent disabled:opacity-50", children: "Move Up" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => moveBlogBlock(index, "down"), disabled: index === blogBlocks.length - 1, className: "rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-foreground hover:bg-accent disabled:opacity-50", children: "Move Down" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => removeBlogBlock(index), className: "rounded-full bg-destructive px-4 py-2 text-xs font-medium text-destructive-foreground hover:bg-destructive/90", children: "Remove" })
                    ] })
                  ] }),
                  block.type === "hero-image" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-6 md:grid-cols-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Local Image" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", accept: "image/*", onChange: (e) => updateBlogBlockFile(index, e.target.files ? e.target.files[0] : null), className: "mt-2 w-full rounded-xl border border-border bg-background px-4 py-2 focus:outline-none focus:border-primary" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Remote Image URL" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "url", value: block.image_url || "", onChange: (e) => updateBlogBlock(index, {
                        image_url: e.target.value
                      }), className: "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:border-primary", placeholder: "https://example.com/hero.jpg" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Caption" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: block.caption || "", onChange: (e) => updateBlogBlock(index, {
                        caption: e.target.value
                      }), className: "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:border-primary", placeholder: "Optional hero caption" })
                    ] })
                  ] }),
                  block.type === "heading" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-6 md:grid-cols-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Heading Text" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: block.text, onChange: (e) => updateBlogBlock(index, {
                        text: e.target.value
                      }), className: "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:border-primary", placeholder: "Heading text", required: true })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Heading Level" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: block.level, onChange: (e) => updateBlogBlock(index, {
                        level: e.target.value
                      }), className: "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:border-primary", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "h1", children: "H1" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "h2", children: "H2" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "h3", children: "H3" })
                      ] })
                    ] })
                  ] }),
                  block.type === "text" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Heading" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: block.heading || "", onChange: (e) => updateBlogBlock(index, {
                        heading: e.target.value
                      }), className: "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:border-primary", placeholder: "Section heading" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Subheading" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: block.subheading || "", onChange: (e) => updateBlogBlock(index, {
                        subheading: e.target.value
                      }), className: "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:border-primary", placeholder: "Section subheading" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Paragraph" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: block.paragraph || "", onChange: (e) => updateBlogBlock(index, {
                        paragraph: e.target.value
                      }), className: "mt-2 w-full min-h-[120px] rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:border-primary", placeholder: "Write paragraph content here" })
                    ] })
                  ] }),
                  block.type === "paragraph" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Paragraph" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: block.text, onChange: (e) => updateBlogBlock(index, {
                      text: e.target.value
                    }), className: "mt-2 w-full min-h-[140px] rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:border-primary", placeholder: "A paragraph is ideal for long-form text." })
                  ] }),
                  block.type === "quote" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Quote" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: block.text, onChange: (e) => updateBlogBlock(index, {
                        text: e.target.value
                      }), className: "mt-2 w-full min-h-[120px] rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:border-primary", placeholder: "Write the quote text" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Author" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: block.author || "", onChange: (e) => updateBlogBlock(index, {
                        author: e.target.value
                      }), className: "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:border-primary", placeholder: "Quote author" })
                    ] })
                  ] }),
                  block.type === "video" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-6 md:grid-cols-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Video URL" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "url", value: block.url || "", onChange: (e) => updateBlogBlock(index, {
                        url: e.target.value
                      }), className: "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:border-primary", placeholder: "YouTube, Vimeo or direct video URL" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Local Video File" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", accept: "video/mp4,video/webm", onChange: (e) => updateBlogBlockFile(index, e.target.files ? e.target.files[0] : null), className: "mt-2 w-full rounded-xl border border-border bg-background px-4 py-2 focus:outline-none focus:border-primary" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Caption" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: block.caption || "", onChange: (e) => updateBlogBlock(index, {
                        caption: e.target.value
                      }), className: "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:border-primary", placeholder: "Optional video caption" })
                    ] })
                  ] }),
                  block.type === "image-gallery" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => addGalleryImage(index, {
                      image_url: "",
                      alt: ""
                    }), className: "rounded-full bg-foreground px-4 py-3 text-sm font-medium text-background hover:bg-primary transition-all", children: "Add Gallery Image" }),
                    block.images.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Add images by URL or upload them directly." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: block.images.map((image, imageIndex) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-background p-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Image URL" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "url", value: image.image_url || "", onChange: (e) => updateGalleryImage(index, imageIndex, {
                            image_url: e.target.value
                          }), className: "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:border-primary", placeholder: "https://example.com/gallery.jpg" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Alt Text" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: image.alt || "", onChange: (e) => updateGalleryImage(index, imageIndex, {
                            alt: e.target.value
                          }), className: "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:border-primary", placeholder: "Image description" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Upload Image" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", accept: "image/*", onChange: (e) => updateGalleryImageFile(index, imageIndex, e.target.files ? e.target.files[0] : null), className: "mt-2 w-full rounded-xl border border-border bg-background px-4 py-2 focus:outline-none focus:border-primary" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => removeGalleryImage(index, imageIndex), className: "mt-4 rounded-full bg-destructive px-4 py-2 text-xs font-medium text-destructive-foreground hover:bg-destructive/90", children: "Remove Image" })
                    ] }, imageIndex)) })
                  ] }),
                  block.type === "two-column" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-6 md:grid-cols-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Local Image" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", accept: "image/*", onChange: (e) => updateBlogBlockFile(index, e.target.files ? e.target.files[0] : null), className: "mt-2 w-full rounded-xl border border-border bg-background px-4 py-2 focus:outline-none focus:border-primary" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Remote Image URL" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "url", value: block.image_url || "", onChange: (e) => updateBlogBlock(index, {
                        image_url: e.target.value
                      }), className: "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:border-primary", placeholder: "https://example.com/section.jpg" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Section Title" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: block.title || "", onChange: (e) => updateBlogBlock(index, {
                        title: e.target.value
                      }), className: "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:border-primary", placeholder: "Two column title" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Image Position" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: block.image_position || "left", onChange: (e) => updateBlogBlock(index, {
                        image_position: e.target.value
                      }), className: "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:border-primary", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "left", children: "Left" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "right", children: "Right" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Section Text" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: block.text || "", onChange: (e) => updateBlogBlock(index, {
                        text: e.target.value
                      }), className: "mt-2 w-full min-h-[140px] rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:border-primary", placeholder: "Describe this section." })
                    ] })
                  ] }),
                  block.type === "divider" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 rounded-3xl border border-dashed border-border bg-muted/10 p-6 text-sm text-muted-foreground", children: "Divider block: inserted to separate sections visually." })
                ] }, index)) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: saving, className: "inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:bg-primary transition-all disabled:opacity-60", children: saving ? "Saving…" : editingBlogId ? "Update Blog" : "Create Blog" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                  editingBlogId && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: resetBlogForm, className: "inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-accent transition-all", children: "Reset" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: fetchBlogs, className: "inline-flex items-center justify-center rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-all", children: "Refresh" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2 md:flex-row md:items-center md:justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "Blog Posts" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "List of published blog posts and actions." })
            ] }) }),
            loadingSection ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-sm text-muted-foreground", children: "Loading blogs…" }) : blogs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-sm text-muted-foreground", children: "No blog posts found." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full text-left divide-y divide-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "border-b border-border bg-background text-sm uppercase tracking-widest text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-4", children: "ID" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-4", children: "Preview" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-4", children: "Title" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-4", children: "Category" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-4", children: "Created" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-4", children: "Actions" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border", children: blogs.map((b) => {
                const hasImage = b.image_full_url || b.image_url || b.image_path || b.content?.some((block) => {
                  if (block.type === "hero-image" && (block.image_url || block.image_path)) return true;
                  if (block.type === "image-gallery" && block.images?.some((img) => img.image_url || img.image_path)) return true;
                  if (block.type === "two-column" && (block.image_url || block.image_path)) return true;
                  return false;
                });
                const initials = b.title.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase();
                return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-muted/50 transition-colors", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-4 text-sm font-medium text-foreground", children: [
                    "#",
                    b.id
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4", children: hasImage ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: b.image_full_url || (b.image_path ? `${API_CONFIG.BASE_URL}${b.image_path}` : b.image_url), alt: b.title, className: "h-16 w-24 rounded-xl object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-16 w-24 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm text-xs font-medium text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-[10px] font-bold text-white", children: initials || "📄" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px]", children: "Text" })
                  ] }) }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4 text-sm text-foreground", children: b.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4 text-sm", children: b.category || "—" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4 text-sm text-muted-foreground", children: b.created_at ? new Date(b.created_at).toLocaleDateString() : "—" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4 text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => handleEditBlog(b), className: "rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-foreground hover:bg-accent transition-all", children: "Edit" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => handleDeleteBlog(b.id), disabled: saving, className: "rounded-full bg-destructive px-4 py-2 text-xs font-medium text-destructive-foreground hover:bg-destructive/90 transition-all disabled:opacity-60", children: "Delete" })
                  ] }) })
                ] }, b.id);
              }) })
            ] }) })
          ] })
        ] }),
        activeSection === "admin_users" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2 md:flex-row md:items-center md:justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "Admin Management" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Create and manage sub-admin accounts." })
          ] }) }),
          adminRole !== "super_admin" ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-sm text-destructive", children: "Access denied" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "grid gap-4 md:grid-cols-3", onSubmit: (e) => {
              e.preventDefault();
              handleCreateAdmin();
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Username" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: newAdminUsername, onChange: (e) => setNewAdminUsername(e.target.value), className: "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:border-primary", placeholder: "username" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Password" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", value: newAdminPassword, onChange: (e) => setNewAdminPassword(e.target.value), className: "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:border-primary", placeholder: "password" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: saving, className: "w-full inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:bg-primary transition-all disabled:opacity-60", children: saving ? "Saving…" : "Create Sub Admin" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full text-left divide-y divide-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "border-b border-border bg-background text-sm uppercase tracking-widest text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-4", children: "ID" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-4", children: "Username" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-4", children: "Role" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-4", children: "Created" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-4", children: "Last Login" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-4", children: "Actions" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border", children: adminUsers.map((u) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-muted/50 transition-colors", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-4 text-sm font-medium text-foreground", children: [
                  "#",
                  u.id
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4 text-sm text-foreground", children: u.username }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4 text-sm", children: u.role }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4 text-sm text-muted-foreground", children: u.created_at ? new Date(u.created_at).toLocaleString() : "—" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4 text-sm text-muted-foreground", children: u.last_login ? new Date(u.last_login).toLocaleString() : "—" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4 text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => handleDeleteAdmin(u.id), className: "rounded-full bg-destructive px-4 py-2 text-xs font-medium text-destructive-foreground hover:bg-destructive/90 transition-all", children: "Delete" }) }) })
              ] }, u.id)) })
            ] }) })
          ] })
        ] }) }),
        activeSection === "products" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 md:flex-row md:items-center md:justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "Add or Update Product" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Use the form below to manage your product catalog." })
              ] }),
              successMessage && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-emerald-600 font-medium", children: successMessage }),
              errorMessage && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-destructive font-medium", children: errorMessage })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "mt-8 space-y-6", onSubmit: handleSubmit, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Product Name" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: name, onChange: (event) => setName(event.target.value), className: "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:border-primary", placeholder: "Enter product name", required: true })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Price" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", value: price, onChange: (event) => setPrice(event.target.value), className: "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:border-primary", placeholder: "0.00", step: "0.01", min: "0", required: true })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Description" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: description, onChange: (event) => setDescription(event.target.value), className: "mt-2 w-full min-h-[120px] rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:border-primary", placeholder: "Write a short product description" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Product images" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", multiple: true, accept: "image/*", onChange: (event) => addImageFiles(event.target.files), className: "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:border-primary" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Upload multiple images or drag-and-drop additional files into the form." }),
                  (productImages.length > 0 || imageFiles.length > 0 || imageUrls.length > 0) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-4", children: [
                    productImages.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Existing gallery images" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 sm:grid-cols-2", children: productImages.map((image, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-background p-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: image.image_full_url || image.image_url, alt: `Product image ${idx + 1}`, className: "h-28 w-full rounded-2xl object-cover" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex flex-wrap gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => moveExistingImage(image.id, "left"), disabled: idx === 0, className: "rounded-full border border-border bg-background px-3 py-2 text-[11px] font-medium text-foreground hover:bg-accent transition-all disabled:opacity-40", children: "Move left" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => moveExistingImage(image.id, "right"), disabled: idx === productImages.length - 1, className: "rounded-full border border-border bg-background px-3 py-2 text-[11px] font-medium text-foreground hover:bg-accent transition-all disabled:opacity-40", children: "Move right" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => removeExistingImage(image.id), className: "rounded-full bg-destructive px-3 py-2 text-[11px] font-medium text-destructive-foreground hover:bg-destructive/90 transition-all", children: "Delete" })
                        ] })
                      ] }, image.id ?? idx)) })
                    ] }),
                    imageFiles.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "New files to upload" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 sm:grid-cols-2", children: imageFiles.map((file, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-background p-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground truncate", children: file.name }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                          Math.round(file.size / 1024),
                          " KB"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => removeNewImage(idx), className: "mt-3 rounded-full border border-border bg-background px-3 py-2 text-[11px] font-medium text-foreground hover:bg-accent transition-all", children: "Remove" })
                      ] }, `${file.name}-${idx}`)) })
                    ] }),
                    imageUrls.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "External image URLs" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-2", children: imageUrls.map((url, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-3xl border border-border bg-background px-3 py-2 text-sm text-foreground", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: url }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => removeImageUrl(idx), className: "text-xs font-medium text-destructive hover:text-destructive-foreground", children: "Remove" })
                      ] }, `${url}-${idx}`)) })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Cover image URL" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "url", value: imageUrl, onChange: (event) => setImageUrl(event.target.value), className: "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:border-primary", placeholder: "https://example.com/image.jpg" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Add gallery image URL" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "url", value: imageUrlInput, onChange: (event) => setImageUrlInput(event.target.value), className: "w-full rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:border-primary", placeholder: "https://example.com/image2.jpg" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: addImageUrl, className: "inline-flex items-center justify-center rounded-full bg-foreground px-4 py-3 text-sm font-medium text-background hover:bg-primary transition-all", children: "Add" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Use a URL if you want remote images to appear in the gallery." })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Video URL" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "url", value: videoUrl, onChange: (event) => setVideoUrl(event.target.value), className: "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:border-primary", placeholder: "https://youtube.com/..." })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: saving, className: "inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:bg-primary transition-all disabled:opacity-60", children: saving ? "Saving…" : editingProductId ? "Update Product" : "Add Product" }),
                editingProductId && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: resetForm, className: "inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-accent transition-all", children: "Reset" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 md:flex-row md:items-center md:justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "Product Catalog" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Review, edit, or remove products from the store." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: fetchProducts, className: "inline-flex items-center justify-center rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-all", children: "Refresh List" })
            ] }),
            loadingSection ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-sm text-muted-foreground", children: "Loading products…" }) : products.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-sm text-muted-foreground", children: "No products available yet." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full text-left divide-y divide-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "border-b border-border bg-background text-sm uppercase tracking-widest text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-4", children: "ID" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-4", children: "Preview" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-4", children: "Name" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-4", children: "Price" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-4", children: "Created" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-4", children: "Actions" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border", children: products.map((product) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-muted/50 transition-colors", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-4 text-sm font-medium text-foreground", children: [
                  "#",
                  product.id
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4", children: product.images?.[0]?.image_full_url || product.image_url ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: product.images?.[0]?.image_full_url || product.image_url, alt: product.name, className: "h-16 w-24 rounded-xl object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-16 w-24 items-center justify-center rounded-xl border border-border text-[11px] uppercase tracking-[.18em] text-muted-foreground", children: "No image" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4 text-sm text-foreground", children: product.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-4 text-sm", children: [
                  "$",
                  Number(product.price).toFixed(2)
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4 text-sm text-muted-foreground", children: product.created_at ? new Date(product.created_at).toLocaleDateString() : "—" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4 text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => handleEdit(product), className: "rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-foreground hover:bg-accent transition-all", children: "Edit" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => handleDeleteProduct(product.id), disabled: saving, className: "rounded-full bg-destructive px-4 py-2 text-xs font-medium text-destructive-foreground hover:bg-destructive/90 transition-all disabled:opacity-60", children: "Delete" })
                ] }) })
              ] }, product.id)) })
            ] }) })
          ] })
        ] }),
        activeSection === "inquiries" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 md:flex-row md:items-center md:justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "Inquiry Submissions" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Review customer submissions and remove entries as needed." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: fetchInquiries, className: "inline-flex items-center justify-center rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-all", children: "Refresh Inquiries" })
          ] }),
          loadingSection ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-sm text-muted-foreground", children: "Loading inquiries…" }) : inquiries.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-sm text-muted-foreground", children: "No inquiry submissions found." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full text-left divide-y divide-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "border-b border-border bg-background text-sm uppercase tracking-widest text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-4", children: "Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-4", children: "Company" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-4", children: "Email" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-4", children: "Phone" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-4", children: "Inquiry Type" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-4", children: "Date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-4", children: "Actions" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border", children: inquiries.map((inquiry) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-muted/50 transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4 text-sm text-foreground", children: inquiry.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4 text-sm", children: inquiry.organization || "—" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4 text-sm", children: inquiry.email }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4 text-sm", children: inquiry.phone || "—" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4 text-sm", children: inquiry.inquiry_type || "General" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4 text-sm text-muted-foreground", children: inquiry.created_at ? new Date(inquiry.created_at).toLocaleString() : "—" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4 text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setViewingInquiry(inquiry), className: "rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-foreground hover:bg-accent transition-all", children: "View" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => handleDeleteInquiry(inquiry.id), className: "rounded-full bg-destructive px-4 py-2 text-xs font-medium text-destructive-foreground hover:bg-destructive/90 transition-all", children: "Delete" })
              ] }) })
            ] }, inquiry.id)) })
          ] }) })
        ] })
      ] })
    ] }) }),
    pendingDelete && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-background/60 px-4 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full max-w-md rounded-3xl border border-border bg-card p-8 shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold", children: pendingDelete.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: pendingDelete.message })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 sm:flex-row sm:justify-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setPendingDelete(null), className: "rounded-full border border-border bg-background px-5 py-3 text-sm font-medium text-foreground hover:bg-accent transition-all", children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: confirmDelete, className: "rounded-full bg-destructive px-5 py-3 text-sm font-medium text-destructive-foreground hover:bg-destructive/90 transition-all", children: "Confirm Delete" })
      ] })
    ] }) }) }),
    viewingInquiry && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-background/60 px-4 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-2xl rounded-3xl border border-border bg-card p-8 shadow-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold", children: "Inquiry Details" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Review the full message and contact information." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setViewingInquiry(null), className: "rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-all", children: "Close" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-6 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm font-medium text-foreground", children: viewingInquiry.name })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Company" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm font-medium text-foreground", children: viewingInquiry.organization || "—" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm font-medium text-foreground", children: viewingInquiry.email })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Phone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm font-medium text-foreground", children: viewingInquiry.phone || "—" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Inquiry Type" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm font-medium text-foreground", children: viewingInquiry.inquiry_type || "General" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 rounded-3xl border border-border bg-background p-5 text-sm leading-relaxed text-foreground", children: viewingInquiry.message })
      ] })
    ] }) })
  ] });
}
export {
  Admin as component
};
