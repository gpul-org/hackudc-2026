# HackUDC 2026 🚀

The official website for HackUDC 2026 - Galicia's open source hackathon organized by GPUL.

## About HackUDC

HackUDC is an open source hackathon that brings together 400+ developers, students, and tech enthusiasts for a weekend of innovation, learning, and community building. Organized by GPUL (Grupo de Programadores e Usuarios de Linux) at the University of A Coruña, the event celebrates open source culture while fostering the next generation of tech talent in Galicia.

**Event Details:**

- 📅 February 2026
- 🏛️ University of A Coruña
- 👥 400+ participants expected
- 💻 Focus on open source projects and innovation

## Tech Stack

This website is built with modern web technologies:

- **Framework:** [Astro](https://astro.build/) - Static site generator with excellent performance
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Typography:** [Roboto](https://fonts.google.com/specimen/Roboto) via Fontsource
- **Package Manager:** pnpm

## Getting Started

### Prerequisites

- Node.js >= 22.0.0
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/gpul-org/hackudc-2026.git
cd hackudc-2026

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The site will be available at `http://localhost:4321`

### Available Scripts

```bash
pnpm dev        # Start development server
pnpm build      # Build for production
pnpm preview    # Preview production build
```

## Project Structure

```
src/
├── assets/          # Images and static assets
├── layouts/         # Astro layout components
├── pages/           # Route pages
│   ├── index.astro  # Homepage
│   └── join.astro   # Join the team page
└── styles/          # Global styles
```

## Design System

The website features a retro/cyberpunk aesthetic:

- **Color Palette:** Amber gradients on dark backgrounds
- **Typography:** Roboto with expanded letter spacing for that futuristic feel
- **Effects:** Scanlines, vignettes, and CRT-inspired visual elements
- **Interactions:** Smooth hover animations and transitions

## Contributing

We welcome contributions from the community! Whether you're:

- 🎨 A designer wanting to improve the visual experience
- 💻 A developer looking to add features or fix bugs
- 📝 Someone who found a typo or wants to improve content

Please feel free to open an issue or submit a pull request.

### Development Guidelines

1. Follow the existing code style and conventions
2. Test your changes across different screen sizes
3. Ensure accessibility standards are maintained
4. Keep the retro/cyberpunk aesthetic consistent

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Website:** [hackudc.gpul.org](https://hackudc.gpul.org)
- **Organization:** [GPUL - University of A Coruña](https://gpul.org)
- **Email:** hackudc@gpul.org

---

Made with ❤️ by GPUL in A Coruña
