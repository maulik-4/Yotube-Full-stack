# Vidmo (MERN)

Unified guide for the Vidmo video platform covering both frontend (client) and backend (server).

## Stack
- Frontend: React + Vite, React Router, Tailwind/CSS utilities, Axios
- Backend: Node.js, Express, MongoDB (Mongoose), Redis (rate limiting/cache)
- Auth: JWT with device-based tracking

## Key Features
- Video: upload, watch, like/dislike, views tracking, comments with rate limiting
- Search: server-side search with caching/rate limiting
- History: watch history tracking per user
- Subscriptions: subscribe/unsubscribe and list subscribed channels; sidebar shows your channels
- Analytics: creator analytics endpoint + dashboard (views, likes, comments, watch time per video)
- Profiles: channel page lists user videos with owner edit controls
- Admin: admin entry point
- Auth: login/signup, logout, guarded routes/actions

## Project Structure
- `client/` React SPA (pages: homepage, search, watch, profile, subscriptions, history, analytics, upload, auth, admin)
- `server/` Express API (routes: auth/user, video, history; Redis config; middlewares)

## Prerequisites
- Node.js 18+
- MongoDB instance
- Redis instance

## Backend Setup (`server/`)
1) Install deps: `npm install`
2) Create `.env` with:
```
MONGO_URI=...
JWT_SECRET=...
REDIS_URL=...
PORT=5000
```
3) Start dev server: `npm run dev` (or `npm start`)

## Frontend Setup (`client/`)
1) Install deps: `npm install`
2) Create `.env` with:
```
VITE_API_BASE_URL=http://localhost:5000
```
3) Run dev server: `npm run dev`

## Common Scripts
- Client: `npm run dev`, `npm run build`, `npm run preview`
- Server: `npm run dev` (nodemon), `npm start`

## Notes
- Rate limiting applied to search/comments; Redis caches search and home feeds.
- Sidebar "Your Videos" links to the signed-in profile; subscriptions list shows subscribed channels.
- Analytics page consumes `/history/analytics` data for creator insights.
