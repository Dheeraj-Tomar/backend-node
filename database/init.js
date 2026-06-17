const { getDbConnection } = require('./index');
const { hashPassword } = require('../utils/crypto');

function initDatabase() {
  const db = getDbConnection();

  db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS admin_users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      role TEXT NOT NULL,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      last_login TEXT
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      description TEXT,
      price REAL,
      image_url TEXT,
      video_url TEXT,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS product_images (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      product_id INTEGER NOT NULL,
      image_path TEXT,
      image_url TEXT,
      sort_order INTEGER DEFAULT 0,
      FOREIGN KEY(product_id) REFERENCES products(id) ON DELETE CASCADE
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS blogs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      description TEXT,
      author TEXT,
      publish_date TEXT,
      content TEXT,
      image_path TEXT,
      image_url TEXT,
      video_url TEXT,
      category TEXT,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT DEFAULT CURRENT_TIMESTAMP
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS contacts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT,
      phone TEXT,
      organization TEXT,
      inquiry_type TEXT,
      message TEXT,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS otp_codes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT NOT NULL,
      code TEXT NOT NULL,
      expires_at TEXT NOT NULL,
      used INTEGER NOT NULL DEFAULT 0,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    )`);

    const defaultAdminUsername = 'admin123';
    const defaultAdminPassword = 'admin@123';
    const defaultAdminRole = 'super_admin';

    db.get(
      'SELECT id FROM admin_users WHERE username = ?',
      [defaultAdminUsername],
      (err, row) => {
        if (err) {
          console.error('Failed to check default admin user:', err);
          db.close();
          return;
        }

        if (!row) {
          const password_hash = hashPassword(defaultAdminPassword);
          db.run(
            'INSERT INTO admin_users (username, password_hash, role) VALUES (?, ?, ?)',
            [defaultAdminUsername, password_hash, defaultAdminRole],
            (insertErr) => {
              if (insertErr) {
                console.error('Failed to create default admin user:', insertErr);
              } else {
                console.log('Default admin user created:', defaultAdminUsername);
              }
              db.close();
            },
          );
        } else {
          db.close();
        }
      },
    );
  });
}

module.exports = {
  initDatabase,
};
