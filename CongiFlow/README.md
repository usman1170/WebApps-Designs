# Momentum UI

Momentum is a React + Vite workspace dashboard UI with a clean editorial layout, orange-led accent system, glassmorphism touches, and light/dark theme support. The interface is designed around product dashboards, task management, analytics cards, and AI workspace surfaces.

## Design Direction

- Visual tone: premium productivity workspace with soft depth, warm orange highlights, and rounded panel geometry.
- Typography: `Outfit` is used across the app for a modern, soft, geometric feel.
- Primary accent: `#FF5300`
- Core surfaces: bright white in light mode and deep burnt-black tones in dark mode.
- Motion language: subtle hover lift, blurred background glow, and animated popup transitions.

## UI Highlights

- Left workspace sidebar with navigation, interaction list, and `Upgrade to PRO` CTA.
- Topbar with search, date selector, theme toggle, notifications, and profile avatar.
- Dashboard widgets for updates, KPI, workload, meetings, analytics, and calendar views.
- To-do board with execution stats, filters, searchable task lanes, and delivery health panels.
- Themed animated popups for:
  - `Upgrade to PRO`
  - `New Task`

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- `lucide-react`
- `react-router-dom`

## Theme Tokens

Defined in [tailwind.config.js](/Users/usmanghani/PythonFastApi/WebApps%20UI/CongiFlow/tailwind.config.js):

- `brand.DEFAULT`: `#FF5300`
- `brand.light`: `#FFEEE8`
- `brand.dark`: `#E64A00`
- `background`: `#F6F7FB`
- `surface`: `#FFFFFF`
- `text.main`: `#1A1C1E`
- `text.muted`: `#8A8C98`

## Project Structure

- [src/components](/Users/usmanghani/PythonFastApi/WebApps%20UI/CongiFlow/src/components): shared layout and visual building blocks
- [src/pages](/Users/usmanghani/PythonFastApi/WebApps%20UI/CongiFlow/src/pages): routed screens such as Dashboard, To-do Lists, Docs, Products, Templates, and AI Assistant
- [src/lib](/Users/usmanghani/PythonFastApi/WebApps%20UI/CongiFlow/src/lib): routing, theme provider, and modal state helpers
- [src/index.css](/Users/usmanghani/PythonFastApi/WebApps%20UI/CongiFlow/src/index.css): global styles and popup animation rules

## Popup System

The popup system is shared at layout level so multiple pages can open the same modal experience without duplicating UI logic.

- Modal state: [src/lib/workspace-modal.tsx](/Users/usmanghani/PythonFastApi/WebApps%20UI/CongiFlow/src/lib/workspace-modal.tsx)
- Modal host UI: [src/components/WorkspaceModalHost.tsx](/Users/usmanghani/PythonFastApi/WebApps%20UI/CongiFlow/src/components/WorkspaceModalHost.tsx)
- Layout integration: [src/components/DashboardLayout.tsx](/Users/usmanghani/PythonFastApi/WebApps%20UI/CongiFlow/src/components/DashboardLayout.tsx)

## Run Locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Notes

- The app is currently UI-focused and uses local mock data for several cards and task boards.
- The `New Task` and `Upgrade to PRO` popups are presentation-first and can be connected to backend actions later.
- The design system is optimized for desktop first, with responsive behavior already present for smaller screens.
