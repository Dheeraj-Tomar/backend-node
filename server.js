const path = require('path');
const fs = require('fs');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const healthRouter = require('./routes/health');
const adminRouter = require('./routes/admin');
const productsRouter = require('./routes/products');
const blogsRouteModule = require('./routes/blogs');
const contactRouter = require('./routes/contact');
const { initDatabase } = require('./database/init');
const { errorHandler } = require('./middleware/errorHandler');
const { authRequired } = require('./middleware/auth');

const app = express();
const PORT = process.env.PORT || 5000;

const UPLOADS_DIR = process.env.UPLOADS_DIR
  ? path.isAbsolute(process.env.UPLOADS_DIR)
    ? process.env.UPLOADS_DIR
    : path.join(__dirname, process.env.UPLOADS_DIR)
  : path.join(__dirname, 'uploads');
const UPLOADS_PRODUCTS_DIR = path.join(UPLOADS_DIR, 'products');
const UPLOADS_BLOGS_DIR = path.join(UPLOADS_DIR, 'blogs');
const UPLOADS_GENERAL_DIR = path.join(UPLOADS_DIR, 'general');
fs.mkdirSync(UPLOADS_PRODUCTS_DIR, { recursive: true });
fs.mkdirSync(UPLOADS_BLOGS_DIR, { recursive: true });
fs.mkdirSync(UPLOADS_GENERAL_DIR, { recursive: true });

// Configure CORS: restrict to specific domains in production
const allowedOrigins = process.env.NODE_ENV === 'production'
  ? [
      'https://iqnaax.com',
      'https://www.iqnaax.com',
      'https://iqnaax.in',
      'https://www.iqnaax.in',
    ]
  : true;
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins === true || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error('CORS policy does not allow access from the specified Origin.'));
  },
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(UPLOADS_DIR));

initDatabase();

app.use('/api/health', healthRouter);
app.use('/api/admin', adminRouter);
app.use('/api/products', productsRouter);
// mount public blogs routes at /api/blogs
app.use('/api/blogs', blogsRouteModule.publicRouter);
// mount admin blog routes at /api/admin/blogs
app.use('/api/admin/blogs', blogsRouteModule.adminRouter);
app.use('/api/contact', contactRouter);

// Serve React frontend (Vite) when built into `front/dist`
const clientDistPath = path.join(__dirname, 'front', 'dist');
if (fs.existsSync(clientDistPath)) {
  app.use(express.static(clientDistPath));

  // Fallback route for client-side routing (React Router)
  app.get('*', (req, res, next) => {
    // Let API routes respond normally
    if (req.path.startsWith('/api') || req.path.startsWith('/uploads')) return next();

    const indexHtml = path.join(clientDistPath, 'index.html');
    res.sendFile(indexHtml, (err) => {
      if (err) next(err);
    });
  });
}

// Serve product uploads at the same path used by the Flask backend: /api/uploads/products/:filename
app.get('/api/uploads/products/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(UPLOADS_PRODUCTS_DIR, filename);
  res.sendFile(filePath, (err) => {
    if (err) res.status(404).json({ error: 'File not found' });
  });
});

app.get('/', (req, res) => {
  res.json({ status: 'backend-node running' });
});

// Serve blog uploads compatible with Flask path: /api/uploads/blogs/:filename
app.get('/api/uploads/blogs/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(UPLOADS_BLOGS_DIR, filename);
  res.sendFile(filePath, (err) => {
    if (err) res.status(404).json({ error: 'File not found' });
  });
});

// 404 handler for API routes (and other non-client routes)
app.use((req, res) => {
  if (req.path.startsWith('/api') || req.path.startsWith('/uploads')) {
    return res.status(404).json({ error: 'Not found' });
  }

  // If client build isn't present, return JSON for root path
  res.status(404).json({ error: 'Not found' });
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});