# Task Manager

A modern task management application built with React, TypeScript, and Vite. This application demonstrates core React concepts including components, state management, hooks, and TypeScript integration.

## Features

-  Add, complete, and delete tasks
-  Set due dates for tasks
-  Responsive design
-  Automatic local storage persistence
-  Built with Vite for fast development
-  TypeScript for type safety

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Core Concepts Demonstrated

- React Components
- Props and State
- Hooks (useState, useEffect)
- Event Handling
- Conditional Rendering
- TypeScript Integration
- Error Boundaries

## Tech Stack

- ⚛ React 18
-  TypeScript
-  Vite
-  CSS Modules
-  React Testing Library (optional)

## Contributing

Feel free to submit issues and enhancement requests.
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
=======
# task-manager
>>>>>>> fbc0fb074fd0c7ca7aa40175d86299057e9bb6cb
