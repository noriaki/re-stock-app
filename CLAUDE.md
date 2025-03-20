# re-stock-app Guidelines

## Commands
- `yarn dev` - Start development server with turbopack
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint

## Code Style

### Architecture
- Components: Split between `/features` (business logic) and `/ui` (reusable elements)
- State: Zustand for state management with persist middleware
- Types: DDD approach with branded types and factory functions
- Error handling: Result type pattern for explicit error handling

### Formatting
- Indentation: 2 spaces
- Max line length: 100 characters
- Quotes: Single quotes preferred
- File naming: kebab-case for files (e.g., `item-card.tsx`)
- Component naming: PascalCase (e.g., `ItemCard`)
- Variables/functions: camelCase
- Constants: UPPER_SNAKE_CASE
- Comments: Japanese comments for context/sections

### Import Order
1. React/Next.js imports
2. External libraries
3. Internal modules (using @/ prefix)
4. Relative imports

### TypeScript
- Use branded types for type safety
- Create factory functions for type instances
- Avoid `any`, use `unknown` with type narrowing
- Explicitly type all function parameters and returns
- Use interfaces for components props, suffixed with `Props`
