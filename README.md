# Interactive Profile Card System

This is a small React + Vite project that shows how to build reusable UI components and make them feel alive. Each profile card is a component that receives data through props and manages its own follow/unfollow state. There is also a second interaction to reveal a character quote.

The theme is anime-inspired (Luffy, Gojo, Naruto, Ichigo), and each card has its own accent color to make it feel distinct.

## What this project demonstrates

- Reusable components (`ProfileCard`)
- Props for passing data (name, role, description, quote, color)
- `useState` for interactive follow/unfollow behavior
- Conditional rendering (button label + quote toggle)
- List rendering with `map()` and proper keys
- Clean, custom CSS styling

## How it works

`App.jsx` holds the profile data and maps it into multiple `ProfileCard` components.  
`ProfileCard.jsx` handles its own state and UI interactions.  
`style.css` defines the layout, theme, and color accents.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL that Vite prints in your terminal.

## Project structure (main files)

- `src/App.jsx` — data + list rendering
- `src/components/ProfileCard.jsx` — reusable card component
- `src/style.css` — styling and theme
- `src/main.jsx` — React entry point

## Customize it

Want different characters, colors, or styles?  
Update the `PROFILES` array in `src/App.jsx` and the CSS in `src/style.css`.
