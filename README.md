# CRM Contact Page

## 🚀 Deployment

### Quick Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ace0611/crm-contact-page)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/crm-contact-page)

A modern, JSON-driven contact management application built with React, TypeScript, and vanilla CSS. This project demonstrates advanced web development practices including PWA capabilities, offline functionality, atomic design patterns, and dynamic data-driven UI rendering.

## 🚀 How to Run the App

### Prerequisites
- **Node.js**: Version 20.19+ or 22.12+
- **npm**: Version 9+ (comes with Node.js)
- **Modern Browser**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+

### Installation & Setup

```bash
# Clone the repository
git clone <repository-url>
cd crm-contact-page

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173` (or next available port)

### Available Scripts

```bash
# Development
npm run dev          # Start development server with hot reload

# Building
npm run build        # Build for production
npm run preview      # Preview production build locally

# Code Quality
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run format:check # Check code formatting

# Git Hooks (automatically installed)
# Pre-commit hooks run linting and formatting automatically
```

### First Time Setup

1. **Install dependencies**: `npm install`
2. **Start development server**: `npm run dev`
3. **Open browser**: Navigate to the provided localhost URL
4. **Install PWA** (optional): Click the install button in your browser

## 🛠️ Tech Stack

### Core Technologies
- **React 19** - Latest React with modern hooks and concurrent features
- **TypeScript 5.8** - Type-safe JavaScript with strict type checking
- **Vite 7.1** - Lightning-fast build tool and development server
- **Vanilla CSS** - Custom CSS with modern features (Grid, Flexbox, CSS Variables)

### Data Management & State
- **React Query (TanStack Query) 5.87** - Server state management with caching
- **Zod 4.1** - Runtime type validation and schema inference
- **LocalForage 1.10** - IndexedDB persistence for offline support
- **React Query Persist Client** - Automatic cache persistence

### Code Quality & Development
- **ESLint 9.33** - Code linting with TypeScript and React rules
- **Prettier 3.6** - Automated code formatting
- **Husky 9.1** - Git hooks for pre-commit checks
- **lint-staged 16.1** - Run linters only on staged files
- **TypeScript ESLint** - TypeScript-specific linting rules

### PWA & Offline Capabilities
- **Vite PWA Plugin 1.0** - Progressive Web App configuration
- **Workbox 7.3** - Service worker for advanced caching strategies
- **Service Worker** - Custom offline functionality and background sync

### Architecture Patterns
- **Atomic Design** - Component organization (atoms/molecules/organisms)
- **JSON-Driven UI** - Dynamic rendering from configuration files
- **Custom Hooks** - Reusable logic abstraction
- **Type-Safe APIs** - End-to-end type safety with Zod validation

## 📁 Folder Structure

```
crm-contact-page/
├── public/                     # Static assets
│   └── vite.svg               # Vite logo
├── src/
│   ├── assets/                # JSON configuration files
│   │   ├── contactData.json   # Contact data (array of contacts)
│   │   ├── contactFields.json # Field definitions and metadata
│   │   ├── conversationsData.json # Contact-specific conversations
│   │   ├── notesData.json     # Notes data
│   │   ├── layout.json        # Default layout configuration
│   │   └── layout-alt.json    # Alternative layout configuration
│   ├── components/            # Atomic Design components
│   │   ├── atoms/            # Basic UI elements
│   │   │   ├── Avatar.tsx    # Avatar component with initials fallback
│   │   │   └── Text.tsx      # Text component with variants
│   │   ├── molecules/        # Composite components
│   │   │   ├── FieldRow.tsx  # Field display component
│   │   │   ├── Folder.tsx    # Collapsible folder component
│   │   │   └── MessageRenderer.tsx # Dynamic message rendering
│   │   └── organisms/        # Complex components
│   │       ├── ContactDetailsPanel.tsx # Main contact details view
│   │       ├── ConversationsPanel.tsx  # Conversations and messaging
│   │       ├── NotesPanel.tsx         # Notes management
│   │       ├── CRMDashboard.tsx       # Main dashboard layout
│   │       ├── Header.tsx            # Application header
│   │       ├── Footer.tsx            # Pagination controls
│   │       └── SidebarIcons.tsx      # Sidebar navigation icons
│   ├── features/contact/      # Contact-specific features
│   │   ├── ContactPageContainer.tsx # Data fetching container
│   │   └── field-registry.tsx       # Field type registry
│   ├── hooks/                # Custom React hooks
│   │   ├── useContactData.ts # Contact data fetching with React Query
│   │   ├── useContactFields.ts # Field definitions fetching
│   │   ├── useConversationsData.ts # Conversations data fetching
│   │   ├── useNotesData.ts   # Notes data fetching
│   │   ├── useLayout.ts      # Layout configuration fetching
│   │   └── index.ts          # Hook exports
│   ├── services/             # External service integrations
│   │   ├── api.ts           # API calls and data fetching
│   │   └── cache.ts         # Caching utilities and persistence
│   ├── styles/              # Global styles
│   │   └── main.css         # All CSS styles (responsive design)
│   ├── types/               # TypeScript type definitions
│   │   ├── schemas.ts       # Zod schemas and inferred types
│   │   └── index.d.ts       # Additional type definitions
│   ├── utils/               # Utility functions (currently empty)
│   ├── sw/                  # Service worker
│   │   └── sw.js           # PWA service worker implementation
│   ├── tests/               # Test files (currently empty)
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Application entry point
│   └── vite-env.d.ts        # Vite environment types
├── dist/                    # Production build output
├── node_modules/            # Dependencies
├── package.json             # Project configuration and dependencies
├── package-lock.json        # Dependency lock file
├── tsconfig.json            # TypeScript configuration
├── tsconfig.app.json        # App-specific TypeScript config
├── tsconfig.node.json       # Node-specific TypeScript config
├── vite.config.ts           # Vite configuration
├── vitest.config.ts         # Vitest testing configuration
├── eslint.config.js         # ESLint configuration
└── README.md                # This file
```

## 📋 JSON Configuration Files

### 1. Contact Data (`contactData.json`)
**Purpose**: Stores the actual contact information as an array of contact objects.

**Structure**:
```json
[
  {
    "id": "c_001",
    "firstName": "Olivia",
    "lastName": "John",
    "email": "olivia.perry@example.com",
    "phone": "(555) 123-4567",
    "address": "123 Maple Street, Springfield.\nIL 62704. USA.",
    "businessName": "ABC Corp",
    "streetAddress": "123 Main Street",
    "city": "Springfield",
    "country": "United States",
    "owner": "Devon Lane",
    "followers": ["John Doe", "Jane Wilson"],
    "tags": ["VIP", "Enterprise", "Technical"],
    "driverPreference": "Professional Driver",
    "vehicleType": "Sedan"
  }
]
```

**Usage**: 
- Fetched by `useContactsData()` hook
- Rendered dynamically in `ContactDetailsPanel`
- Supports pagination between multiple contacts
- All field labels come from `contactFields.json`

### 2. Contact Fields (`contactFields.json`)
**Purpose**: Defines the structure, labels, and types for all contact fields.

**Structure**:
```json
{
  "folders": [
    {
      "name": "Contact",
      "fields": [
        {
          "key": "firstName",
          "label": "First Name",
          "type": "string"
        },
        {
          "key": "email",
          "label": "Email",
          "type": "email"
        }
      ]
    },
    {
      "name": "Head Car Driver Preferences",
      "fields": [
        {
          "key": "driverPreference",
          "label": "Driver Preference",
          "type": "string"
        }
      ]
    }
  ]
}
```

**Usage**:
- Fetched by `useContactFields()` hook
- Used to dynamically render field labels (no hardcoded labels)
- Defines field types for validation and rendering
- Organizes fields into collapsible folders
- Supports search functionality across all fields

### 3. Conversations Data (`conversationsData.json`)
**Purpose**: Stores contact-specific conversation threads and messages.

**Structure**:
```json
{
  "conversations": {
    "c_001": {
      "contactId": "c_001",
      "contactName": "Olivia John",
      "conversations": [
        {
          "id": "conv_001",
          "subject": "Set up a new time to follow up...",
          "threadCount": 3,
          "messages": [
            {
              "id": "msg_001",
              "type": "email",
              "sender": {
                "name": "Olivia John",
                "avatar": "OJ",
                "recipient": "To: Me"
              },
              "timestamp": "5 min ago",
              "actions": [
                {
                  "type": "star",
                  "icon": "star",
                  "filled": true
                }
              ],
              "content": {
                "text": "Hey John, You Order has reached...",
                "cta": {
                  "text": "Track Your Order",
                  "action": "track"
                }
              }
            }
          ]
        }
      ]
    }
  }
}
```

**Usage**:
- Fetched by `useContactConversations(contactId)` hook
- Contact-specific conversations (each contact has their own conversations)
- Supports different message types (email, WhatsApp)
- Dynamic typing indicator shows current contact's name
- Rendered by `MessageRenderer` component

### 4. Notes Data (`notesData.json`)
**Purpose**: Stores notes associated with contacts.

**Structure**:
```json
{
  "notes": [
    {
      "id": "note_001",
      "content": "Important client meeting scheduled for next week",
      "timestamp": "2 hours ago",
      "author": "John Doe"
    },
    {
      "id": "note_002",
      "content": "Follow up on contract details",
      "timestamp": "1 day ago",
      "author": "Jane Smith"
    }
  ]
}
```

**Usage**:
- Fetched by `useNotesData()` hook
- Rendered in `NotesPanel` component
- Supports adding new notes
- Timestamp and author information included

### 5. Layout Configuration (`layout.json` & `layout-alt.json`)
**Purpose**: Defines the layout structure for the contact details panel.

**Structure**:
```json
{
  "title": "Contact Details",
  "sections": [
    {
      "id": "personal",
      "label": "Personal Information",
      "columns": 2,
      "fields": ["firstName", "lastName", "email", "phone"]
    },
    {
      "id": "business",
      "label": "Business Information",
      "columns": 1,
      "fields": ["businessName", "address"]
    }
  ]
}
```

**Usage**:
- Fetched by `useLayout()` hook
- Controls how fields are organized and displayed
- Supports dynamic layout switching
- Defines column layouts for responsive design

## 🐛 Known Issues

### Current Issues

1. **Conversations Not Updating Between Contacts**
   - **Status**: Recently fixed
   - **Description**: Conversations panel was not updating when switching between contacts
   - **Solution**: Implemented contact-specific conversation fetching with proper React Query keys
   - **Files Affected**: `ConversationsPanel.tsx`, `useConversationsData.ts`, `conversationsData.json`

2. **Typing Indicator Shows Wrong Contact Name**
   - **Status**: Recently fixed
   - **Description**: Typing indicator always showed "Olivia is typing" regardless of current contact
   - **Solution**: Made typing indicator dynamic using `contact.firstName`
   - **Files Affected**: `ConversationsPanel.tsx`

3. **Search Icon Overlapping Placeholder Text**
   - **Status**: Recently fixed
   - **Description**: Search icon was overlapping with placeholder text in search input
   - **Solution**: Adjusted padding and icon positioning in CSS
   - **Files Affected**: `main.css`

4. **Mobile Layout Issues at 490px**
   - **Status**: Recently fixed
   - **Description**: Tabs were stacking vertically instead of staying horizontal at 490px screen size
   - **Solution**: Added specific media queries with higher CSS specificity
   - **Files Affected**: `main.css`

### Potential Issues

1. **No Test Coverage**
   - **Status**: Not implemented
   - **Description**: No unit tests or integration tests currently exist
   - **Impact**: Low confidence in code changes and refactoring
   - **Recommendation**: Implement Vitest + React Testing Library test suite

2. **Limited Error Handling**
   - **Status**: Basic error handling only
   - **Description**: No error boundaries or comprehensive error states
   - **Impact**: Poor user experience when errors occur
   - **Recommendation**: Add error boundaries and error state components

3. **Accessibility Gaps**
   - **Status**: Basic accessibility
   - **Description**: Missing ARIA labels, keyboard navigation, focus management
   - **Impact**: Poor accessibility for screen readers and keyboard users
   - **Recommendation**: Add comprehensive accessibility features

4. **Empty Utils Directory**
   - **Status**: Not implemented
   - **Description**: No utility functions for common operations
   - **Impact**: Code duplication and lack of reusable helpers
   - **Recommendation**: Create utility functions for data formatting, validation, etc.

5. **Service Worker Cache Issues**
   - **Status**: Potential issue
   - **Description**: Service worker might cache old versions of JSON files
   - **Impact**: Users might see outdated data
   - **Recommendation**: Implement proper cache invalidation strategies

### Browser Compatibility Issues

1. **CSS Grid Support**
   - **Issue**: Older browsers might not support CSS Grid
   - **Impact**: Layout might break in older browsers
   - **Solution**: Add fallback layouts for older browsers

2. **IndexedDB Support**
   - **Issue**: Some browsers have limited IndexedDB support
   - **Impact**: Offline functionality might not work
   - **Solution**: Add fallback to localStorage

### Performance Considerations

1. **Large JSON Files**
   - **Issue**: Large JSON files might impact initial load time
   - **Impact**: Slower initial page load
   - **Solution**: Implement lazy loading or pagination for large datasets

2. **React Query Cache Size**
   - **Issue**: Large cache might impact memory usage
   - **Impact**: Potential memory leaks
   - **Solution**: Implement proper cache size limits and garbage collection

## 🔧 Development Notes

### Key Features Implemented
- ✅ JSON-driven UI rendering
- ✅ Contact-specific conversations
- ✅ Dynamic field rendering from configuration
- ✅ Responsive design with mobile support
- ✅ PWA capabilities with offline support
- ✅ Type-safe data handling with Zod
- ✅ Modern React patterns with hooks
- ✅ Comprehensive CSS with hover states

### Architecture Decisions
- **Atomic Design**: Chosen for component organization and reusability
- **JSON-Driven UI**: Enables easy customization without code changes
- **React Query**: Provides excellent caching and data synchronization
- **Vanilla CSS**: Chosen over CSS frameworks for full control and smaller bundle size
- **TypeScript**: Ensures type safety throughout the application

### Future Enhancements
- Add comprehensive test suite
- Implement error boundaries
- Add accessibility features
- Create utility functions
- Add more micro-interactions
- Implement real-time updates
- Add data export/import functionality

### Build for Production
```bash
# Standard build
npm run build

# Build for GitHub Pages
npm run build:github

# Build for Vercel
npm run build:vercel
```

### Preview Production Build
```bash
npm run preview
```

### Deployment Commands
```bash
# Deploy to GitHub Pages
npm run deploy:github

# Deploy to Vercel
npm run deploy:vercel
```

### Deployment Options
- **Vercel**: One-click deploy with automatic CI/CD
- **Netlify**: Automatic deployments with preview branches
- **GitHub Pages**: Free hosting with GitHub Actions
- **Static Hosting**: Any static hosting provider
- **CDN**: Use CloudFlare or AWS CloudFront for global distribution

### Detailed Deployment Guide
See [DEPLOYMENT.md](./DEPLOYMENT.md) for comprehensive deployment instructions for all platforms.

## 📞 Support

For issues or questions:
1. Check the [Known Issues](#-known-issues) section above
2. Review the console logs for debugging information
3. Check browser developer tools for errors
4. Ensure all dependencies are properly installed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.