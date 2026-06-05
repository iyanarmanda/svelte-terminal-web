# Terminal Web

A terminal-style web interface for navigating personal websites. Navigate links using arrow keys and enter, with a retro terminal aesthetic.

## Tech Stack

- [SvelteKit](https://svelte.dev/)

## Getting Started

### Installation

```sh
# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

The app will be available at `http://localhost:5173`

## Usage

### Keyboard Controls

- **↑/↓ Arrow Keys** - Navigate between links
- **Enter** - Open the currently focused link
- **Tab** - Prevented (reserved for arrow key navigation)

### Available Commands

```sh
# Development
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview

# Run E2E tests
pnpm run test:e2e

# Run linting
pnpm run lint

# Format code
pnpm run format

# Type check
pnpm run check
```

## Project Structure

```
src/
├── routes/
│   ├── +page.svelte          # Main home page
│   ├── +layout.svelte        # Root layout
│   ├── layout.css            # Global styles
│   └── +error.svelte         # 404 error page
├── lib/
│   ├── assets/               # Static assets
│   └── index.ts              # Library exports
└── app.html                  # HTML shell

tests/
└── index.e2e.ts              # E2E tests
```

## Customization

### Add More Links

Edit `src/routes/+page.svelte` and add to the `links` array:

```typescript
const links = [
  { id: 1, href: 'https://portfolio.izuli.my.id', label: 'Personal Portfolio' },
  { id: 2, href: 'https://blog.izuli.my.id', label: 'Tech Blog & Articles' },
  // Add more links here
];
```

### Change Colors

Edit `src/routes/layout.css` and update CSS custom properties:

```css
:root {
  --color-terminal-bg: #000000;      /* Background color */
  --color-terminal-green: #00FF00;   /* Text color */
}
```

## Testing

Tests are located in the `tests/` folder and run with Playwright:

```sh
pnpm run test:e2e
```

Current tests cover:
- Page loads with welcome message
- All links are displayed
- Arrow key navigation works
- Link labels display when active
- Tab key prevention

## License

[MIT Licensed](https://github.com/iyanarmanda/svelte-terminal-web/blob/main/LICENSE.txt)
