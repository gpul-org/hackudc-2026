# Contributing to HackUDC 2026

Thank you for your interest in contributing to the HackUDC 2026 website! We welcome contributions from everyone in the community.

## Branching Strategy

We follow a structured branching workflow to maintain stability in production:

### Branch Overview

- **`main`** - Production branch
  - This branch represents the live website at [hackudc.gpul.org](https://hackudc.gpul.org)
  - Merges to `main` trigger automatic deployments to production
  - Only fully tested and approved changes should be merged here
  - Protected branch with review requirements

- **`develop`** - Development branch
  - This is where active development happens
  - Contains the latest features and changes being prepared for the next release
  - **All pull requests should be directed to this branch**
  - Used to create draft versions for review before production deployment

### Workflow

1. **Create your feature branch** from `develop`:
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** and commit them with clear, descriptive messages following [Conventional Commits](https://www.conventionalcommits.org).

3. **Open a Pull Request** to the `develop` branch
   - Provide a clear description of your changes
   - Reference any related issues
   - Ensure all checks pass

4. **Code review** - Maintainers will review your PR
   - Address any requested changes
   - Once approved, your PR will be merged to `develop`

5. **Release to production** - Maintainers periodically merge `develop` to `main`
   - This is a controlled process to ensure production stability
   - Triggers automatic deployment to the live website

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** >= 22.0.0 ([Download](https://nodejs.org/))
- **pnpm** (recommended package manager)
  ```bash
  npm install -g pnpm
  ```
- **Git** for version control

### Local Development Setup

1. **Fork the repository** on GitHub (if you're not a direct collaborator)

2. **Clone your fork** (or the main repo if you have access):
   ```bash
   git clone https://github.com/YOUR-USERNAME/hackudc-2026.git
   cd hackudc-2026
   ```

3. **Add upstream remote** (if you forked):
   ```bash
   git remote add upstream https://github.com/gpul-org/hackudc-2026.git
   ```

4. **Install dependencies**:
   ```bash
   pnpm install
   ```

5. **Start the development server**:
   ```bash
   pnpm dev
   ```
   The site will be available at `http://localhost:4321`

6. **Make your changes** and test them locally

### Available Scripts

```bash
pnpm dev        # Start development server with hot reload
pnpm build      # Build the site for production
pnpm preview    # Preview the production build locally
pnpm astro      # Run Astro CLI commands
```

## Development Guidelines

### Code Style

- **JavaScript/TypeScript**: Follow the existing code style in the project
- **Astro Components**: Use `.astro` files for pages and layouts
- **React Components**: Use for interactive components when needed
- **Styling**: Use Tailwind CSS utility classes consistently
- **Formatting**: Code will be automatically formatted (if configured)

### Design Consistency

This website features a **retro/cyberpunk aesthetic**. When contributing:

- Maintain the amber gradient color scheme on dark backgrounds
- Use the Roboto font family with expanded letter spacing
- Preserve visual effects like scanlines and CRT-inspired elements
- Ensure smooth hover animations and transitions
- Keep the futuristic, tech-focused visual language


### Responsive Design

- Test your changes across different screen sizes:
  - Mobile (320px+)
  - Tablet (768px+)
  - Desktop (1024px+)
  - Large screens (1440px+)
- Use Tailwind's responsive utilities (`sm:`, `md:`, `lg:`, etc.)

## Commit Message Guidelines

Write clear, concise commit messages that describe **what** changed and **why**:

```bash
# Good examples
git commit -m "chore: add FAQ section to homepage"
git commit -m "fix: navigation menu overflow on mobile devices"
git commit -m "chore: update event date and location details"

# Less helpful examples (avoid these)
git commit -m "Update stuff"
git commit -m "Fix bug"
git commit -m "Changes"
```

### Conventional Commits

Consider using conventional commit format:
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, no logic changes)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

Example: `feat: add sponsor section to homepage`

## Pull Request Process

1. **Update your branch** with the latest changes from `develop`:
   ```bash
   git checkout develop
   git pull upstream develop
   git checkout your-feature-branch
   git rebase develop
   ```

2. **Push your changes** to your fork:
   ```bash
   git push origin your-feature-branch
   ```

3. **Open a Pull Request** on GitHub:
   - Base branch: `develop`
   - Compare branch: `your-feature-branch`
   - Fill out the PR template (if available)
   - Add a clear title and description
   - Link any related issues

4. **Respond to feedback**:
   - Address code review comments
   - Make requested changes
   - Push updates to your branch (they'll appear in the PR automatically)

5. **Wait for approval**:
   - Maintainers will review and merge your PR
   - Once merged to `develop`, your changes will be in the next production release

## Reporting Issues

Found a bug or have a feature request? Please open an issue on GitHub:

1. **Check existing issues** to avoid duplicates
2. **Use a clear title** that describes the issue
3. **Provide details**:
   - What happened vs. what you expected
   - Steps to reproduce (for bugs)
   - Screenshots or screen recordings (if applicable)
   - Browser and device information (for UI issues)

## Getting Help

- **Questions?** Open a discussion on GitHub or reach out to the maintainers
- **Email:** hackudc@gpul.org

## Code of Conduct

Be respectful, inclusive, and constructive in all interactions. We're all here to build something great together.

## License

By contributing to this project, you agree that your contributions will be licensed under the same MIT License that covers the project.

---

Thank you for contributing to HackUDC 2026! 🚀
