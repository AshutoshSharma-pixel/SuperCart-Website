# SuperCart — Cashierless Retail Landing Page

A premium, high-performance, dark-mode SaaS landing page for **SuperCart** — a cashierless retail technology tailored for the Indian shopping ecosystem. 

SuperCart enables customers to scan items using their smartphones, pay digitally via UPI/Cards, and check out instantly without waiting in queue queues.

---

## 🎨 Design System & Philosophy

Inspired by premium engineering and design interfaces like Vercel, Linear, and Stripe, SuperCart combines a deep dark-mode design system with striking metallic gold highlights and Indian retail context.

### Design Tokens
- **Background**: `#0D1117` (Deep dark navy)
- **Surfaces**: `#161B22` & `#1C2330`
- **Gold Accents**: `#C8A84B` & `#E8C96A`
- **Text**: `#F0F0F0` (High contrast) & `rgba(240, 240, 240, 0.5)` (Muted)
- **Typography**: 
  - Headings: `Bebas Neue`
  - Body: `DM Sans`
  - Mono / Labels: `JetBrains Mono`

---

## ✨ Features Implemented

### 1. Visual & 3D Depth Elements
* **3D Perspective Grid Floor**: A custom CSS perspective grid built dynamically at the bottom of the Hero section, masked smoothly with a fading gradient.
* **Interactive 3D Phone Mockup**: A device mockup showing an active shopping session. It features automated floating vertical animations and tracks the mouse cursor coordinates for a real-time parallax rotation effect (`rotateY` / `rotateX`).
* **Custom Cursor**: 
  - A dual-element cursor: a precise inner dot combined with a trailing outer ring.
  - The outer ring follows with fluid motion using a linear interpolation (`lerp`) loop.
  - Expands and glows when hovering over any clickable item.
  - Automatically hidden on mobile/touch interfaces to ensure native behavior.

### 2. Scroll & Transition Mechanics
* **Frosted Glass Navbar**: A fixed navigation bar that transitions from fully transparent to a blurred, frosted glassmorphism texture with a gold border on scroll.
* **Scroll-Reveal Animations**: Staggered scroll animations using `IntersectionObserver` that fade in and slide up elements smoothly as they enter the screen.
* **Infinite Text Ticker**: A continuous, performant CSS marquee track showing the key value propositions of SuperCart separated by gold diamonds.

---

## 📂 File Structure

```bash
├── index.html            # Main landing page markup (Hero, How It Works, Features, Pricing, Footer)
├── privacy-policy.html   # Privacy guidelines compliant with the Indian IT Act 2000
├── style.css             # Main stylesheet (3D matrices, grids, custom scrollbars, transitions)
├── script.js             # Interaction logic (custom cursor lerp, scroll tracking, 3D parallax)
└── README.md             # Project documentation (this file)
```

---

## 🚀 How to Run Locally

Since this is built using pure HTML, CSS, and Vanilla JavaScript, there are no build steps, frameworks, or dependencies.

### Option A: Double-Click
1. Open the repository folder.
2. Double-click `index.html` to open it directly in any modern browser.

### Option B: Local Web Server
If you prefer running a local server to simulate a production environment:
* Using Python:
  ```bash
  python3 -m http.server 8000
  ```
  Open `http://localhost:8000` in your browser.
* Using Node.js / npm (`serve` package):
  ```bash
  npx serve
  ```

---

## 🛡️ License & Compliance
This landing page and privacy policy are compliant under the information security guidelines of the Information Technology (IT) Act, 2000 (India). Made with ♥ in India.
