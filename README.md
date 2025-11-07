# Blossom Bloom

A single-page floral boutique experience showcasing bespoke bouquets, artisan services, and contact details with animated micro-interactions.

## Preview

Open `index.html` directly in your browser or host the folder with any static server (for example `npx serve .`) to explore the live layout.

## Features

- Modern glassmorphism hero with floating accents and call-to-action buttons
- Scroll-triggered reveal animations for every section using Intersection Observer
- Product gallery with hover elevation and wishlist toast micro-feedback
- Services, testimonials, and contact sections styled with cohesive card design
- Portfolio-inspired footer featuring GitHub, LinkedIn, LeetCode, and email links for Jay Prakash Kumar
- Motion-safe fallbacks honoring `prefers-reduced-motion`

## Tech Stack

- HTML5
- CSS3 with custom properties, animations, and responsive layout utilities
- Vanilla JavaScript for interaction logic

## Project Structure

```
.
├── index.html    # Landing page markup
├── styles.css    # Global styling, theme tokens, animation rules
└── script.js     # Scroll reveals, toast notifications, parallax touch-ups
```

## Development Notes

1. Clone or download this repository.
2. Install dependencies (none required for the static build).
3. Launch the site:
   - Double-click `index.html`, **or**
   - Serve the folder locally: `npx serve .`
4. Update imagery or copy by editing the relevant blocks in `index.html`.

## Customization Tips

- Adjust the palette or shadows via CSS variables declared at the top of `styles.css`.
- Replace Unsplash image URLs in the products section for different photography.
- Update footer links to point to new profiles or social platforms.

## Deployment

Because it is a static project, deploy with any static hosting solution (GitHub Pages, Netlify Drop, Vercel static export, etc.).

## License

This project currently has no license. Add one if you plan to distribute or open-source the work.
