# Typing Test

A modern typing test application built with React, TypeScript, Vite, React Router, Tailwind CSS, ESLint, and Prettier.

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting
- **Prettier** - Code formatting

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

Build the application:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Code Quality

### Linting

Check for linting errors:

```bash
npm run lint
```

Fix linting errors automatically:

```bash
npm run lint:fix
```

### Formatting

Format code with Prettier:

```bash
npm run format
```

Check if code is properly formatted:

```bash
npm run format:check
```

## Project Structure

```
src/
├── components/     # Reusable components
│   └── Navigation.tsx  # Navigation component
├── pages/         # Page components
│   ├── Home.tsx       # Home page
│   ├── About.tsx      # About page
│   └── Contact.tsx    # Contact page
├── hooks/         # Custom React hooks
├── utils/         # Utility functions
├── types/         # TypeScript type definitions
├── App.tsx        # Main application component with routing
└── main.tsx       # Application entry point
```

## Pages

- **Home** (`/`) - Main landing page with app introduction
- **About** (`/about`) - Information about the typing test application
- **Contact** (`/contact`) - Contact form and information
