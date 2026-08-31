# AGENTS.md - Development Guidelines for YN Hosting Frontend

This document provides essential guidelines for agentic coding agents working on this Next.js frontend project.

## Build & Development Commands

### Essential Commands
- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production (includes Million.js optimization)
- `pnpm start` - Start production server
- `pnpm lint` - Run Biome linter and formatter

### Testing
This project currently has no test framework configured. When adding tests:
1. Install preferred testing framework (Jest/Vitest + React Testing Library)
2. Update this section with test commands
3. Use `pnpm test` for running all tests
4. Use `pnpm test --filename` for single test file

## Code Style Guidelines

### Formatting & Linting
- Uses Biome for formatting and linting (see biome.json)
- 2-space indentation
- Sorted imports and properties (auto-enabled)
- Sorted Tailwind classes (auto-fix enabled)
- No semicolons preferred (follow Biome defaults)

### Import Organization
- Use absolute imports with `@/` prefix for src directory
- Use `@tina/` prefix for TinaCMS imports (e.g., `@tina/__generated__/types`)
- Type imports must use `import type` (enforced by Biome)
- External imports first, then internal imports
- Example:
```typescript
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { getGlobalData } from "@/services/cms";
```

### TypeScript Conventions
- Strict mode enabled
- Use interfaces for object shapes, types for unions/primitives
- Prefer explicit any warnings (Biome rule: noExplicitAny: "warn")
- Use `type` imports for type-only imports
- Function components: `export default function ComponentName()`
- Prefer TinaCMS generated types over custom type definitions

### Component Patterns
- Use function declarations for components (not arrow functions)
- Components are async if they fetch data
- Destructure props consistently
- Use cva (class-variance-authority) for component variants
- Always forward ref when needed
- Example component structure:
```typescript
import { cn } from "@/lib/utils";

interface ComponentProps {
  children: ReactNode;
  className?: string;
}

export default function Component({ children, className }: ComponentProps) {
  return (
    <div className={cn("default-classes", className)}>
      {children}
    </div>
  );
}
```

### File Naming & Structure
- Components: PascalCase (Button.tsx, Header.tsx)
- UI components: kebab-case (buy-button.tsx, chat-bubble.tsx, two-line-title.tsx)
- Utilities/functions: camelCase (utils.ts, cms.ts)
- Pages: lowercase with hyphens (precios/page.tsx)
- Icons: lowercase (spigot.tsx, forge.tsx)
- Config: camelCase (variables.ts, metadata.ts, pages.ts)

### Directory Structure
```
src/
├── app/              # Next.js App Router pages
├── components/
│   ├── ui/           # Reusable UI components
│   ├── layout/       # Layout components (Header, Footer)
│   ├── blocks/       # CMS content blocks
│   ├── icons/        # Icon components
│   ├── pages/        # Page-specific components
│   └── providers/    # Context providers
├── config/           # Configuration and constants
├── lib/              # Utility functions
└── services/         # Data fetching services
```

### Tailwind CSS Guidelines
- Use Tailwind v4 with @import syntax
- Leverage custom CSS variables defined in globals.css
- Use cn() utility for class merging
- Prefer responsive variants: md: lg: etc.
- Use semantic color tokens: primary, secondary, muted, etc.
- Glassmorphism classes available: .glassmorphism, .glassmorphism-hiron, etc.

### Error Handling
- Use try-catch for async operations
- Return meaningful error messages in Spanish (project language)
- Example:
```typescript
try {
  const data = await getGlobalData();
  return data;
} catch (error) {
  throw new Error("Error al obtener datos", { cause: error });
}
```

### API Integration
- Uses TinaCMS for content management
- Data fetching centralized in `src/services/cms.ts`
- Types auto-generated in `@tina/__generated__/types`
- Use async/await, not .then()

### Constants and Configuration
- All constants centralized in `src/config/variables.ts`
- Includes: SITE_URL, SITE_NAME, DEFAULT_REVALIDATE, WHATSAPP_URL, GA_ID
- Import from `@/config/variables` instead of hardcoding values
- Environment variables accessed through config, not directly in components

### Special Libraries Usage
- **Radix UI**: For accessible primitives (Dialog, ScrollArea, Slot)
- **Motion**: For animations (replaces Framer Motion)
- **React Three Fiber/Drei**: For 3D components
- **Lucide React & Tabler**: Icon libraries
- **Million.js**: Performance optimization (production only)

### Performance Considerations
- Million.js enabled in production for React optimization
- Use Image component for optimized images
- Consider loading states for API calls
- Use React.useEffect for side effects, not for component logic

### Accessibility
- Use semantic HTML elements
- ARIA labels where needed (a11y rules partially disabled for design reasons)
- Keyboard navigation support for interactive elements

### Environment Variables
- Use .env for local development
- NEXT_PUBLIC_GA_ID for Google Analytics
- TinaCMS variables for CMS access

### Commit Guidelines
- Follow existing commit message patterns (check git log)
- Focus on the "why" not the "what"
- Use Spanish for commit messages if following project pattern

## Adding New Features
1. Check if similar patterns exist in codebase
2. Follow component structure and naming conventions
3. Add appropriate TypeScript types (prefer TinaCMS generated types)
4. Use existing utility functions (cn, sf, getGlobalData, etc.)
5. Ensure responsive design with Tailwind breakpoints
6. Run `pnpm lint` before considering work complete
