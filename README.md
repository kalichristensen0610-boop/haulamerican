# Haul American Junk
Simple React website with an HTML entry point and CSS styling. Navigation: Services, Service Areas, Pricing, Reviews, FAQ.

## Local development
```sh
npm ci
npm run dev
```

## Production build
```sh
npm run build
```
The `dist/` folder is the static website published by Sites.

## Docker
```sh
docker compose up --build -d
```
Open http://localhost:8080. Stop with `docker compose down`.
Docker uses a multi-stage Node build and Nginx static server. Docker is an alternative hosting path; Sites deploys the compiled static assets.

## Before customer launch
The quote form prepares details locally; it does not transmit or book requests. Connect a business phone/email or a real submission endpoint before accepting leads. Replace the review placeholder with verified customer reviews and the correct business profile URL. Load sizes are illustrative; only the $149 minimum and user-supplied specialty rates are quoted. No competitor ratings or testimonials are used.

## Source
`src/main.jsx` contains React interactions and components. `src/content.json` contains editable page layouts rendered as React elements. The build generates 31 directly accessible pages: home, About Us, five main pages, quote, six service pages, and 17 city pages. `src/styles.css` contains responsive styling. `public/logo.png` is the supplied logo.

## Visual assets
The homepage equipment scene is AI-generated illustrative imagery, not a photograph of the company’s actual fleet. Barlow Condensed and DM Sans are open-source fonts, served locally. Brand colors use navy, red, and white.

## About and map
About copy is in `src/content.json`; update owner and exterior-business spelling there when confirmed. Social URLs are empty in `socialLinks` in `src/main.jsx` and display coming-soon cards until supplied. The interactive map uses Leaflet and local US county boundary data (US Census geometry distributed by Plotly), without remote map tiles with approximate city-center markers and a draggable illustrative truck, not live fleet tracking.
