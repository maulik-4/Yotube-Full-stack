## Vidmo Client

SPA frontend for the Vidmo video platform built with React + Vite. This README lists the key user-facing features and primary pages.

### Core Features
- Authentication: signup/login flows with token storage and logout, guarded actions redirect to login.
- Video playback: dedicated watch page with comments, likes/dislikes, view increments, and related metadata.
- Uploads: creators can upload videos with title/description/category/thumbnail fields.
- Search: query videos by title/description/category with server-side rate limiting.
- History: per-user watch history with tracking helper for consistent updates.
- Subscriptions: subscribe to channels and browse a personalized subscriptions feed; sidebar shows your channels with avatars.
- Analytics: creator dashboard showing performance aggregates (views, likes, comments, watch time per video) pulled from server analytics endpoint.
- Profile: channel page that lists all videos from a user, with inline edit controls for the owner.
- Admin: admin-only panel entry point (visible when role is admin).

### Navigation & Layout
- Navbar: search box, voice search toggle, theme toggle, create/upload entry, profile dropdown, and notifications icon.
- Sidebar: sections for Home/Shorts/Subscriptions, Library (analytics, history, your videos link to your profile), and Explore topics.
- Footer: persistent footer rendered under routed pages.

### Primary Routes
- `/` homepage with feeds
- `/search?q=` search results
- `/watch/:id` video detail and player
- `/profile/:id` channel profile with video grid
- `/subscriptions` subscription feed
- `/history` watch history
- `/analytics` creator analytics dashboard
- `/upload` upload form
- `/login`, `/signup` auth flows
- `/admin` admin entry (role-gated)

### Local Development
- Ensure `VITE_API_BASE_URL` is set in a `.env` for API calls.
- Install dependencies with `npm install` and run `npm run dev` from the `client` directory.
