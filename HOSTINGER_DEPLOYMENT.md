Hostinger Deployment Steps for backend-node

This file describes the exact steps to deploy the Node + Express + SQLite backend on Hostinger so it runs the same API as locally.

Prerequisites
- Hostinger (Shared or VPS) with Node.js support (Node 18+ recommended).
- SSH or Git access to upload repo, or use Hostinger File Manager.
- Ensure plan allows writing files in project folder (uploads/ and data/ directories must be writable).

1) Files and repo
- Upload the `backend-node` folder (all files) to your Hostinger project folder.
- Keep `front` and other sibling folders if you need them, but `backend-node` must be the Node app root.

2) Environment variables (set in Hostinger Node.js app settings or `.env`)
- Create a `.env` file in `backend-node` or set via Hostinger UI with these keys:
  - `PORT` (optional) e.g. `5000`
  - `JWT_SECRET` (required in production) - generate a strong secret
  - `DATABASE_PATH` (optional) - default `data/iqnaax.db` (relative to `backend-node`)
  - `UPLOADS_DIR` (optional) - default `uploads` (relative to `backend-node`)
  - `SMTP_EMAIL` / `SMTP_PASSWORD` / etc. (if email features required)

Example `.env` (do NOT commit secrets):

PORT=5000
JWT_SECRET=change-me-to-a-strong-secret
DATABASE_PATH=./data/iqnaax.db
UPLOADS_DIR=uploads
SMTP_EMAIL=your@example.com
SMTP_PASSWORD=xxxx

3) Node.js version
- Choose Node 18+ (prefer Node 20+). Hostinger's Node.js app page allows selecting Node version.

4) Install dependencies
- SSH into the Hostinger project folder or use their terminal and run:

```bash
cd ~/path/to/backend-node
npm install --production
```

Notes:
- `cross-env` is included in `dependencies` so `npm start` works on Linux.

5) Build step (Hostinger runs `npm run build` during deployment)
- No backend build required; `package.json` contains a harmless `build` script:

```json
"build": "echo \"No backend build step required\""
```

Run:
```bash
npm run build
```

6) Start command
- Use Hostinger Node app "Start" command: `npm start`
- Alternatively use: `cross-env NODE_ENV=production node server.js`

7) File system permissions
- Ensure `uploads/` and `data/` directories are writable by the Node process. The server will create these automatically if missing.
- If you set `DATABASE_PATH` to a custom location, ensure the parent directories exist or the app can create them.

8) Verify database and uploads
- After start, the app will create the SQLite file at `DATABASE_PATH` and create `uploads/products`, `uploads/blogs`, `uploads/general`.
- Check logs for `Default admin user created` and `Server running on port` messages.

9) Ports and reverse proxy
- Hostinger will expose your app via a port or via their web router. Use the Hostinger Node.js panel to map a domain.
- Ensure your domain(s) `iqnaax.com`, `www.iqnaax.com`, `iqnaax.in`, `www.iqnaax.in` point to this app and are included in allowed CORS origins.

10) Health check and testing
- Open `https://your-hosting-domain/` → should return JSON `{ "status": "backend-node running" }`.
- Test APIs:
  - `GET /api/health`
  - `GET /api/products`
  - `GET /api/blogs`
  - `GET /api/uploads/products/<filename>`
  - `GET /api/uploads/blogs/<filename>`

11) Logs and troubleshooting
- Check Hostinger app logs for `Server running on port` and DB creation messages.
- If CORS errors appear, confirm request origin matches exactly one of the allowed origins (https + domain).

12) Restart and updates
- To deploy new code: push files and run `npm install` (if package.json changed), then `npm run build`, and restart the Hostinger Node app.

Security notes
- Keep `JWT_SECRET` secret and rotate if exposed.
- Back up `data/iqnaax.db` regularly.

Support
- If you get permission errors, ensure the Hostinger user running Node has write access in the project folder.

End of document.
