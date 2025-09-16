# CRM Contact Page

A modern, JSON-driven contact management application built with React, TypeScript, and vanilla CSS.

## Quick Start

### Prerequisites

- Node.js 20.19+ or 22.12+
- npm 9+

### Setup

```bash
# Clone and install
git clone <repository-url>
cd crm-contact-page
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

## Available Scripts

```bash
npm run dev          # Development server
npm run build        # Production build
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run format       # Format code
```

## Tech Stack

- **React 19** + **TypeScript 5.8** + **Vite 7.1**
- **React Query** for state management
- **Zod** for type validation
- **Vanilla CSS** with modern features
- **PWA** capabilities with offline support

## Project Structure

```
src/
├── assets/           # JSON configuration files
├── components/       # Atomic Design components
│   ├── atoms/       # Basic UI elements
│   ├── molecules/   # Composite components
│   └── organisms/   # Complex components
├── hooks/           # Custom React hooks
├── services/        # API and caching
├── types/           # TypeScript definitions
└── styles/         # Global CSS
```

## Data Configuration

The app uses JSON files for configuration:

- `contactData.json` - Contact information
- `contactFields.json` - Field definitions and labels
- `conversationsData.json` - Contact conversations
- `notesData.json` - Notes data
- `layout.json` - Layout configuration

## Deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ace0611/crm-contact-page)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ace0611/crm-contact-page)

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.
