# CRM Contact Page

A dynamic, JSON-driven contact management application built with React, TypeScript, and TailwindCSS. This project demonstrates modern web development practices including PWA capabilities, offline functionality, and atomic design patterns.

## 🚀 Quick Start

### Prerequisites
- Node.js 20.19+ or 22.12+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd crm-contact-page

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

## 🛠️ Tech Stack

### Core Technologies
- **React 19** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **TailwindCSS v4** - Utility-first CSS framework

### Data Management
- **React Query** - Server state management and caching
- **Zod** - Runtime type validation and schema inference
- **LocalForage** - IndexedDB persistence for offline support

### Code Quality
- **ESLint** - Code linting with TypeScript support
- **Prettier** - Code formatting
- **Husky** - Git hooks for pre-commit checks
- **lint-staged** - Run linters on staged files

### PWA & Offline
- **Vite PWA Plugin** - Progressive Web App capabilities
- **Workbox** - Service worker for caching strategies
- **Service Worker** - Offline functionality and background sync

### Testing
- **Vitest** - Fast unit testing framework
- **React Testing Library** - Component testing utilities
- **jsdom** - DOM environment for tests

## 📁 Project Structure

```
src/
├── assets/                 # JSON configuration files
│   ├── layout.json        # Default layout configuration
│   ├── layout-alt.json    # Alternative layout configuration
│   ├── contactFields.json # Field definitions and metadata
│   └── contactData.json   # Sample contact data
├── components/            # Atomic Design components
│   ├── atoms/            # Basic UI elements (Text, Avatar)
│   ├── molecules/        # Composite components (FieldRow, Folder)
│   └── organisms/        # Complex components (ContactDetailsPanel)
├── features/contact/      # Contact-specific features
│   ├── ContactPageContainer.tsx  # Data fetching and state management
│   ├── ContactPageView.tsx       # Presentation component
│   └── field-registry.tsx       # Field type registry
├── hooks/                # Custom React hooks
│   ├── useContactData.ts # Contact data fetching
│   ├── useLayout.ts      # Layout configuration fetching
│   └── useContactFields.ts # Field definitions fetching
├── services/             # External service integrations
│   ├── api.ts           # API calls and data fetching
│   └── cache.ts         # Caching utilities and persistence
├── utils/               # Utility functions
│   └── jsonRenderer.ts  # JSON-driven UI rendering engine
├── sw/                  # Service worker
│   └── sw.js           # PWA service worker implementation
├── styles/              # Global styles and design tokens
├── types/               # TypeScript type definitions
│   ├── schemas.ts       # Zod schemas and inferred types
│   └── index.d.ts       # Additional type definitions
└── tests/               # Test files
    ├── setup.ts         # Test configuration
    └── renderer.spec.tsx # JSON renderer tests
```

## 🎨 Features

### Dynamic Layout System
- **JSON-driven UI**: Layouts defined in JSON files for easy customization
- **Responsive Grid**: Automatic responsive behavior based on column configuration
- **Layout Switching**: Toggle between different layouts at runtime
- **Field Registry**: Extensible field type system with custom renderers

### Offline-First PWA
- **Service Worker**: Automatic caching of assets and API calls
- **IndexedDB Persistence**: React Query cache persisted for offline access
- **Background Sync**: Automatic data synchronization when online
- **Installable**: Can be installed as a native app on mobile devices

### Modern Development Experience
- **Hot Module Replacement**: Instant updates during development
- **Type Safety**: Full TypeScript coverage with strict type checking
- **Code Quality**: Automated linting and formatting on commit
- **Testing**: Comprehensive test coverage with Vitest

## 🔧 Configuration

### JSON Configuration Files

#### Layout Configuration (`layout.json`)
```json
{
  "title": "Contact Details",
  "sections": [
    {
      "id": "personal",
      "label": "Personal Information",
      "columns": 2,
      "fields": ["firstName", "lastName", "email", "phone"]
    }
  ]
}
```

#### Field Definitions (`contactFields.json`)
```json
{
  "firstName": {
    "label": "First Name",
    "type": "text",
    "required": true
  },
  "email": {
    "label": "Email",
    "type": "email",
    "required": true
  }
}
```

#### Contact Data (`contactData.json`)
```json
{
  "id": "c_001",
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "phone": "+1-555-0123"
}
```

### Environment Variables
Create a `.env` file for environment-specific configuration:

```env
VITE_API_BASE_URL=/src/assets
VITE_CACHE_TTL=300000
VITE_OFFLINE_MODE=true
```

## 🧪 Testing

### Running Tests
```bash
# Run tests in watch mode
npm run test

# Run tests once
npm run test:run

# Run tests with UI
npm run test:ui
```

### Test Coverage
- **Unit Tests**: Individual function and component testing
- **Integration Tests**: Component interaction testing
- **E2E Tests**: Full application flow testing (planned)

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deployment Options
- **Static Hosting**: Deploy to Vercel, Netlify, or GitHub Pages
- **CDN**: Use CloudFlare or AWS CloudFront for global distribution
- **Docker**: Containerize for container orchestration platforms

## 🔍 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

## 📱 PWA Features

### Offline Functionality
- **Cached Assets**: All static assets cached for offline access
- **Data Persistence**: Contact data cached in IndexedDB
- **Background Sync**: Automatic sync when connection restored

### Installation
- **Mobile**: Add to home screen from browser
- **Desktop**: Install as native app (Chrome/Edge)
- **App Store**: Can be packaged for app stores using Capacitor

## 🐛 Troubleshooting

### Common Issues

#### Build Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Service Worker Issues
```bash
# Clear browser cache and service worker
# Chrome DevTools > Application > Storage > Clear storage
```

#### TypeScript Errors
```bash
# Check TypeScript configuration
npx tsc --noEmit
```

## 🤝 Contributing

### Development Workflow
1. **Fork** the repository
2. **Create** a feature branch
3. **Make** changes with tests
4. **Run** linting and tests
5. **Commit** with conventional commits
6. **Push** and create a pull request

### Code Standards
- **ESLint**: Follow configured linting rules
- **Prettier**: Use automated formatting
- **TypeScript**: Maintain strict type safety
- **Tests**: Write tests for new features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** - For the amazing React framework
- **Vite Team** - For the fast build tool
- **TailwindCSS Team** - For the utility-first CSS framework
- **TanStack Team** - For React Query and excellent developer tools