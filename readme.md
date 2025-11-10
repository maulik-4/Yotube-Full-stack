# MERN YouTube Clone

Minimal YouTube-like MERN application (server + client) for uploading, viewing and managing videos with user authentication and admin controls.

## Project structure
- server/ — Express API, controllers, models, middlewares
  - Controllers/ — route handlers
  - Modals/ — Mongoose models
  - middlewares/ — auth & admin checks (authentication.js, isAdmin.js)
  - Routes/ — API routes (user.js, video.js)
  - index.js — server entry
- client/ — Vite + React frontend (pages, components, utils)

Full folder tree:
- server
  - index.js
  - Controllers/
  - Modals/
  - middlewares/
  - Routes/
- client
  - src/
  - public/

## Features
- JWT-based authentication (stored in cookies)
- Device ID validation to tighten session security
- Block/unblock users (admin functionality)
- Video upload and viewing flow (frontend + backend)
- Separation of concerns: controllers, routes, middlewares, models

## Authentication middleware (server/middlewares/authentication.js)
The middleware:
- Reads JWT from `req.cookies.token`.
- Verifies token with `process.env.SECRET_KEY`.
- Loads user by ID from token; rejects if user not found or `user.isBlocked`.
- Optionally validates device identity: compares `decoded.deviceId` with header `X-Device-ID` or `req.cookies.deviceId`.
- Attaches the authenticated user object to `req.user` and calls `next()` on success.
This centralizes protection for routes that require authentication and provides additional session safety via device checks.

## Environment variables
Create a `.env` file in `server/` with at least:
- MONGO_URI=your_mongodb_connection_string
- SECRET_KEY=your_jwt_secret
- PORT=5000 (optional)

## Setup & run (development)
1. Server
   - Open a terminal (Windows):
     cd c:\Users\MAULIK\Desktop\WEBDEV\MERN\Youtube\server
     npm install
     npm run dev    # or `npm start` if configured
2. Client
   - Open another terminal:
     cd c:\Users\MAULIK\Desktop\WEBDEV\MERN\Youtube\client
     npm install
     npm run dev

Notes:
- Ensure MongoDB is running and `MONGO_URI` is correct.
- The server must use `cookie-parser` and CORS middleware configured to accept frontend origin so cookies are set/read correctly.

## Important usage details
- Cookies: authentication relies on cookies (`token`, optional `deviceId`). Configure client requests to send credentials (fetch/axios with `withCredentials: true`).
- Device header: when using device-checking, frontend should send `X-Device-ID` or set matching `deviceId` cookie.
- Admin checks: some routes use `isAdmin` middleware to restrict access.

## Common commands
- Install dependencies:
  - Server: cd server && npm install
  - Client: cd client && npm install
- Start development servers:
  - Server: cd server && npm run dev
  - Client: cd client && npm run dev

## Troubleshooting
- "Unauthorized - No token": check that the client sends cookies and server has `cookie-parser` configured; enable credentials in CORS.
- JWT verification errors: verify `SECRET_KEY` matches the signing secret.
- Blocked user: user document has `isBlocked` flag — unblock via admin route or DB.
- Device mismatch: ensure frontend sends the same device id used at login.

## Deployment
- Build the client and serve static assets or host separately (Netlify/Vercel for client, any Node host for server).
- Keep `SECRET_KEY` and DB credentials secure in environment variables.

## Notes
- This README is a concise overview. Consult files under `server/Controllers`, `server/Routes` and `client/src` for specific endpoints and frontend integration details.