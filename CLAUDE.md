# Schematica.tech — Project Instructions

**Owner:** Josh Preston (joshkpreston)
**Domain:** schematica.tech
**Entity:** Kinchito Tech, LLC
**Stage:** Pre-development / Prototype

## What Is This?

"Figma for electrical engineers" — a modern, web-based circuit design application with:
- Interactive schematic editor (drag-and-drop components, wire routing)
- Real-time circuit simulation (SPICE-based or custom)
- PCB layout designer
- Extensive component library
- Real-time collaboration (like Figma)
- Mobile support
- Export to industry formats (Gerber, SVG, PDF, KiCad, Eagle)

## Target Audience

1. **EE students** — learning circuits, need affordable/free tools
2. **Hobbyists/makers** — Arduino, Raspberry Pi, custom PCB projects
3. **Startups** — hardware startups needing collaborative design
4. **Professionals** — looking for modern web-based alternative to desktop tools
5. **Educators** — teaching circuits, need interactive classroom tools

## Stack (Planned)

| Layer | Tech |
|-------|------|
| Frontend | SvelteKit 5 + TypeScript |
| Canvas | HTML5 Canvas or WebGL (for schematic/PCB editor) |
| Collaboration | Cloudflare Durable Objects (real-time sync) |
| Backend | Cloudflare Workers or Go on Fly.io |
| Database | Cloudflare D1 or Neon PostgreSQL |
| Storage | Cloudflare R2 (project files, component libraries) |
| Auth | Magic links + OAuth (Resend) |
| Simulation | WebAssembly SPICE engine or server-side simulation |
| Deployment | Cloudflare Pages |

## Market Context

- Eagle (Autodesk) sunsetting June 2026
- Multisim Live (NI) shutting down September 2026
- PCB design market: $4.12B (2025) → $13.32B (2034)
- No "Figma for circuits" exists yet
- KiCad is free/open-source but desktop-only and ugly
- EasyEDA has users but poor UX
- Flux.ai tried but no free tier and performance issues

## Git

- Identity: joshkpreston
- Three-branch model: develop → staging → main
- CI/CD follows ~/src/CLAUDE.md rules

## Principles

- Free tier for students and hobbyists (always)
- Professional features behind paywall
- Performance is critical — Canvas/WebGL must be buttery smooth
- Collaboration is first-class (not bolted on)
- Import from KiCad/Eagle to capture migrating users
- Export to Gerber (manufacturing), SVG/PDF (documentation)
