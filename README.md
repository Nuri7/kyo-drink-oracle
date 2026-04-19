# KYŌ Drink Oracle

KYŌ Drink Oracle is an interactive web application that helps customers find their perfect drink at KYŌ KLUB. By answering a quick, vibe-based quiz (temperature, base flavor, sweetness, texture, flavor twist, and mood), the system calculates the ideal match from the KYŌ KLUB menu.

This app is built with pure HTML, CSS, and JavaScript, and functions as a Progressive Web App (PWA).

## Features
- **Vibe-based Quiz:** 6 straightforward questions to determine the perfect drink.
- **Smart Scoring System:** Evaluates a database of drinks to find the closest match.
- **Tie-breaker Oracle:** When multiple drinks match equally well, destiny (random logic) handles the final choice.
- **PWA Support:** Installable on devices for offline and app-like access.
- **Analytics Ready:** Fully integrated with PostHog for usage tracking.

---

## Analytics: Where to see Statistics and Replays

This app uses [PostHog](https://posthog.com/) to automatically track user behavior, button clicks, and custom actions.

### How to access your data:
1. Log into your dashboard at [eu.posthog.com](https://eu.posthog.com).
2. Ensure you are in your active project.

### Where to find what:
- **Statistics & General Usage:**
  - Go to the **Dashboards** or **Product Analytics** tab on the left sidebar.
  - From here, you can see how many people visited the app, page views, and activity trends.
- **What users are clicking:**
  - Standard button clicks (start, choices, back) are tracked automatically. Look for the "Autocapture" events in the **Activity > Events** tab to see every button clicked by users.
- **Which drinks people end up with:**
  - We set up a custom event called `drink_recommended`. 
  - To view this, go to **Data > Events** or create a new Insight based on the `drink_recommended` event. Here you can see not only the most recommended drinks, but also the _reasons_ (flavor, mood, sweetness choices) that led to them!
- **Session Replays (Screen Recordings):**
  - Go to the **Session Replay** tab on the left sidebar.
  - Here, you can watch actual recordings of how users navigate the quiz, which options they hesitate on, and what they ultimately end up with. *(Note: Make sure "Record user sessions" is turned on in your PostHog Project Settings).*

### Built-in Admin Dashboard (`/admin.html`)
We have also set up a local admin page inside the app where you can embed these PostHog statistics directly! 
To view it:
1. Navigate to [`/admin.html`](admin.html) in your browser.
2. Enter the secure PIN: **`3340`**
3. **First-time setup:** Follow the on-screen instructions to create a public shared link for your PostHog Dashboard, copy the embed `<iframe...>` code, and paste it directly into the `admin.html` source code. It will permanently display there for easy access!

---

## How to run locally
Because this is a static site without a build step, running it is easy:
1. Open the project folder in your terminal.
2. Start a local server. If you have Python installed, you can try:
   ```bash
   python3 -m http.server 8000
   ```
   Or use the `Live Server` plugin in VSCode.
3. Open `http://localhost:8000` in your browser.
